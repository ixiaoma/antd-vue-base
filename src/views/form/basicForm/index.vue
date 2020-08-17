<template>
  <div class="base-form-index">
    <a-tabs v-model="activeKey" size='small' class="tabs-style">
        <a-tab-pane key="1" tab="员工信息">
          <a-card :bordered="false">
            <base-form ref='baseForm' @next='nextStep'/>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="2" tab="社会关系" force-render :disabled = 'disabled'>
          
        </a-tab-pane>
        <a-tab-pane key="3" tab="工作经历" :disabled = 'disabled'>
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="4" tab="教育经历" :disabled = 'disabled'>
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
      
  </div>
</template>

<script>
import BaseForm from '@/components/BaseForm/index.vue'
export default {
  name: 'Add',
  data(){
    return{
      activeKey:'1',
      disabled:true
    }
  },
  components:{
    BaseForm
  },
  methods: {
    nextStep(){
      this.disabled = false
      this.activeKey = '2'
    }
  }
}
</script>
<style lang="less" scoped>
  .base-form-index, .tabs-style{
    height: 100%;
    /deep/.ant-tabs-content{
      height: 100%;
      background-color: #fff!important;
    }
  }
</style>