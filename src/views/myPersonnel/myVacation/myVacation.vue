
<template>
<div class="agreeList">
    <search-table pageCode='vacation'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'

export default {
  name: 'myVacation',
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
