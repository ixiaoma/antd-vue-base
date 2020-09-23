
// import { SearchTable } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable } from '@/components'
import { getBasePage, getTableSearch, getTableHeader, deletePageList } from '@/api/commonApi'
import replaceCard from './replaceCard.vue'
export default {
  name: 'attendanceDetailListList',
  components: {
    // SearchTable
    STable,
    TableFilter,
    replaceCard
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
},
  data() {
    return {
      filterList: [],
      showSelect: false,
      pageLoading: true,
      pageCode: 'details',
      showBtnList: [],//按钮权限list
      queryParam: [{ field: "recordingId", fieldType: "TEXT_SINGLE", operator: "eq", value: this.$route.query.id }],//筛选值
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const params = Object.assign(parameter, { filter: { logic: "and", filters: this.queryParam } })
        return getBasePage({ pageCode: this.pageCode, params })
          .then(res => {
            return res
          })
      },
      columns: [],
      selectedRowKeys: [],
      selectedRows: [],
      buttonList: []
    }
  },
  methods: {
    searchRefresh(filterQuery) {
      this.queryParam = [{ field: "recordingId", fieldType: "TEXT_SINGLE", operator: "eq", value: this.$route.query.id },...filterQuery]
      // this.queryParam = filterQuery
      this.$refs.table.refresh()
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      // debugger
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    async getInitData() {
      this.filterList = await getTableSearch({ pageCode: this.pageCode })
      const headerRes = await getTableHeader({ pageCode: this.pageCode })
      this.columns = headerRes.map(ele => {
        return {
          title: ele.name,
          sorter: true,
          dataIndex: ele.code
        }
      })
      this.pageLoading = false
    },
    replaceCardLoad() {
      if(this.selectedRowKeys.length){
        this.$refs.replaceCard.selectedRows=this.selectedRows
        this.$refs.replaceCard.showModalLoad()
      }else{
        this.$message.warning('请至少选择一条数据')
      }
    },
    refresh(){
      this.$refs.table.refresh()
    }
  },
  created() {
    this.getInitData()
  },
}

