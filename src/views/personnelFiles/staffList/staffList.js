
import moment from 'moment'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import { getBasePage } from '@/api/commonApi'
import {columns,filterList,result} from './codeList.js'

const statusMap = {
  0: {
    status: 'default',
    text: '在职'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '在职'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}
export default {
  name: 'staffListList',
  title: 'staffList',
  components: {
    STable,
    Ellipsis,
    TableFilter
  },
  data () {
    this.columns = columns
    this.filterList = filterList
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {
        filter:{}
      },
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const params = Object.assign( parameter, this.queryParam)
        return getBasePage({pageCode:'example',params})
          .then(res => {
            // return res.result
            return res
          })
      },
      selectedRowKeys: [],
      selectedRows: []
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
    handleAdd (data,flag) {
      // console.log(data,flag)
      this.$router.push({name:'staffForm',query:{title:`员工档案${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,flag,pageCode:'example'}})
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
    searchRefresh(filterQuery){
      this.queryParam.filter = filterQuery
      this.$refs.table.refresh()
    }
  }
}





