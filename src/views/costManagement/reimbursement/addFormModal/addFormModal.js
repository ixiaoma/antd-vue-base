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
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$emit('confirm' , values)
                }
            });
        },
        handleCancel(){
            this.show = false ; 
        }
    },

}