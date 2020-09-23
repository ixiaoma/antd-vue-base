import STable from '@/components/Table'

import { applyList } from '@/api/apply'

export default{
    data(){
        return {
            pageLoading:true,
            queryParam:[
                {
                    field: 'defineKey',
                    operator: 'eq',
                    value: this.defineKey
                }
            ],//筛选值
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {
                const params = Object.assign( parameter, {filter: {logic: "and",filters:[]}})
                return applyList({pageCode:this.pageCode,params})
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
            // const res = await getFlowList()
            this.objectList = res.records
            this.defineKey = this.objectList[0].defineKey
            // this.getTableHeader()
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

        },
        toApproval(records){
            this.$router.push({name:'taskApproval',query:{id:records.id,title:'审批'}})
        },
        async getTableHeader(){
            const res = await getProcessHeader({definekey:this.defineKey})
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
        // async getInitData(){
        //     this.filterList = await getTableSearch({pageCode:this.pageCode})
        //     const headerRes = await getTableHeader({pageCode:this.pageCode})
        //     this.columns = headerRes.map(ele=>{
        //       return {
        //         title: ele.name,
        //         sorter: true,
        //         dataIndex: ele.code
        //       }
        //     })
        //     if(this.buttonList.includes('detail') || this.buttonList.includes('edit') || this.buttonList.includes('delete')){
        //         this.columns.push({
        //             title: '操作',
        //             dataIndex: 'action',
        //             width: '130px',
        //             fixed: 'right',
        //             scopedSlots: { customRender: 'action' }
        //         })
        //     }
        //     this.pageLoading = false
        // }
    },
    created(){
        // this.getInitList()
    }
}