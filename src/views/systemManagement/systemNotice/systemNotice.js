
import moment from 'moment'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import { getServiceList, noticePage, noticeDel,noticeTop } from '@/api/user'
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
      buttonList:[],
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
      noticeData: [],
      selectedRowKeys: [],
      selectedRows: [],
      tabActiveList:{
        0:'全部',
        1:'日常通知',
        2:'节假日通知',
        3:'排班通知',
        4:'其他通知',
        5:'规章制度'
      }
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
      this.noticeDataLoad()
    },
    noticeDataLoad(page) {
      let params = {
        // "take": 20,
        // "skip": 0,
        page: page ? page : this.page,
        pageSize: this.pageSize,
        type:this.tabActiveList[this.tabActive]
        // "searchFilter": {
        //   "filters": [],
        //   "logic": "and"
        // },
        // "objectType": "3001",
        // "conditionId": "",
        // "title": "",
        // "customerType": this.tabActive==0?'':this.tabActive,
        // "spublishDate": "",
        // "epublishDate": ""
      }
      this.loading = true;
      noticePage(params).then(res => {
        const pagination = { ...this.pagination };
        pagination.total = res.totalCount;
        pagination.current = params.page
        this.page = params.page
        this.loading = false;
        this.noticeData = res.records;
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
    },
    handleTop(record){
      let _this = this;
      this.$confirm({
          title: '温馨提示',
          content: '确认置顶？',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            noticeTop(record.id).then(res => {
                  _this.$message.success('置顶成功');
                  _this.noticeDataLoad()       
              })
          },
          onCancel() { },
      });
      
    },
    handleDel(record){
      let _this = this;
      this.$confirm({
          title: '温馨提示',
          content: '确认删除？',
          okText: '确认',
          cancelText: '取消',
          onOk() {
            noticeDel([record.id]).then(res => {
                  _this.$message.success('删除成功');
                  _this.noticeDataLoad()       
              })
          },
          onCancel() { },
      });
    }
  },
  created() {
    this.noticeDataLoad()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  },
}





