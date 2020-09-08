<template>
  <div class="vacationManage">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'vacationManage',
  data () {
    return {
      pageCode:'vacation'
    }
  },
  components: {
    SearchTable
  },
}
</script>
