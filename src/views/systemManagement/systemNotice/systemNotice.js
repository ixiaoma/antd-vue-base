
import moment from 'moment'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import { getServiceList, noticePage, noticeDel } from '@/api/user'
import { columns, filterList, result } from './codeList.js'

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
  name: 'systemNoticeList',
  title: '系统公告',
  components: {
    STable,
    Ellipsis,
    TableFilter
  },
  data() {
    this.columns = columns
    this.filterList = filterList
    return {
      tabActive: 0,
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {
        customerType: 0
      },
      pagination: {},
      page: 1,
      pageSize: 10,
      loading: false,
      // 加载数据方法 必须为 Promise 对象
      // loadData: parameter => {
      //   const requestParameters = Object.assign({}, parameter, this.queryParam)
      //   console.log('loadData request parameters:', requestParameters)
      //   return noticePage(requestParameters)
      //     .then(res => {
      //       // return res.result
      //       return result
      //     })
      // },
      noticeData: [],
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter(type) {
      return statusMap[type].text
    },
    statusTypeFilter(type) {
      return statusMap[type].status
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
      // this.noticeDataLoad()
    },
    noticeDataLoad(page) {
      let params = {
        "take": 20,
        "skip": 0,
        "page": page ? page : this.page,
        "pageSize": this.pageSize,
        "searchFilter": {
          "filters": [],
          "logic": "and"
        },
        "objectType": "3001",
        "conditionId": "",
        "title": "",
        "customerType": this.tabActive==0?'':this.tabActive,
        "spublishDate": "",
        "epublishDate": ""
      }
      this.loading = true;
      noticePage(params).then(res => {
        const pagination = { ...this.pagination };
        pagination.total = res.data.totalCount;
        pagination.current = params.page
        this.page = params.page
        this.loading = false;
        this.noticeData = res.data.records;
        this.pagination = pagination;
      })
    },
    tabChange(val) {
      console.log(val)
      this.tabActive = val
      this.noticeDataLoad(1)
      // this.queryParam={
      //   customerType:val
      // }
      // this.$refs.table.refresh();
    },
    handleAdd(record, flag) {
      this.$router.push({
        name: 'noticeAdd',
        query: {
          id: flag == 1 ? '' : record.id,
          title: `系统公告${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,
        }
      })
    },
    handleEdit(record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleSub(record) {
      this.$router.push({ name: 'noticeDetail', query: { id: record.id, title: '系统公告详情' } })
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  },
  created() {
    // this.noticeDataLoad()
  },
}





