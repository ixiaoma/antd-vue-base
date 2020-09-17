  import moment from 'moment'
  import { getBaseLayout, getDetailLayout, saveLayout, getEditLayout, saveEditLayout } from '@/api/commonApi'
  
  import FooterToolBar from '@/layouts/FooterToolbar'
  import staffAchievements from '../staffAchievements/staffAchievements.vue'
  import TreeSelect from './tree.vue'
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
            readonly:false
        }
    },
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
        staffAchievements
    },
    methods:{
        decoratorFn(i){
            let initialValue = ''
            if(i.valueType != 'SELECT' && i.valueType != 'CHECKBOX'){
                const currentValue = i.value && i.value.length ? i.value.join(',') : ''
                if(i.valueType == 'DATETIME'){
                    initialValue = currentValue ? moment(currentValue, 'YYYY-MM-DD') : null
                } else if(i.valueType == 'RADIO'){
                    initialValue = currentValue || undefined
                }else{
                    initialValue = currentValue
                }
            }
            const rules = [
                {
                    type : i.valueType == 'DATETIME' ? 'object' : 'string',
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
        loadData(selectedOptions){
            const targetOption = selectedOptions[selectedOptions.length - 1]
            targetOption.children = [
                {
                    value:'北京',
                    label:'北京',
                    isLeaf: selectedOptions.length == 2 ? true : false
                },{
                    value:'上海',
                    label:'上海',
                    isLeaf: selectedOptions.length == 2 ? true : false
                }
            ]
        },
        async handlePreview(file) {
            this.previewImage = file.thumbUrl;
            this.previewVisible = true;
        },
        handleChange({ fileList }) {
            this.imgList = fileList;
        },
        handleCancel() {
            this.previewVisible = false;
        },
        async getInitData(){
            let res = null
            let { flag, pageCode, id } = this.currentForm || this.$route.query
            if(flag == 2){
                res = await getDetailLayout({pageCode,id})  
            }else if(flag == 3){
                res = await getEditLayout({pageCode,id})
            }else{
                res = await getBaseLayout({pageCode})
            }
            if(pageCode == 'performance_assessment_detail'){
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
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    let saveData = []
                    this.layoutList.forEach(item=>{
                        item.fieldDefineValueList.forEach(ele=>{
                            if(values[ele.code]){
                                let data = values[ele.code]
                                if(ele.valueType == 'DATETIME'){
                                    data = moment(values[ele.code]).format('YYYY-MM-DD HH:mm:ss')
                                }
                                saveData.push({
                                    code:ele.code,
                                    value:[data]
                                })
                            }
                        })
                    })
                    const { pageCode, id } = this.currentForm || this.$route.query
                    const param = {
                        pageCode,
                        params:saveData
                    }
                    if(id) param.id = id
                    const fn = id ? saveEditLayout : saveLayout
                    if(this.$route.query.pageCode=="performance_assessment_detail"){
                        let arr=this.$refs.staffAchievements.tableValueArr
                        let isflag=false
                        arr.forEach(item=>{
                            if(!item.targetText||!item.weight){
                                isflag=true
                            }
                        })
                        if(isflag){
                            this.$message.warning('请把目标权重填写完整');
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
                    if(res){
                        !this.currentForm && this.$router.go(-1)
                        this.$emit('next',res)
                    }
                }
            })
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
        this.readonly = (this.currentForm || this.$route.query).flag == 2
        this.getInitData()
    }
  }