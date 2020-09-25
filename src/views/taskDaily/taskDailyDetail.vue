<template>
<div class="taskDailyDetail">
    <a-card :bordered="false">
      <s-table
        ref="table"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="null"
        showPagination="auto">
        <span slot="action" slot-scope="text, record">
        <template>         
          <a @click="handleSub(record,2)">查看明细</a>
        </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>


<script>

import moment from 'moment'
import { STable } from '@/components'
import { getServiceList } from '@/api/user'
import {columns} from './codeList.js'

export default {
  name: 'taskDailyDetailList',
  title: 'taskDailyDetail',
  components: {
    STable
  },
  data () {
    this.columns = columns
    return {
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
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleSub (record,flag) {
      this.$router.push({
        name:'rulesDetail',
        query:{
          title:`日常报销待办${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,
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
