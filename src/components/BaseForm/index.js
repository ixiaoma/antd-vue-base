  import moment from 'moment'
  import { getBaseLayout, getDetailLayout, saveLayout, getEditLayout, saveEditLayout } from '@/api/commonApi'
  
  import FooterToolBar from '@/layouts/FooterToolbar'
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
        }
    },
    components:{
        FooterToolBar
    },
    methods:{
        decoratorFn(i){
            let value = i.value
            if(i.valueType != 'SELECT' && i.valueType != 'CHECKBOX'){
                value = i.value ? i.value.join(',') : ''
            }
            return [ i.code, { initialValue: i.valueType == 'RADIO' ? value || undefined : i.valueType == 'DATETIME' ? value || null : value ,rules: [ { required: i.enabled == 1 ? true : false, whitespace:true, message: `${i.name}必填`, type:(i.valueType == 'SELECT' || i.valueType == 'CHECKBOX') ? 'array' : i.valueType == 'DATETIME' ? 'object' : 'string' } ] } ]
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
            console.log(file)
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
            const { flag, pageCode, id } = this.$route.query
            const code = this.formCode ? this.formCode : pageCode
            if(flag == 2){
                res = await getDetailLayout({pageCode:code,id})
            }else if(flag == 3){
                res = await getEditLayout({pageCode:code,id})
            }else{
                res = await getBaseLayout({pageCode:code})
            }
            this.layoutList = res
            this.activeKey = res.map((ele,index)=>index)
        },
        handleSubmit (e) {
            e.preventDefault()
            this.form.validateFields(async (err, values) => {
                if (!err) {
                    let saveData = []
                    this.layoutList.forEach(item=>{
                        item.fieldDefineValueList.forEach(ele=>{
                            if(values[ele.code]){
                                let data = values[ele.code]
                                if(ele.valueType == 'DATETIME'){
                                    data = moment(values[ele.code]).format('YYYY-MM-DD')
                                }
                                saveData.push({
                                    code:ele.code,
                                    value:[data]
                                })
                            }
                        })
                    })
                    const { pageCode, id } = this.$route.query
                    const param = {
                        pageCode,
                        params:saveData
                    }
                    if(id) param.id = id
                    const res = await saveLayout(param)
                    if(res){
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
        this.readonly = this.$route.query.flag == 2
        this.getInitData()
    }
  }