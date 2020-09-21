import TableFilter from '../TableFilter/index.vue'
import STable from '../Table'

import { getBasePage, getTableSearch, getTableHeader } from '@/api/commonApi'

export default{
    data(){
        return {
            visible:false,
            pageLoading:true,
            pageCode:null,
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
    components: {
        STable,
        TableFilter
    },
    computed: {
        rowSelection () {
          return {
            type:'radio',
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onSelectChange
          }
        }
    },
    methods:{
        showModel(pageCode){
            this.pageCode = pageCode
            this.getInitData()
            this.visible = true
        },
        customRowFn(record){
            return {
                on: { // 事件
                    click: (event) => {
                        console.log(event)
                    },       // 点击行
                    dblclick: (event) => {
                        console.log(event)
                    },
                    contextmenu: (event) => {},
                    mouseenter: (event) => {
                        console.log(event)
                    },  // 鼠标移入行
                    mouseleave: (event) => {}
                }
            }
        },
        searchRefresh(filterQuery){
            this.queryParam = filterQuery
            this.$refs.table.refresh()
        },
        onSelectChange (selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows[0]
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
        },
        handleOk(){
            this.$emit('selectData',this.selectedRows)
            this.visible = false
        },
        handleCancel(){
            this.visible = false
        }
    }
}