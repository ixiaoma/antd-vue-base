<template>
  <div class="resumeList">
      <search-table 
        ref="searchTable" 
        :pageCode='pageCode' 
        :showSelect="true"
      />
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'resumeCommonList',
  data () {
    return {
      pageCode:'resume'
    }
  },
  components: {
    SearchTable
  }
}
</script>
