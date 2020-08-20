  import moment from 'moment'
  import {getStaffInfo} from '@/api/baseform'
  
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
    components:{
        FooterToolBar
    },
    methods:{
        decoratorFn(i){
            return [ i.fieldKey, { initialValue: i.fieldType == 3 ? i.fieldValue || undefined : i.fieldValue ,rules: [ { required: i.enabled == 1 ? true : false, whitespace:true, message: `${i.fieldName}必填`, type:i.fieldType == 4 || i.fieldType == 5 ? 'array' : i.fieldType == 6 ? 'object' : 'string' } ] } ]
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
            const res = await getStaffInfo()
            this.layoutList = res.result
            this.activeKey = res.result.map((ele,index)=>index)
        },
        handleSubmit (e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    let saveData = {}
                    this.layoutList.forEach(item=>{
                        item.fieldList.forEach(ele=>{
                            if(values[ele.fieldKey]){
                                if(ele.fieldType == 6){
                                    saveData[ele.fieldKey] = moment(values[ele.fieldKey]).format('YYYY-MM-DD')
                                }else{
                                    saveData[ele.fieldKey] = values[ele.fieldKey]
                                }
                            }
                        })
                    })
                    console.log(saveData)
                    this.$emit('next')
                }
            })
        },
        goBack(){
            this.$router.go(-1)
        }
    },
    created(){
        this.readonly = this.$route.query.flag == 2
        this.getInitData()
    }
  }