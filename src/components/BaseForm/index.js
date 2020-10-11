import moment from 'moment'
import { getBaseLayout, getDetailLayout, getEditLayout_kpitodo,getDetailLayout_kpitodo,saveLayout, getEditLayout, saveEditLayout } from '@/api/commonApi'
import { processHeader,getProcessDetail,approvalStart } from '@/api/approval'
import { fileUploadApi, fileDownLoad } from '@/api/uploaddown'
import { getDeptLeader } from '@/api/user'
import { calculateTime,overtimeTime,tripEchoTime } from '@/api/apply'

import fieldHandle from '@/mixins/fieldHandle'

import FooterToolBar from '@/layouts/FooterToolbar'
import staffAchievements from '../staffAchievements/staffAchievements.vue'
import kpiApproval from '../kpiApproval/index.vue'
import TreeSelect from '../Tree/tree.vue'
import ModelTable from '../ModelTable/modelTable.vue'
import StaffModel from './staffModel.vue'
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
            startDate:'',
            endDate:'',
            timeType:'',
            serviceType:'',
            overtimeDate:'',
            jobNumber:'',
            workTime:'',
            referObjectCode:null,//关联字段标识
            assessmentContentDetails:[]
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
        ModelTable,
        StaffModel
    },
    computed: {
        operationType(){
            return this.$route.query.operationType=='经理审批'||this.$route.query.operationType=='经理第一次评分'||this.$route.query.operationType=='员工自评'||this.$route.query.operationType=='经理第二次评分'
        }
    },
    methods:{
        decoratorFn(i){//初始化绑值
            const { definekey } = this.$route.query
            let initialValue = ''
            if(i.valueType != 'SELECT' && i.valueType != 'CHECKBOX' && i.valueType != 'ORG_TREE_MULTI' && i.valueType != 'PICTURE' && i.valueType != 'ATTACHMENT'){
                const currentValue = (i.value && i.value.length)||((i.valueType=="DECIMAL"||i.valueType == 'INTEGER')&&i.value) ? definekey ? i.value : i.value.join(',') : ''
                if(i.valueType == 'DATETIME' || i.valueType == 'DATE'){
                    initialValue = currentValue ? moment(currentValue,i.valueType == 'DATE' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss') : null
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
                    if(definekey){
                        initialValue = i.value ? i.value.split(',') : []
                    }else{
                        initialValue = i.value || []
                    }
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
                    required: i.notNull || i.required,
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
        async selectTree(list,i){//下拉树回填值
            this.form.setFieldsValue({[i.code]:list})
            const { definekey } = this.$route.query
            if(definekey == 'induction'){
                this.referObjectCode = 'orgTree'
                const res = await getDeptLeader(list)
                this.selectData(res)
            }
        },
        handlePreview(url) {
            this.previewImage = url.thumbUrl || url;
            this.previewVisible = true;
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
        getImgSrc(url){
            return fileDownLoad+url+'?access_token='+this.accessToken
        },
        downLoadFile(url){//文件下载
            window.location.href = this.getImgSrc(url)
        },
        async getApprovalData(definekey){
            const { id } = this.$route.query
            const res =id? await getProcessDetail({id}):await processHeader({definekey})    
            this.layoutList = [{groupName:'申请信息',fieldDefineValueList:res}]
            this.activeKey = [0]
            this.editInitData(definekey)//编辑 计算总时长等字段赋值
        },
        async getInitData(){//获取初始化数据
            let res = null
            let { flag, pageCode, id,isResumeCommon } = this.currentForm || this.$route.query
            if(flag == 2){
                res = pageCode == 'performance_assessment_detail/todo' ? await getDetailLayout_kpitodo({pageCode,id}) : isResumeCommon==1?await getDetailLayout({pageCode:'public_resume',id}):await getDetailLayout({pageCode,id}) 
            }else if(flag == 3){
                res = pageCode == 'performance_assessment_detail/todo' ? await getEditLayout_kpitodo({pageCode,id}) : isResumeCommon==1?await getEditLayout({pageCode:'public_resume',id}):await getEditLayout({pageCode,id})
            }else{
                res = await getBaseLayout({pageCode})
            }
            if(pageCode == 'performance_assessment_detail'|| pageCode =='performance_assessment_detail/todo'){
                this.assessmentContentDetails=res.assessmentContentDetails
                res = res.fieldValueLayoutDTOList||[]
            }
            this.layoutList = res
            this.activeKey = res.map((ele,index)=>index)
            if((this.$route.query.pageCode=="performance_assessment_detail"||this.$route.query.pageCode=="performance_assessment_detail/todo")&&this.assessmentContentDetails&&this.assessmentContentDetails.length){
                this.$refs.staffAchievements.tableValueArr=this.assessmentContentDetails
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
                    if(this.$route.query.pageCode=="performance_assessment_detail"||(this.$route.query.pageCode=="performance_assessment_detail/todo"&&this.$route.query.operationType!='经理审批')){
                        let arr=this.$refs.staffAchievements.tableValueArr
                        let isflag=false
                        let num=0
                        arr.forEach(item=>{
                            if(!item.targetText||!item.weight){
                                isflag=true
                            }
                            num=num+Number(item.weight)
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
                                }else if(typeof(values[ele.code]) == 'object'){
                                    data = data.join(',')
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
        selectStaff(i){//多选选择关联员工
            this.referObjectCode = i.referObjectCode
            const list = i.value ? i.value.split(',') : []
            this.$refs.StaffModel.showModel(list)
        },
        selectData(data){//回填关联字段的值
            const { definekey } = this.$route.query
            if(definekey=='trip'&&this.referObjectCode=="workId"){
                this.workTime=data.arrival_time
            }
            this.layoutList.forEach(ele=>{
                ele.fieldDefineValueList.forEach(pre=>{
                    if(pre.referObjectCode == this.referObjectCode){
                        if(pre.display){
                            this.form.setFieldsValue({[pre.code]:data[pre.referObjectField]})     
                        }else{
                            pre.value = data[pre.referObjectField]
                        }
                    }
                })
            })
        },
        selectChange(value,i){//下拉值修改改变字段的展示隐藏
            const { pageCode, definekey } = this.$route.query
            if(pageCode == 'trip'||definekey == 'trip'){
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
            }else if(definekey == 'vacation'){
                if(i.code == "timeType"){
                    this.layoutList.forEach(ele=>{
                        ele.fieldDefineValueList.forEach(pre=>{
                            if(pre.code == 'startDate' || pre.code == 'endDate'){
                                pre.valueType = value == "天" ? 'DATE' : 'DATETIME'
                                this.timeType = value
                                this[pre.code] = moment(this[pre.code]).format(value == "天" ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss')
                            }
                        })
                    })
                    this.getAllDate()
                }
            }else if(definekey == 'overtime'){
                if(i.code == "serviceType"){
                    this.layoutList.forEach(ele=>{
                        ele.fieldDefineValueList.forEach(pre=>{
                            if(pre.code == 'serviceType'){
                                this[pre.code] = value
                            }
                            if(pre.code == "workId"){
                                pre.display = value == '服务类'
                            }
                            if(pre.code == "jobNumber"){
                                this[pre.code] = pre.value
                            }
                        })
                    })
                    this.getOvertime()
                }
            }
        },
        dateChange(data,dateString,i){//时间修改
            const { definekey } = this.$route.query
            if(definekey == 'vacation'){
                if(dateString){
                    this[i.code] = dateString
                    this.getAllDate()
                }else{
                    this[i.code] = ''
                    // this.clearRleative(i)
                }
            }else if(definekey =='overtime'){
                if(dateString){
                    this[i.code] = dateString
                    this.getOvertime()
                }else{
                    this[i.code] = ''
                }
            }else if(definekey =='trip'){
                if(dateString){
                    this[i.code] = dateString
                    this.getTripEchoTime()
                }else{
                    this[i.code] = ''
                }
            }
        },
        async getAllDate(){
            if(this.startDate && this.endDate && this.timeType){
                this.referObjectCode = 'calculateTime'
                //调用接口
                const params = {
                    startDate:this.startDate,
                    endDate:this.endDate,
                    timeType:this.timeType
                }
                const res = await calculateTime(params)
                const data = {
                    allDate : Number(res)
                }
                this.selectData(data)
            }
        },
        //加班根据开始时间结束时间计算
        async getOvertime(){
            if(this.startDate && this.endDate && this.serviceType && this.overtimeDate){
                this.referObjectCode = 'overTimeCallback'
                const params = {
                    startDate:this.startDate,
                    endDate:this.endDate,
                    serviceType:this.serviceType,
                    overtimeDate:this.overtimeDate,
                    jobNumber:this.jobNumber
                }
                const res = await overtimeTime(params)
                const data = res[0]
                data.totalTime=Number(data.totalTime)
                this.selectData(data)
            }
        },
        //出差根据开始时间结束时间计算
        async getTripEchoTime(){
            console.log(this.startDate,this.endDate,this.workTime)
            if(this.startDate && this.endDate&&this.workTime){
                this.referObjectCode = 'tripTimeCallback'
                const params = {
                    startDate:this.startDate,
                    endDate:this.endDate,
                    workTime:this.workTime
                }
                const res = await tripEchoTime(params)
                const data = res
                this.selectData(data)
            }
        },
        //编辑 计算总时长等字段赋值
        editInitData(definekey){
            if(definekey == 'vacation'||definekey == 'overtime'){
                this.layoutList.forEach(item=>{
                    item.fieldDefineValueList.forEach(ele=>{
                        if(definekey == 'vacation'){//休假
                            if(ele.code=='startDate'||ele.code=='endDate'||ele.code=='timeType'){
                                this[ele.code]=ele.value
                            }
                        }
                        if(definekey == 'trip'){//出差
                            if(ele.code=='startDate'||ele.code=='endDate'||ele.code=='timeType'){
                                this[ele.code]=ele.value
                            }
                        }
                        if(definekey == 'overtime'){//加班
                            if(ele.code=='startDate'||ele.code=='endDate'||ele.code=='serviceType'||ele.code=='overtimeDate'||ele.code=='jobNumber'){
                                this[ele.code]=ele.value
                            }
                            if(ele.code == "workId"){
                                ele.display = this.serviceType == '服务类'
                            }
                        }
                        
                    })
                })
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