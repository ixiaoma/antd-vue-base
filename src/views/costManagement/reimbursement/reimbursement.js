
import moment from 'moment'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import { getServiceList } from '@/api/user'
import { result , typeList} from './codeList.js'
import addFormModal from "./addFormModal/addFormModal.vue"
import addTableModal from "./addTableModal/addTableModal.vue"
import { getTableSearch, getTableHeader } from '@/api/commonApi'
import { reimbursementPage } from "@/api/reimbursement"

export default {
  name: 'reimbursementList',
  title: '报销管理',//reimbursement
  components: {
    STable,
    Ellipsis,
    TableFilter,
    addFormModal,
    addTableModal
  },
  data () {
    this.typeList = typeList
    return {
      columns :[],
      filterList: [],
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return reimbursementPage(requestParameters)
          .then(res => {
            // return res.result
            return res.result
          })
      },
      selectedRowKeys: [],
      selectedRows: [] , 
      // 选择类型弹窗参数
      typeVisible:false 
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  created() {
    this.getInitData()
  },
  methods: {
    // 选择类型弹窗
    typeOk(){
      this.typeVisible = false ; 
    },
    typeCancel(){
      this.typeVisible = false ; 
    },
    // 添加报销
    addReimbursement(item ){
      this.typeVisible = false ; 
      this.$refs.addTableModal.modalShow( item , '非行政'); 
    },
    // 跳转二级页面
    goDaily (data,flag) {
      this.$router.push({
        name:'addReimbursement',
        query:{
          title:`报销管理${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,
          flag
        }
      })
    },
    handleEdit (record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleSub (record) {
      
    },   
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    async getInitData(){
      this.filterList = await getTableSearch({pageCode:'reimbursement'})
      const headerRes = await getTableHeader({pageCode:'reimbursement'})
      this.columns = headerRes.map(ele=>{
        return {
          title: ele.name,
          dataIndex: ele.code
        }
      })
      this.columns.push({
        title: '操作',
        dataIndex: 'action',
        width: '120px',
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
      })
      this.pageLoading = false
    }
  }
}





