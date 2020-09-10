import { STable, Ellipsis } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'


export default {
    name:'addReimbursement',
    data(){
        return {
            columns:[],
            filterList:[],
            loadData:[]
        }
    },
    components:{
        STable , 
        Ellipsis ,
        TableFilter
    },
    methods: {
        // 新增
        handleAdd( data , type ){
            
        },
    },
}