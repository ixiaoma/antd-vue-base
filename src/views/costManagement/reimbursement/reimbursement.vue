<template>
  <a-card class="table-page-search-wrapper">
      <!-- <search-table :pageCode='pageCode'/> -->    
      <a-tabs default-active-key="0" @change="callback">
        <a-tab-pane :key="index.toString()" :tab="item.name" v-for="(item,index) in reimbursementList">
          <search-table :definekey='item.definekey'/>
        </a-tab-pane>
      </a-tabs>
  </a-card>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'reimbursement',
  data () {
    return {
      pageCode:'reimbursement',
      reimbursementList:[
        {definekey:'reimbursement_traffic',name:'市内交通'},
        {definekey:'reimbursement_travel',name:'差旅'},
        {definekey:'reimbursement_administration',name:'行政办公'},
        {definekey:'reimbursement_League',name:'团建'},
        {definekey:'reimbursement_birthday',name:'生日费'},
        {definekey:'reimbursement_train',name:'培训/考试费'},
        {definekey:'reimbursement_meeting',name:'会议费'},
        {definekey:'reimbursement_other',name:'其他'},
      ]
    }
  },
  components: {
    SearchTable
  },
  methods:{
    callback(key) {
      console.log(key);
    }
  }
}
</script>
