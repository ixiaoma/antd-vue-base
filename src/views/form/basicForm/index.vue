<template>
    <a-tabs v-model="activeKey" size='small' class="tabs-style">
      <a-tab-pane key="1" tab="员工信息">
          <base-form ref='baseForm' @next='nextStep'/>
      </a-tab-pane>
      <a-tab-pane v-for="(item,index) in tabLists" :key="`${index+2}`" :tab="item.tabName" force-render :disabled="disabled">
        <a-card v-if='activeKey == index+2'>
          <search-table :pageCode='item.pageCode'/>
        </a-card>
      </a-tab-pane>
    </a-tabs>
</template>

<script>
import { SearchTable } from '@/components'
import BaseForm from '@/components/BaseForm/index.vue'

import { getServiceList } from '@/api/user'

const baseLists = [
  {
    tabName:'社会关系',
    pageCode:'social_relations'
  },{
    tabName:'工作经历',
    pageCode:'work_experience'
  },{
    tabName:'教育经历',
    pageCode:'educational_experience'
  }
]

const tabDetailList = [
  {
    tabName:'证件资料',
    pageCode:'license_info'
  },{
    tabName:'合同管理',
    pageCode:'management'
  },{
    tabName:'员工调动',
    pageCode:'transfer'
  },{
    tabName:'员工离职',
    pageCode:'leave_office'
  }
]

export default {
  name: 'StaffForm',
  data(){
    return{
      tabLists:[],
      activeKey:'1',
      disabled:false,
      selectedRowKeys: [],
      selectedRows: [],
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        return getServiceList(requestParameters).then(res => {
          return res.result
        })
      }
    }
  },
  components:{
    SearchTable,
    BaseForm
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleAdd(){
      this.$router.push({name:'baseForm',query:{title:'社会关系添加'}})
    },
    nextStep(id){
      this.$router.push({query:{...this.$route.query,id,flag:3}})
      this.disabled = false
      this.activeKey = '2'
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    }
  },
  created(){
    const { flag } = this.$route.query
    // this.disabled = flag == 1
    if(flag == 2){
      this.tabLists = [...baseLists,...tabDetailList]
    }else {
      this.tabLists = [...baseLists]
    }
  }
}
</script>
<style lang="less" scoped>
  .base-form-index, .tabs-style{
    /deep/.ant-tabs-content{
      background-color: #fff!important;
    }
  }
</style>