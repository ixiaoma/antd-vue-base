<template>
  <div class="mlrpApply">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'mlrpApply',
  data () {
    return {
      pageCode:'apply'
    }
  },
  components: {
    SearchTable
  },
}
</script>
