<template>
<div class="workTimeList">
    <!-- <search-table pageCode='recording'/> -->
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="合同">
        <agreeList></agreeList>
      </a-tab-pane>
      <a-tab-pane key="2" tab="试用期">
        <staffEntryList></staffEntryList>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>

import { SearchTable } from '@/components'
import agreeList from '../agreeList/agreeList.vue'
import staffEntryList from '../../personnelDeployment/staffEntryList/staffEntryList.vue'

export default {
  name: 'reminderList',
  components: {
    SearchTable,agreeList,staffEntryList
  },
  data () {
    return {
      showBtnList:[]//按钮权限list
    }
  },
  methods: {
    
  }
}

</script>
<style scoped>
.workTimeList{
  background: #fff;
  padding: 10px;
}
</style>
