<template>
<div class="rulesManage">
    <!--这是自定义报表列表页面-->
    <a-card class="table-page-search-wrapper">
      <div class="table-operator">
        <a-button type="primary" icon="plus" v-if="buttonList.includes('add')" @click="handleAdd(null,1)">新建</a-button>
      </div>
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
            <a @click="handleAdd(record,3)" v-if="buttonList.includes('edit')" style="margin:0 3px">修改</a>
            <a @click="handleDel(record)" v-if="buttonList.includes('delete')" style="margin:0 3px">删除</a>
          </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>


<script>
import { STable } from '@/components'
import { getServiceList } from '@/api/user'
import {columns} from './codeList.js'

export default {
  name: 'customReportList',
  title: 'customReport',
  components: {
    STable
  },
  data () {
    return {
      buttonList:[],
      columns:columns,
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
    
  },
  methods: {
    handleAdd (data,flag) {
      this.$router.push({
        name:'addCustomReport',
        query:{
          title:`自定义报表${flag == 1 ? '新增' : flag == 2 ? '详情' : '修改'}`,
          flag
        }
      })
    }
  },
  created(){
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  }
}
</script>
