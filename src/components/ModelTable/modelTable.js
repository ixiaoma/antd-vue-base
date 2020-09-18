import TableFilter from '../TableFilter/index.vue'
import STable from '../Table'

import { getBasePage, getTableSearch, getTableHeader, deletePageList } from '@/components/ModelTable/@/api/commonApi'

export default{
    data(){
        return {
            visible:false,
            pageLoading:true,
            queryParam:[],//筛选值
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return getBasePage({pageCode:this.pageCode,params})
                .then(res => {
                    return res
                })
            },
            columns:[],
            selectedRowKeys: [],
            selectedRows: [],
            buttonList:[]
        }
    },
    props:{
        pageCode:{//页面唯一编码
            type: String,
            default: 'example'
        },
        showBtnList:{//按钮权限
            type: Array,
            default: ()=>[]
        },
        showSelect:{ // 数据选择
            type: Boolean , 
            default: false 
        },

    },
    components: {
        STable,
        TableFilter
    },
    computed: {
        rowSelection () {
          return {
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange
          }
        }
    },
    methods:{
        searchRefresh(filterQuery){
            this.queryParam = filterQuery
            this.$refs.table.refresh()
        },
        onSelectChange (selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        async getInitData(){
            this.filterList = await getTableSearch({pageCode:this.pageCode})
            const headerRes = await getTableHeader({pageCode:this.pageCode})
            this.columns = headerRes.map(ele=>{
              return {
                title: ele.name,
                sorter: true,
                dataIndex: ele.code
              }
            })
            this.pageLoading = false
        }
    },
    created(){
        this.getInitData()
        this.buttonList = this.$route.meta.buttonList
    }
}