<template>
  <div class="resumeList">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'resumeList',
  data () {
    return {
      pageCode:'resume'
    }
  },
  components: {
    SearchTable
  },
}
</script>
