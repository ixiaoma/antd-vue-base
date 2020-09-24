<template>
  <div class="exampleList">
      <search-table :definekey='definekey'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  data () {
    return {
      definekey:'test'
    }
  },
  components: {
    SearchTable
  },
}
</script>
