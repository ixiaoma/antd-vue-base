import addFormModal from "../addFormModal/addFormModal.vue"
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
export default {
    data(){
        return {
            visible: false , 
            loading: false , 
            data: {
                filterList: [] , 
                columns: [] 
            } , 
            title: '新增报销',
            loadData:[],
            
        }
    },
    components:{
        addFormModal , 
        TableFilter , 
        STable , 
        Ellipsis 
    } , 
    methods: {
        handleOk(){
            this.visible = false ; 
        },
        handleCancel(){
            this.visible = false ; 
        },
        modalShow( data ){
            this.loadData = [] ; 
            this.data = data ; 
            this.visible = true ; 
        },
         // 添加报销
        addReimbursement(){ 
            this.$refs.addFormModal.modalShow( this.data ); 
        },
        // 表单确定
        confirmForm(values){
            console.log(values, 'values') ; 
            this.loadData.push(values) ; 
        }
    },
}