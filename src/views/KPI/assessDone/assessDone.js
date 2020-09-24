
import moment from 'moment'
import { STable } from '@/components'
import { assessTodoLIst } from '@/api/other'
import { columns } from './codeList.js'


export default {
  name: 'assessDone',
  title: '考核待办',
  components: {
    STable
  },
  data() {
    this.columns = columns
    return {
      advanced: false,
      // 查询参数
      queryParam: {
        customerType: 0
      },
      pagination: {},
      page: 1,
      pageSize: 10,
      loading: false,
      todoData: [],
      selectedRowKeys: [],
      selectedRows: [],
    }
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleTableChange(pagination) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.page = pagination.current
      this.pageSize = pagination.pageSize
      this.noticeDataLoad()
    },
    noticeDataLoad(page) {
      let params = {
        currentPage: page ? page : this.page,
        pageSize: this.pageSize,
      }
      this.loading = true;
      assessTodoLIst(params).then(res => {
        const pagination = { ...this.pagination };
        pagination.total = res.totalCount;
        pagination.current = params.page
        this.page = params.page
        this.loading = false;
        this.todoData = res.records;
        this.pagination = pagination;
      })
    },
   
    handleSub(data,flag) {
      let pageCode='performance_assessment_detail/todo'
      this.$router.push({
          name:'baseForm',
          query:{ title, flag, pageCode:pageCode, id: data ? data.todoId : null,operationType:data?data.operationType:null}
      })
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  },
  created() {
    this.noticeDataLoad()
  },
}





