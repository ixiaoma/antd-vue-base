<template>
  <div class="workTimeList">
    <search-table pageCode="management" />
  </div>
</template>
<script>
import { SearchTable } from '@/components'

export default {
  name: 'agreeRemindList',
  components: {
    SearchTable
  },
  data() {
    return {
      pageCode: 'management',
      showBtnList: [] //按钮权限list
    }
  },
  methods: {}
}
</script>
<style scoped>
.workTimeList {
  background: #fff;
  padding: 10px;
}
</style>
