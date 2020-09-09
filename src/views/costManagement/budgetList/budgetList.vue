<template>
  <div class="budgetList">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'budgetList',
  data () {
    return {
      pageCode:'budget'
    }
  },
  components: {
    SearchTable
  },
}
</script>
