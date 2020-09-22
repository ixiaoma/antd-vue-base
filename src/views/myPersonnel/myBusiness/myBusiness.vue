
<template>
<div class="agreeList">
    <search-table pageCode='trip'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'

export default {
  name: 'myBusiness',
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
