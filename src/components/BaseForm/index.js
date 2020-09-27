import moment from 'moment'
import { getBaseLayout, getDetailLayout, getEditLayout_kpitodo,getDetailLayout_kpitodo,saveLayout, getEditLayout, saveEditLayout } from '@/api/commonApi'
import { getProcessDetail,approvalStart } from '@/api/approval'
import fieldHandle from '@/mixins/fieldHandle'
import { fileUploadApi } from '@/api/uploaddown'

import FooterToolBar from '@/layouts/FooterToolbar'
import staffAchievements from '../staffAchievements/staffAchievements.vue'
import kpiApproval from '../kpiApproval/index.vue'
import TreeSelect from '../Tree/tree.vue'
import ModelTable from '../ModelTable/modelTable.vue'
export default {
    name:'BaseFormLayout',
    data () {
        return {
            layoutList:[],
            activeKey:[],
            form: this.$form.createForm(this),
            imgList:[],
            previewImage:'',
            previewVisible: false,
            readonly:false,
            fileUploadApi,
            accessToken:null,
            referObjectCode:null//关联字段标识
        }
    },
    mixins:[fieldHandle],
    props:{
        formCode:{
            type:String,
            default:''
        },
        showBottom:{
            type:Boolean,
            default:true
        },
        flag:{
            type:[String , Number] ,
            default: ''
        },
        id:{
            type:[String , Number] , 
            default: ''
        },
        currentForm:{
            type: Object , 
            default: () => null 
        }
    },
    components:{
        FooterToolBar,
        TreeSelect,
        staffAchievements,
        kpiApproval,
        ModelTable
    },
    computed: {
        operationType(){
            return this.$route.query.operationType=='经理审批'||this.$route.query.operationType=='经理第一次评分'||this.$route.query.operationType=='员工自评'||this.$route.query.operationType=='经理第二次评分'
        }
    },
    methods:{
        decoratorFn(i){//初始化绑值
            let initialValue = ''
            if(i.valueType != 'SELECT' && i.valueType != 'CHECKBOX' && i.valueType != 'ORG_TREE_MULTI' && i.valueType != 'PICTURE' && i.valueType != 'ATTACHMENT'){
                const currentValue = i.value && i.value.length ? i.value.join(',') : ''
                if(i.valueType == 'DATETIME' || i.validateFields == 'DATE'){
                    initialValue = currentValue ? moment(currentValue,i.validateFields == 'DATE' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss') : null
                } else if(i.valueType == 'RADIO' && i.codeItems){
                    const defaultValue = i.codeItems.filter(ele=>ele.defaultStatus)
                    initialValue = currentValue || (defaultValue.length > 0 ? defaultValue[0].codeKey : undefined)
                } else if(i.valueType == 'INTEGER' || i.valueType == 'DECIMAL'){
                    initialValue = currentValue ? Number(currentValue) : null
                }else{
                    initialValue = currentValue
                }
            }else{
                if(i.valueType != 'CHECKBOX' && i.codeItems){
                    const defaultValue = i.codeItems.filter(ele=>ele.defaultStatus)
                    initialValue = i.value || defaultValue.length ? defaultValue.map(ele=>ele.codeKey) : undefined
                }else{
                    initialValue = i.value || []
                }
            }
            if(i.valueType == 'SELECT'){//多级联动，强制处理数据
                i.codeItems.forEach(ele=>{
                    ele.isLeaf = false
                })
            }
            const rules = [
                {
                    type : i.valueType == 'SELECT' || i.valueType == 'ORG_TREE_MULTI' || i.valueType == 'CHECKBOX' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? 'array' : i.valueType == 'DATETIME' || i.valueType == 'DATE' ? 'object' : i.valueType == 'INTEGER' || i.valueType == 'DECIMAL' ? 'number' : 'string',
                    required: i.notNull,
                    whitespace:true,
                    message: `${i.name}必填`
                }
            ]
            if(i.valueType == 'PHONE'){
                rules.push({
                    pattern:/^1[3456789]\d{9}$/,
                    message : '请填写正确的手机号'
                }) 
            }
            const config = {
                initialValue,
                rules,
                validateTrigger:i.valueType == 'PHONE' ? 'blur' : 'change'
            }
            return [i.code,config]
        },
        selectTree(list,code){//下拉树回填值
            this.form.setFieldsValue({[code]:list})
        },
        async handlePreview(file) {
            this.previewImage = file.thumbUrl;
            this.previewVisible = true;
        },
        handleChange({ fileList },code) {
            this.imgList = fileList;
        },
        handleCancel() {
            this.previewVisible = false;
        },
        uploadFile({ file,fileList },code){//文件上传
            if(file.response){
                const list = fileList.map(ele=>ele.response)
                this.form.setFieldsValue({[code]:list})
            }
        },
        downLoadFile(url){//文件下载

        },
        async getApprovalData(definekey){
            const res = await getProcessDetail({definekey})
            this.layoutList = [{groupName:'申请信息',fieldDefineValueList:res}]
            this.activeKey = [0]
        },
        async getInitData(){//获取初始化数据
            let res = null
            let { flag, pageCode, id } = this.currentForm || this.$route.query
            if(flag == 2){
                res = pageCode == 'performance_assessment_detail/todo' ? await getDetailLayout_kpitodo({pageCode,id}) : await getDetailLayout({pageCode,id})  
            }else if(flag == 3){
                res = pageCode == 'performance_assessment_detail/todo' ? await getEditLayout_kpitodo({pageCode,id}) : await getEditLayout({pageCode,id})
            }else{
                res = await getBaseLayout({pageCode})
            }
            if(pageCode == 'performance_assessment_detail'|| pageCode =='performance_assessment_detail/todo'){
                res = res.fieldValueLayoutDTOList
            }
            this.layoutList = res
            this.activeKey = res.map((ele,index)=>index)
            if(this.$route.query.pageCode=="performance_assessment_detail"&&res.assessmentContentDetails&&res.assessmentContentDetails.length){
                this.$refs.staffAchievements.tableValueArr=res.assessmentContentDetails
            }
        },
        handleSubmit (e) {
            e && e.preventDefault()
            const { definekey } = this.$route.query
            definekey ? this.approvalCommit() : this.fieldCommit()
        },
        fieldCommit(){//新增编辑提交
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    let saveData = []
                    this.layoutList.forEach(item=>{
                        item.fieldDefineValueList.forEach(ele=>{
                            if(values[ele.code]){
                                let data = values[ele.code]
                                if(ele.valueType == 'DATETIME' || ele.valueType == 'DATE'){
                                    data = moment(values[ele.code]).format(ele.valueType == 'DATE' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss')
                                }
                                saveData.push({
                                    code:ele.code,
                                    value:typeof(data) != 'object' ? [data] : data
                                })
                            }else{
                                if(ele.value){
                                    saveData.push({
                                        code:ele.code,
                                        value:ele.value
                                    })
                                }
                            }
                        })
                    })
                    const { pageCode, id } = this.currentForm || this.$route.query
                    const param = {
                        pageCode,
                        params:saveData
                    }
                    if(id) param.id = id
                    let fn = id ? saveEditLayout : saveLayout
                    if(this.$route.query.pageCode=="performance_assessment_detail/todo"&&this.$route.query.operationType=='经理审批'){
                        this.$refs.kpiApproval.approvalSave()
                        return false
                    }
                    if(this.$route.query.pageCode=="performance_assessment_detail"||(this.$route.query.pageCode=="performance_assessment_detail/todo"&&this.$route.query.operationType=='员工创建目标')){
                        let arr=this.$refs.staffAchievements.tableValueArr
                        let isflag=false
                        let num=0
                        arr.forEach(item=>{
                            if(!item.targetText||!item.weight){
                                isflag=true
                            }
                            num=num+item.weight
                        })
                        if(isflag){
                            this.$message.warning('请把目标权重填写完整');
                            return false
                        }
                        if(num!=100){
                            this.$message.warning('请把权重和必须相加为100%');
                            return false
                        }
                        param.params={
                            fieldValueDTOList:saveData,
                            assessmentContentDetails:this.$refs.staffAchievements.tableValueArr
                        }
                    }
                    // 员工档案加参数
                    let basicCodeArr = [ 
                        'social_relations', 
                        'work_experience',
                        'educational_experience'
                    ]
                    if(basicCodeArr.indexOf(pageCode) > -1 ){
                        param.params.push({
                            code : 'basicInfoId',
                            value : [this.$route.query.id]
                        })
                    }
                    const res = await fn(param)
                    this.$message.success('提交成功')
                    if(this.currentForm){
                        this.$emit('next',res)
                    }else{
                        this.$router.go(-1)
                    }
                }
            })
        },
        approvalCommit(){//审批提交
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    let saveData = {}
                    this.layoutList.forEach(item=>{
                        item.fieldDefineValueList.forEach(ele=>{
                            if(values[ele.code]){
                                let data = values[ele.code]
                                if(ele.valueType == 'DATETIME' || ele.valueType == 'DATE'){
                                    data = moment(values[ele.code]).format(ele.valueType == 'DATE' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss')
                                }
                                saveData[ele.code] = data
                            }else{
                                saveData[ele.code] = ele.value
                            }
                        })
                    })
                    const { definekey } = this.$route.query
                    const params = {
                        processDefineKey:definekey,
                        variables:saveData
                    }
                    await approvalStart({params})
                    this.$message.success('提交成功')
                    this.$router.go(-1)
                }
            })
        },
        relativeFn(i){//选择关联字段
            this.referObjectCode = i.referObjectCode
            this.$refs.modelTable.showModel(i.referObjectCode)
        },
        clearRleative(i){//清空关联值
            this.layoutList.forEach(ele=>{
                ele.fieldDefineValueList.forEach(pre=>{
                    if(pre.referObjectCode == i.referObjectCode){
                        this.form.setFieldsValue({[pre.code]:i.valueType == 'SELECT' || i.valueType == 'ORG_TREE_MULTI' || i.valueType == 'CHECKBOX' ? [] : i.valueType == 'DATETIME' || i.valueType == 'INTEGER' || i.valueType == 'DECIMAL' ? null : ''})
                    }
                })
            })
        },
        selectData(data){//回填关联字段的值
            this.layoutList.forEach(ele=>{
                ele.fieldDefineValueList.forEach(pre=>{
                    if(pre.referObjectCode == this.referObjectCode){
                        this.form.setFieldsValue({[pre.code]:data[pre.referObjectField]})
                    }
                })
            })
        },
        selectChange(value,i){//下拉值修改改变字段的展示隐藏
            const {pageCode} = this.$route.query
            if(pageCode == 'trip'){
                if(i.code == "tripType"){
                    this.layoutList.forEach(ele=>{
                        ele.fieldDefineValueList.forEach(pre=>{
                            if(pre.code == "workId"){
                                pre.display = value == '服务类'
                            }
                        })
                    })
                }
            }else if(pageCode == 'transfer'){
                if(i.code == "transferPay"){
                    this.layoutList.forEach(ele=>{
                        if(ele.groupName == "工资调整信息"){
                            ele.hidden = value == '否'
                        }
                    })
                }
            }else if(pageCode == 'vacation'){
                if(i.code == "vacationType"){
                    this.layoutList.forEach(ele=>{
                        ele.fieldDefineValueList.forEach(pre=>{
                            
                        })
                    })
                }
            }
        },
        goBack(){
            if(this.$route.name == 'staffForm'){
                this.$router.push({name:'staffList'})
            }else{
                this.$router.go(-1)
            }
        }
    },
    created(){
        this.accessToken = sessionStorage.getItem('ACCESS_TOKEN')
        this.readonly = (this.currentForm || this.$route.query).flag == 2
        const { definekey } = this.$route.query
        if(definekey){
            this.getApprovalData(definekey)
        }else{
            this.getInitData()
        }
    }
}