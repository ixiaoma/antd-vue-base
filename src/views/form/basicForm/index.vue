<template>
  <!-- <div class="base-form-index"> -->
    <a-tabs v-model="activeKey" size='small' class="tabs-style">
        <a-tab-pane key="1" tab="员工信息">
            <base-form ref='baseForm' @next='nextStep'/>
        </a-tab-pane>
        <a-tab-pane v-for="(item,index) in tabLists" :key="index+2" :tab="item.tabName" force-render :disabled = 'disabled'>
          <a-card>
            <div class="table-operator">
              <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
            </div>
            <s-table
              ref="table"
              rowKey="key"
              :columns="item.columns"
              :data="loadData"
              showPagination="auto">
              <span slot="serial" slot-scope="text, record, index">
                {{ index + 1 }}
              </span>
              <span slot="action" slot-scope="text, record">
                <template>
                  <a @click="handleEdit(record)">查看</a>
                  <a-divider type="vertical" />
                  <a @click="handleSub(record)">修改</a>
                </template>
              </span>
            </s-table>
          </a-card>
        </a-tab-pane>
      </a-tabs>
      
  <!-- </div> -->
</template>

<script>
import BaseForm from '@/components/BaseForm/index.vue'
import { STable } from '@/components'

import { getServiceList } from '@/api/user'

const tabLists = [
  {
    tabName:'社会关系',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '与本人的关系',
        dataIndex: 'description'
      },
      {
        title: '成员姓名',
        dataIndex: 'callNo'
      },
      {
        title: '出生日期',
        dataIndex: 'status'
      },
      {
        title: '工作单位及职务',
        dataIndex: 'updatedAt'
      },{
        title: '政治面貌',
        dataIndex: 'updatedAta'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  },{
    tabName:'工作经历',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },{
        title: '起始时间',
        dataIndex: 'description'
      },{
        title: '终止时间',
        dataIndex: 'callNo'
      },{
        title: '所在单位',
        dataIndex: 'status'
      },{
        title: '从事工作活担任职务',
        dataIndex: 'updatedAt'
      },{
        title: '工作内容',
        dataIndex: 'updatedAta'
      },{
        title: '证明人',
        dataIndex: 'updatedAtb'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  },{
    tabName:'教育经历',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },{
        title: '学位证书编号',
        dataIndex: 'description'
      },{
        title: '所学专业',
        dataIndex: 'callNo'
      },{
        title: '入学考试',
        dataIndex: 'status'
      },{
        title: '学习形式',
        dataIndex: 'updatedAt'
      },{
        title: '学制',
        dataIndex: 'updatedAta'
      },{
        title: '毕业时间',
        dataIndex: 'updatedAtb'
      },{
        title: '毕业学校',
        dataIndex: 'updatedAtf'
      },{
        title: '学习形式',
        dataIndex: 'updatedAtc'
      },{
        title: '学历',
        dataIndex: 'updatedAtd'
      },{
        title: '学位',
        dataIndex: 'updatedAte'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  }
]

export default {
  name: 'Add',
  data(){
    return{
      tabLists,
      activeKey:'1',
      disabled:false,
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getServiceList(requestParameters)
          .then(res => {
            return res.result
          })
      }
    }
  },
  components:{
    BaseForm,
    STable
  },
  methods: {
    handleAdd(){
      this.$router.push({name:'baseForm',query:{title:'社会关系添加'}})
    },
    nextStep(){
      this.disabled = false
      this.activeKey = '2'
    }
  }
}
</script>
<style lang="less" scoped>
  .base-form-index, .tabs-style{
    // height: 100%;
    /deep/.ant-tabs-content{
      // height: 100%;
      background-color: #fff!important;
    }
  }
</style>