import STable from '@/components/Table'

import { applyList } from '@/api/apply'
import { getFlowList } from '@/api/approval'

export default{
    data(){
        return {
            pageLoading:true,
            queryParam:[],
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return applyList(params)
                .then(res => {
                    return res
                })
            },
            columns:[
                {
                    title:'processDefineKey',
                    dataIndex:'processDefineKey'
                },
                {
                    title:'开始时间',
                    dataIndex:'startTime'
                },
                {
                    title: '操作',
                    dataIndex: 'action',
                    width: '130px',
                    fixed: 'right',
                    scopedSlots: { customRender: 'action' }
                }
            ],
            objectList:[],
            pageCode:null,
            defineKey:null
        }
    },
    components: {
        STable
    },
    methods:{
        async getInitList(){
            const res = await getFlowList()
            this.objectList = res.records
            this.defineKey = this.objectList[0].defineKey
            // this.getTableHeader()
            this.queryParam = [
                {
                    field: 'processDefineKey',
                    operator: 'eq',
                    value: this.defineKey
                }
            ]
            this.pageLoading = false
        },
        searchRefresh(filterQuery){
            this.queryParam = filterQuery
            this.$refs.table.refresh()
        },
        onSelectChange (selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        handleSearch(){
            this.$refs.table.refresh()
        },
        handleReset(){
            this.queryParam = []
            this.$refs.table.refresh()
        },
        toApproval(records){
            this.$router.push({name:'baseForm',query:{id:records.id,title:records.processDefineKey+'审请',definekey:records.processDefineKey,flag:2}})
        },
        async getTableHeader(){
            const res = await processHeader({definekey:this.defineKey})
            this.columns = res.map(ele=>{
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
        this.getInitList()
    }
}