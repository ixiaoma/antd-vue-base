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

      </a-table>
  </div>
</template>
<script>

import { SearchTable } from '@/components'

export default {
  name: 'rulesList',
  components: {
    SearchTable
  },
  data () {
    return {
      showBtnList:[]//按钮权限list
    }
  },
  methods: {
    
  }
}

</script>
