<template>
  <div class="staffQuitList">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'staffQuitList',
  data () {
    return {
      pageCode:'leave_office'
    }
  },
  components: {
    SearchTable
  },
}
</script>
