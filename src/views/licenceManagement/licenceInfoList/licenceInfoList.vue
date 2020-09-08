<template>
  <div class="exampleList">
      <search-table :pageCode='pageCode'/>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'licenceInfoList',
  data () {
    return {
      pageCode:'license_info'
    }
  },
  components: {
    SearchTable
  },
}
</script>
