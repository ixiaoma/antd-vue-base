<template>
<div class="taskDaily">
    <search-table pageCode='reimbursement_daily'/>
  </div>
</template>


<script>
import { SearchTable } from '@/components'

export default {
  name: 'taskDailyList',
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
