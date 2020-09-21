<template>
  <div class="workTimeList">
    <search-table pageCode="induction" />
  </div>
</template>
<script>
import { SearchTable } from '@/components'

export default {
  name: 'probationRemind',
  components: {
    SearchTable
  },
  data() {
    return {
      pageCode: 'induction',
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
