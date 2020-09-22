
<template>
<div class="agreeList">
    <search-table pageCode='overtime'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'

export default {
  name: 'agreeListList',
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
