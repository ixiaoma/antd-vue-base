
<template>
<div class="staffQuitApproval">
    <!--这是员工离职审批列表页面-->
   <approvalCommon :defineKey="defineKey"></approvalCommon>
  </div>
</template>

<script>
import {approvalCommon} from '@/components'

export default {
  name: 'staffQuitApprovalList',
  title: 'staffQuitApproval',
  components: {
    approvalCommon
  },
  data () {
   return {
     defineKey:'transfer'
   }
  },
  filters: {
    
  },
  computed: {
    
  },
  methods: {
   
  }
}
</script>
