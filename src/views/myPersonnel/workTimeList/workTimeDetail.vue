<template>
<a-card class="table-page-search-wrapper" v-if="!pageLoading">
    <s-table
        ref="table"
        rowKey="id"
        :columns="columns"
        :rowSelection="showSelect?rowSelection:null"
        :data="loadData"
        :scroll='{x:true}'>
            <span slot="action" slot-scope="text, record">
                <template>
                    <a @click="replaceCardLoad(record)" style="margin:0 3px">申请补卡</a>
                </template>
            </span>
        </s-table>
        <replaceCard ref="replaceCard" @refelsh="refresh"></replaceCard>
</a-card>
</template>
<script>

// import { SearchTable } from '@/components'
import { STable } from '@/components'
import { getBasePage, getTableSearch, getTableHeader, deletePageList } from '@/api/commonApi'
import replaceCard from './replaceCard.vue'
export default {
  name: 'attendanceDetailListList',
  components: {
    // SearchTable
    STable,
    replaceCard
  },
  data() {
    return {
      showSelect:false,
      pageLoading: true,
      pageCode: 'details',
      rowSelection: false,
      showBtnList: [],//按钮权限list
      queryParam: [{ field: "recordingId", fieldType: "TEXT_SINGLE", operator: "eq", value: this.$route.query.recordingId }],//筛选值
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
    async getInitData() {
      // this.filterList = await getTableSearch({pageCode:this.pageCode})
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
        width: '120px',
        fixed: 'right',
        scopedSlots: { customRender: 'action' }
      })
      this.pageLoading = false
    },
    replaceCardLoad(record) {
      this.$refs.replaceCard.showModalLoad(record)
    },
    refresh(){
      this.$refs.table.refresh()
    }
  },
  created() {
    this.getInitData()
  },
}


</script>