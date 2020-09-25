<style lang="less" scoped>
  @import "./rulesManage.less";
</style>
<template>
<div class="rulesManage">
    <!--这是自定义报表列表页面-->
    <a-card class="table-page-search-wrapper">
      <s-table
        ref="table"
        rowKey="key"
        :columns="columns"
        :filterList="filterList"
        :data="loadData"
        :alert="true"
        :rowSelection="null"
        showPagination="auto">

        <span slot="action" slot-scope="text, record">
        <template>         
          <a @click="handleSub(record,2)">查看</a>
          <a-divider type="vertical" />
          <a @click="handleAdd(record,3)">修改</a>
        </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>


<script>

import moment from 'moment'
import TableFilter from '@/components/TableFilter/index.vue'
import { STable, Ellipsis } from '@/components'
import { getServiceList } from '@/api/user'
import {columns,filterList,result} from './codeList.js'

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
  name: 'rulesManageList',
  title: 'rulesManage',
  components: {
    STable,
    Ellipsis,
    TableFilter
  },
  data () {
    this.columns = columns
    this.filterList = filterList
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getServiceList(requestParameters)
          .then(res => {
            // return res.result
            return result
          })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleAdd (data,flag) {
      this.$router.push({
        name:'baseForm',
        query:{
          title:`规章制度${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,
          flag
        }
      })
    },
    handleEdit (record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleSub (record,flag) {
      this.$router.push({
        name:'rulesDetail',
        query:{
          title:`规章制度${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,
          flag
        }
      })
    },   
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  }
}






</script>
