
import moment from 'moment'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import { getServiceList } from '@/api/user'
import {columns,filterList,result , typeList} from './codeList.js'
import addFormModal from "./addFormModal/addFormModal.vue"
import addTableModal from "./addTableModal/addTableModal.vue"
const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

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
    this.columns = columns
    this.filterList = filterList
    this.typeList = typeList
    return {
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
        return getServiceList(requestParameters)
          .then(res => {
            // return res.result
            return result
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
  methods: {
    // 选择类型弹窗
    typeOk(){
      this.typeVisible = false ; 
    },
    typeCancel(){
      this.typeVisible = false ; 
    },
    // 添加报销
    addReimbursement(item){
      this.typeVisible = false ; 
      this.$refs.addTableModal.modalShow( item ); 
    },
 

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
    }
  }
}





