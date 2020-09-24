
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
      buttonList:[],
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
      categoryTypeList: [
        {codeKey:'3',codeValue:'单选/多选'},
        {codeKey:'5',codeValue:'多级联动'}
      ]
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
      // let params = {
      //   "take": 20,
      //   "skip": 0,
      //   "pageNo": page ? page : this.page,
      //   "pageSize": this.pageSize,
      //   "searchFilter": {
      //     "filters": [],
      //     "logic": "and"
      //   },
      //   "objectType": "201",
      //   "conditionId": "",
      //   "categoryCode": this.categoryCode,
      //   "categoryName": this.categoryName,
      //   "categoryType": this.categoryType
      // }
      // if(this.categoryCode){
      //   filters: [{
      //     "field": "jobNumber",
      //     "operator": "eq",
      //     "value": "11111"
      //   }],
      // logic: "and"

      // }
      let params = {
        pageNo: page ? page : this.page,
        pageSize: this.pageSize,
        filter:{
          filters:[],
          logic: "and"
        }
      }
      if(this.categoryCode){
        params.filter.filters.push({"field": "code","operator": "contain","value": this.categoryCode})
      }
      if(this.categoryName){
        params.filter.filters.push({"field": "name","operator": "contain","value": this.categoryName})
      }
      if(this.categoryType){
        params.filter.filters.push({"field": "type","operator": "eq","value": this.categoryType})
      }
      this.loading = true;
      codeTableList(params).then(res => {
        console.log(res)
        let pagination = { ...this.pagination };
        pagination.total = res.totalCount;
        pagination.current = params.pageNo
        this.page = params.pageNo
        this.loading = false;
        this.noticeData = res.records;
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
          delCategory([record.id]).then(res => {
            // if (res.code == 200) {
              _this.$message.success('删除成功');
              _this.noticeDataLoad();
            // }
          })
        },
        onCancel() { },
      })
    },
    tableValueManage(record){
      this.$router.push({ 
        name: 'tableCateValue',
        query:{
            categoryName:record.name,
            categoryCode:record.code,
            codeCategoryId:record.id,
            fieldValueType:record.type,
            nodeLevel:record.nodeLevel,
            title:`${record.name}-管理`
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
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  },
}





