
import moment from 'moment'
import { codeTableList} from '@/api/user'
import { columns, filterList, result } from './codeList.js'


export default {
  name: 'codeList',
  title: '码表管理',
  components: {
    
  },
  data() {
    this.columns = columns
    this.filterList = filterList
    return {
      visible: false,
      queryParam: {
        
      },
      pagination: {},
      page: 1,
      pageSize: 10,
      loading: false,
      noticeData: [],
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    
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
        "take": 20,
        "skip": 0,
        "page": page ? page : this.page,
        "pageSize": this.pageSize,
        "searchFilter": {
            "filters": [],
            "logic": "and"
        },
        "objectType": "201",
        "conditionId": "",
        "categoryCode": "",
        "categoryName": "",
        "categoryType": ""  
      }
      this.loading = true;
      codeTableList(params).then(res => {
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
      this.tabActive = val
      this.noticeDataLoad(1)
    },
    handleAdd(record, flag) {
      
    },
    handleEdit(record) {
      this.visible = true
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





