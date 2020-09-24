
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
      buttonList:[]
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
// 操作类型：
// 员工创建目标
// 经理审批
// 经理第一次评分
// 员工自评
// 经理第二次评分
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
        pagination.current = params.currentPage
        this.page = params.currentPage
        this.loading = false;
        this.todoData = res.records;
        this.pagination = pagination;
      })
    },
   
    handleSub(data,flag) {
      let pageCode='performance_assessment_detail/todo'
      this.$router.push({
          name:'baseForm',
          query:{ title:data.operationType, flag, pageCode:pageCode, id: data ? data.todoId : null,operationType:data?data.operationType:null}
      })
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  },
  created() {
    this.noticeDataLoad()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  },
}





