<template>
  <div class="exampleList">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  data () {
    return {
      pageCode:'example'
    }
  },
  components: {
    SearchTable
  },
}
</script>
