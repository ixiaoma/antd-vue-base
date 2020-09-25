<template>
  <a-card class="table-page-search-wrapper">
      <search-table :pageCode='pageCode'>
        <a-dropdown v-if="buttonList.includes('addReimbursement')">
          <a-menu slot="overlay" @click="handleAdd">
            <a-menu-item :key="item.definekey" v-for="item in reimbursementList1">
              {{item.name}}
            </a-menu-item>
          </a-menu>
          <a-button type="primary" style="margin-right:10px"> 日常 <a-icon type="down" /> </a-button>
        </a-dropdown>
        <a-dropdown v-if="buttonList.includes('addReimbursement')">
          <a-menu slot="overlay" @click="handleAdd">
            <a-menu-item :key="item.definekey" v-for="item in reimbursementList2">
              {{item.name}}
            </a-menu-item>
          </a-menu>
          <a-button type="primary"> 非行政 <a-icon type="down" /> </a-button>
        </a-dropdown>
      </search-table>
  </a-card>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  name:'reimbursement',
  data () {
    return {
      pageCode:'reimbursement',
      reimbursementList1:[
        {definekey:'reimbursement_traffic',name:'市内交通'},
        {definekey:'reimbursement_travel',name:'差旅'},
        {definekey:'reimbursement_administration',name:'行政办公'},
      ],
      reimbursementList2:[
        {definekey:'reimbursement_League',name:'团建'},
        {definekey:'reimbursement_birthday',name:'生日费'},
        {definekey:'reimbursement_train',name:'培训/考试费'},
        {definekey:'reimbursement_meeting',name:'会议费'},
        {definekey:'reimbursement_other',name:'其他'}   
      ],
      buttonList:[]
    }
  },
  components: {
    SearchTable
  },
  methods:{
    handleAdd ({key}) {
          const title = `${this.$route.meta.title}新增`
          this.$router.push({
              name:'baseForm',
              query:{title,flag:1,definekey:key}
          })
      },
  },
  created(){
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  }
}
</script>
