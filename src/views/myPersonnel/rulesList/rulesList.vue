<template>
<div class="rulesList">
    <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="noticeData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :scroll="{ x: 1600}"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <template slot="action" slot-scope="text, record">         
                  <a v-if="buttonList.includes('detail')" @click="handleSub(record)">查看</a>
                </template>
      </a-table>
  </div>
</template>
<script>
import TableFilter from '@/components/TableFilter/index.vue'
import { STable } from '@/components'
import { getServiceList, noticePage } from '@/api/user'
import { columns, filterList, result } from './codeList.js'


export default {
  name: 'rulesList',
  title: '规章制度',
  components: {
    STable,
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
      noticeData: [],
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
        page: page ? page : this.page,
        pageSize: this.pageSize,
        type:"规章制度"
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
    handleSub(record) {
      this.$router.push({ name: 'noticeDetail', query: { id: record.id, title: '规章制度详情' } })
    },
  },
  created() {
    this.noticeDataLoad()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  },
}
</script>
<style scoped>
.rulesList{
  background: #fff;
  padding:20px;
}
</style>
