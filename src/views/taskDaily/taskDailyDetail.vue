<template>
<div class="taskDailyDetail">
    <a-card :bordered="false">
        <a-table 
          ref="table"
          size="small"
          :bordered="true"
          :rowKey="(record) =>  record.id"
          :columns="columns" 
          :data-source="taskDailyData"      
          :showPagination="false"
          :loading="loading"
        >
        <template slot="action" slot-scope="text, record">         
          <a @click="handleSub(record,2)">查看明细</a>
        </template>
      </a-table>      
    </a-card>
    <a-modal v-model="visible" title="提交排班计划" :bodyStyle='{padding:10}'  :footer="null">
        <a-row>
            <a-table 
              ref="table"
              size="small"
              :bordered="true"
              :rowKey="(record) =>  record.id"
              :columns="columns" 
              :data-source="taskDailyData"      
              :showPagination="false"
              :loading="loading"
            >
          </a-table>  
        </a-row>   
    </a-modal>
  </div>
</template>


<script>

import moment from 'moment'
import { taskDailyDetail } from '@/api/other'
import { columns } from './codeList.js'

export default {
  name: 'taskDailyDetail',
  title: '日常报销详情',
  components: {
    
  },
  data() {
    this.columns = columns
    this.filterList = filterList
    return {
      buttonList:[],
      loading: false,
      taskDailyData: [],
      visible:false
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
    dataLoad(){
        this.loading = true;
        taskDailyDetail(this.$route.query.id).then(res=>{
          this.taskDailyData=res
          this.loading = false;
        })
    },
    handleSub (record,flag) {
      this.visible=true
    },   
  },
  created() {
    this.dataLoad()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  }
}
</script>
