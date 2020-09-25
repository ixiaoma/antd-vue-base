<template>
  <div class="myQuitList">
      <!-- <search-table :pageCode='pageCode'/> -->
      <search-table :definekey='definekey'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'myQuitList',
  data () {
    return {
      pageCode:'leave_office',
      definekey:'leave_office'
    }
  },
  components: {
    SearchTable
  },
}
</script>
