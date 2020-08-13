<template>
  <div>
    <a-tabs default-active-key="1" size='small'>
        <a-tab-pane key="1" tab="员工信息">
          <a-card :bordered="false">
            <base-form :layoutList='layoutList'/>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="2" tab="社会关系" force-render disabled>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="工作经历" disabled>
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="4" tab="教育经历" disabled>
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
      <footer-tool-bar>
        <a-button @click="goBack">取消</a-button>
        <a-button type="primary" style="margin-left: 8px">提交</a-button>
      </footer-tool-bar>
  </div>
</template>

<script>
import FooterToolBar from '@/layouts/FooterToolbar'
import BaseForm from './BaseForm'
const layoutList = [
  {
    groupName:'基本信息',
    fieldList:[
      {
        fieldName:'工号',
        fieldKey:'name',
        fieldValue:null,
        enabled:1,
        fieldType:1
      },{
        fieldName:'员工Itcode',
        fieldKey:'itcode',
        fieldValue:null,
        enabled:1,
        fieldType:1
      },{
        fieldName:'时间',
        fieldKey:'time',
        fieldValue:null,
        enabled:0,
        fieldType:5
      },{
        fieldName:'下拉单选',
        fieldKey:'select',
        fieldValue:null,
        enabled:1,
        fieldType:3
      }
    ]
  },{
    groupName:'其他信息',
    fieldList:[
      {
        fieldName:'备注',
        fieldKey:'remark',
        fieldValue:null,
        enabled:0,
        fieldType:2
      }
    ]
  }
]
export default {
  name: 'Add',
  data(){
    return{
      layoutList
    }
  },
  components:{
    FooterToolBar,
    BaseForm
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>
