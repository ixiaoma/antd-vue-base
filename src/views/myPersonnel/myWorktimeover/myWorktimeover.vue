<template>
  <div class="exampleList">
      <!-- <search-table :pageCode='pageCode'/> -->
      <search-table :definekey='definekey'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  data () {
    return {
      pageCode:'overtime',
      definekey:'overtime'
    }
  },
  components: {
    SearchTable
  },
}
</script>
