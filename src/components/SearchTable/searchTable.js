import TableFilter from '../TableFilter/index.vue'
import STable from '../Table'

import { getBasePage, getTableSearch, getTableHeader, deletePageList } from '@/api/commonApi'

export default{
    data(){
        return {
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
            selectedRows: []
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
        }
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
        handleAdd (data,flag) {
            const { name, meta } = this.$route
            const title = `${meta.title}${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`
            this.$router.push({
                name:name == 'staffList' ? 'staffForm' : name == 'rosterList' ?'rosterDetail':name=='attendanceList'?'attendanceDetailList':'baseForm',
                query:{ title, flag, pageCode: this.pageCode, id: data ? data.id : null,rosterMonth:data?data.rosterMonth:'' }
            })
        },
        async deleteData(id){
            this.$confirm({
                title: '请确认是否要删除此数据?',
                content: h => <div style="color:red;">删除后将无法恢复</div>,
                onOk: async ()=>{
                    const res = await deletePageList({ pageCode: this.pageCode, id })
                    this.$refs.table.refresh()
                }
            })
        },
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
            this.columns.push({
              title: '操作',
              dataIndex: 'action',
              width: '130px',
              fixed: 'right',
              scopedSlots: { customRender: 'action' }
            })
            this.pageLoading = false
        }
    },
    created(){
        this.getInitData()
    }
}