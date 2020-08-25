import draggable from 'vuedraggable'
import { saveGroupField, listLayout, deleteGroupField, fieldDefinedSave, fieldDefinedDelete} from '@/api/setting'

const valueTypeList = [
    {
        label:'TEXT_SINGLE',
        value:'单行文本'
    },{
        label:'TEXT_MULTI',
        value:'多行文本'
    },{
        label:'RADIO',
        value:'单选'
    },{
        label:'CHECKBOX',
        value:'多选'
    },{
        label:'SELECT',
        value:'多级联动'
    },{
        label:'INTEGER',
        value:'整数'
    },{
        label:'DECIMAL',
        value:'小数'
    },{
        label:'AMOUNT',
        value:'金额'
    },{
        label:'DATETIME',
        value:'日期'
    },{
        label:'PICTURE',
        value:'图片'
    },{
        label:'ATTACHMENT',
        value:'附件'
    },{
        label:'PHONE',
        value:'电话'
    },{
        label:'EMAIL',
        value:'邮件'
    },{
        label:'AUTO_CODE',
        value:'自动编号'
    },{
        label:'COMPUTE',
        value:'计算字段'
    }
]

export default{
    name:'fieldSetting',
    data(){
        return{
            valueTypeList,
            visible:false,
            fieldVisible:false,
            loading:false,
            form: this.$form.createForm(this, { name: 'block_form' }),
            fieldForm:this.$form.createForm(this, { name: 'field_form' }),
            collapseList:[],
            groupName:null,
        }
    },
    components: {
        draggable
    },
    methods:{
        addModel(){
            this.visible = true
        },
        handleSubmit(e){
            e.preventDefault();
            this.form.validateFields((err, values) => {
              if (!err) {
                const params = {
                    ...values,
                    layoutType:'BASIC',
                    objectDefineCode:this.$route.query.code
                }
                this.loading = true
                saveGroupField(params).then(res=>{
                    this.getInitLayout()
                    this.visible = false
                    this.loading = false
                }).catch(error=>{
                    this.loading = false
                })
              }
            });
        },
        async deleteBlock(item){
            const params = {
                fieldName:item.fieldCode,
                layoutType:'BASIC',
                objectDefineCode:this.$route.query.code
            }
            const res = await deleteGroupField(params)
        },
        handleCancel(e){
            this.visible = false
        },
        addField(item){
            this.fieldVisible = true
            this.groupName = item.fieldCode
        },
        handleFieldSubmit(e){
            e.preventDefault();
            this.fieldForm.validateFields((err, values) => {
              if (!err) {
                  console.log(values)
                const params = {
                    ...values,
                    groupName:this.groupName
                }
                this.loading = true
                fieldDefinedSave(this.$route.query.code,params).then(res=>{
                    this.getInitLayout()
                    this.visible = false
                    this.loading = false
                }).catch(error=>{
                    this.loading = false
                })
              }
            });
        },
        editField(){
            this.fieldVisible = true
        },
        deleteField(){
            const params = {
                objectDefineCode: this.$route.query.code,
                fieldCode
            }
            fieldDefinedDelete()
        },
        handleFieldCancel(){
            this.fieldVisible = false
        },
        async getInitLayout(){
            const params = {
                objectDefineCode:this.$route.query.code,
                layoutType:'BASIC'
            }
            const res = await listLayout(params)
            this.collapseList = res.display
        }
    },
    created(){
        this.getInitLayout()
    }
}