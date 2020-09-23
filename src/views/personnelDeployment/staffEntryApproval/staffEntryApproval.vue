<template>
<div class="staffEntryApproval">
    <!--这是员工入职审批列表页面-->
   <approvalCommon :defineKey="defineKey"></approvalCommon>
  </div>
</template>

<script>
import {approvalCommon} from '@/components'

export default {
  name: 'staffEntryApprovalList',
  title: 'staffEntryApproval',
  components: {
    approvalCommon
  },
  data () {
   return {
     defineKey:'induction'
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
