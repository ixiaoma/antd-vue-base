<template>
<div class="workTimeList">
    <search-table pageCode='recording'/>
  </div>
</template>
<script>

import { SearchTable } from '@/components'

export default {
  name: 'reminderList',
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
