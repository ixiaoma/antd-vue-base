<template>
  <approval-jsx/>
</template>

<script>
import approvalJsx from './ApprovalCom'
  export default {
    name: 'Exception500',
    components:{
      approvalJsx
    },
    methods: {
      toHome () {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>
