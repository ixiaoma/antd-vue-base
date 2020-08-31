
import moment from 'moment'
import { codeTableList, delCategory } from '@/api/user'
import { columns, filterList, result } from './codeList.js'
import addTableCategories from './addTableCategories/addTableCategories.vue'

export default {
  name: 'codeList',
  title: '码表管理',
  components: {
    addTableCategories
  },
  data() {
    this.columns = columns
    this.filterList = filterList
    return {
      visible: false,
      categoryCode: '',
      categoryName: '',
      categoryType: '',
      pagination: {},
      page: 1,
      pageSize: 10,
      loading: false,
      noticeData: [],
      selectedRowKeys: [],
      selectedRows: [],
      categoryTypeList: []
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
        "categoryCode": this.categoryCode,
        "categoryName": this.categoryName,
        "categoryType": this.categoryType
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
    resetFn() {
      this.categoryCode = ''
      this.categoryName = ''
      this.categoryType = ''
      this.noticeDataLoad();
    },
    handleAdd() {
      this.$refs.addTableCategories.showModal('add');
    },
    handleEdit(data) {
      this.$refs.addTableCategories.showModal('edit', data);
    },
    handleDel(record) {
      let _this = this;
      this.$confirm({
        title: '温馨提示',
        content: '确认删除？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          delCategory(record.id).then(res => {
            if (res.code == 200) {
              _this.$message.success('删除成功');
              _this.noticeDataLoad();
            }
          })
        },
        onCancel() { },
      })
    },
    tableValueManage(record){
      this.$router.push({ 
        name: 'tableCateValue',
        query:{
            categoryCode:record.categoryCode,
            codeCategoryId:record.id,
            fieldValueType:record.fieldValueType,
            nodeLevel:record.nodeLevel,
            title:`${record.categoryName}-管理`
        }
    });
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





