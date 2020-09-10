import { STable, Ellipsis } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import { typeList } from "./data.js"
import addTableModal from "../addTableModal/addTableModal.vue"
export default {
    name:'addReimbursement',
    data(){
        return {
            columns:[],
            filterList:[],
            loadData:[] , 
            typeList
        }
    },
    components:{
        STable , 
        Ellipsis ,
        TableFilter , 
        addTableModal
    },
    methods: {
        // 新增
        handleAdd( data , type ){

        },
        // 显示table弹窗
        showTableModal( data ){
            this.$refs.addTableModal.modalShow( data )
        }
    },
}