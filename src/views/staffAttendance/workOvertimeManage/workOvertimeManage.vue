<template>
  <a-card class="table-page-search-wrapper" v-if="!pageLoading">
    <table-filter :filterList="filterList" @refresh="searchRefresh" />
    <div class="table-operator">
            <a-button type="primary" icon="plus" v-if="buttonList.includes('add')" @click="handleAdd(null,1)">新建</a-button>
      </div>
    <s-table
      ref="table"
      rowKey="id"
      :columns="columns"
      :rowSelection="showSelect?rowSelection:null"
      :data="loadData"
      :scroll="{x:true}"
    >
      <span slot="action" slot-scope="text, record">
          <template>
              <a v-if="buttonList.includes('detail')" @click="handleAdd(record,2)" style="margin:0 3px">查看</a>
              <a v-if="buttonList.includes('edit')" @click="handleAdd(record,3)" style="margin:0 3px">修改</a>
              <a v-if="buttonList.includes('delete')" @click="deleteData(record.id)" style="margin:0 3px">删除</a>
          </template>
      </span>
    </s-table>
  </a-card>
</template>
<script>
// import { SearchTable } from '@/components'
import { STable } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import { getBasePage, getTableSearch, getTableHeader, deletePageList } from '@/api/commonApi'
import { applyListAdmin } from '@/api/apply'
export default {
  name: 'attendanceDetailListList',
  components: {
    // SearchTable
    TableFilter,
    STable
  },
  data() {
    return {
      filterList:[],
      pageCode: 'overtime',
      showSelect: false,
      pageLoading: true,
      rowSelection: false,
      showBtnList: [], //按钮权限list
      queryParam: [{ field: 'processDefineKey', operator: 'eq', value: '加班' }], //筛选值
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        let params = Object.assign(parameter, { filter: { logic: 'and', filters: this.queryParam } })
        return applyListAdmin(params).then(res => {
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
      this.queryParam = [
        { field: 'processDefineKey', operator: 'eq', value: '加班' },
        ...filterQuery
      ]
      // this.queryParam = filterQuery
      this.$refs.table.refresh()
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
      this.columns.push({
        title: '操作',
        dataIndex: 'action',
        width: '130px',
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
      })
      this.pageLoading = false
    },
    replaceCardLoad(record) {}
  },
  created() {
    this.getInitData()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  }
}
</script>
