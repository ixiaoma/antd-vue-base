<template>
  <div class="exampleList">
      <!-- <search-table :pageCode='pageCode'/> -->
      <search-table :definekey='definekey'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'reimbursement',
  data () {
    return {
      pageCode:'reimbursement'
    }
  },
  components: {
    SearchTable
  },
}
</script>
