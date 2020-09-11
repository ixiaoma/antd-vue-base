import moment from "moment";
export default{
    name:'addFormModal',
    data(){
        return {
            show: false , 
            loading: false , 
            title: '新增',
            form: this.$form.createForm(this, { name: 'addFormModal' }),
            fieldList:[  ]
        }
    },
    methods: {
        // 显示弹窗
        modalShow( { name , fieldList } ){ 
            this.form.resetFields()
            this.title = name ; 
            this.fieldList = fieldList ; 
            this.show = true ; 
        }, 


        handleOk(){
            let { fieldList } = this ; 
            this.form.validateFields((err, values) => {
                if (!err) {
                    fieldList.forEach( item => {
                        item.type =='date' ? values[item.field] = moment(values[item.field]).format(item.format) : null
                        item.type == 'inputNumber' ? values[item.field] = values[item.field].toString() : null 
                    } )
                    values.type = this.title ; 
                    this.$emit('confirm' , values)
                }
            });
        },
        handleCancel(){
            this.show = false ; 
        }
    },

}