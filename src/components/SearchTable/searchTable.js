import TableFilter from '../TableFilter/index.vue'
import STable from '../Table'

import { getBasePage, getTableSearch, getTableHeader, deletePageList } from '@/api/commonApi'
import { applyList } from '@/api/apply'
import { getProcessDetail } from '@/api/approval'

export default{
    data(){
        return {
            pageLoading:true,
            queryParam:[],//筛选值
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => { return this.getTableData(parameter)},
            columns:[],
            selectedRowKeys: [],
            selectedRows: [],
            buttonList:[],
            filterList:[]
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
        definekey:{
            type: String
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
            const query = { title, flag, id: data ? data.id : null,approvalResult:data?data.approvalResult:''}
            if(this.definekey){
                query.definekey = this.definekey
            }else{
                query.pageCode = this.pageCode
            }
            this.$router.push({
                name:name == 'staffList' || name == 'staffApprovalList' ? 'staffForm':'baseForm',
                query
            })
        },
        //查看排班
        rosterDetailLoad(data,flag){
            const { name, meta } = this.$route
            const title = `${meta.title}${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`
            this.$router.push({
                name:'rosterDetail',
                query:{ title, flag, pageCode: this.pageCode, id: data ? data.id : null,rosterMonth:data?data.rosterMonth:'',deptName:data?data.deptName:''}
            })
        },
        //考勤管理-查看考勤
        attendanceDetailLoad (data,flag) {
            const { name, meta } = this.$route
            const title = `${meta.title}${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`
            this.$router.push({
                name:'attendanceDetailList',
                query:{ title, flag, pageCode: this.pageCode, id: data ? data.id : null}
            })
        },
        //我的考勤-查看考勤
        workTimeDetailLoad (data,flag) {
            const { name, meta } = this.$route
            const title = `${meta.title}${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`
            this.$router.push({
                name:'workTimeDetail',
                query:{ title, flag, pageCode: this.pageCode, id: data ? data.id : null,recordingId:data?data.recordingId:'' }
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
        getTableData(parameter){
            if(this.definekey){
                const filters = [...this.queryParam,{field: "processDefineKey", operator: "eq", value: this.definekey}]
                const params = Object.assign( parameter, {filter:{logic: "and",filters}})
                return applyList(params) .then(res => {
                    return res
                })
            }else{
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return getBasePage({pageCode:this.pageCode,params}) .then(res => {
                    return res
                })
            }
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
            if(this.buttonList.includes('detail') || this.buttonList.includes('edit') || this.buttonList.includes('delete')|| this.buttonList.includes('rosterDetail')|| this.buttonList.includes('attendanceDetail')||this.buttonList.includes('workTimeDetail')){
                this.columns.push({
                    title: '操作',
                    dataIndex: 'action',
                    width: '130px',
                    fixed: 'right',
                    scopedSlots: { customRender: 'action' }
                })
            }
            this.pageLoading = false
        },
        async getApprovalHeader(){
            const res = await getProcessDetail({definekey:this.definekey})
            this.columns = res.map(ele=>{
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
        this.definekey ? this.getApprovalHeader() : this.getInitData()
        this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
    }
}