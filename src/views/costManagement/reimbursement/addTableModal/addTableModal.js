import addFormModal from "../addFormModal/addFormModal.vue"
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import moment from "moment"
import {  reimbursementApproval } from "@/api/reimbursement"
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
            monthFormat: 'YYYY/MM',
            month: ''
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
            // this.visible = false ;
            if(!this.month){
                return this.$message.warning('请选择报销月份')
            }
            let params ={
                month:  moment(this.month ).format(this.monthFormat) , 
                detailList: this.loadData , 
                fileList: [] , 
                category: this.category
            }   
            reimbursementApproval(params).then(res=>{
                this.visible = false ; 
                this.loadData = [] ;
                this.$message.success('审批已提交') ; 
            })
        },
        handleCancel(){
            this.visible = false ; 
        },
        modalShow( data , category){
            this.category = category ; 
            this.month = '' ; 
            this.data = data ; 
            this.visible = true ; 
        },
         // 添加报销
        addReimbursement(){ 
            this.$refs.addFormModal.modalShow( this.data ); 
        },
        // 表单确定
        confirmForm(values){
            this.loadData.push(values) ; 
            this.$refs.addFormModal.show = false ; 
        },
    },
}