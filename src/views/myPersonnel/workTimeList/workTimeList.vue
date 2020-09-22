<style lang="less" scoped>
  @import "./workTimeList.less";
</style>
<template>
<div class="workTimeList">
  <search-table pageCode='statistics'/>
  </div>
</template>

<script>

import { SearchTable } from '@/components'
// import staffwork from './staffwork.vue'

export default {
  name: 'workTimeListList',
  components: {
    SearchTable,
    // staffwork
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
