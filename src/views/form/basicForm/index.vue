<template>
    <a-tabs v-model="activeKey" size='small' class="tabs-style">
      <a-tab-pane key="1" tab="员工信息">
          <base-form ref='baseForm' @next='nextStep'/>
      </a-tab-pane>
      <a-tab-pane v-for="(item,index) in tabLists" :key="`${index+2}`" :tab="item.tabName" force-render :disabled="disabled">
        <a-card>
          <table-filter v-if='item.filterList' :filterList='item.filterList'/>
          <div class="table-operator" v-if='item.tabName != "合同管理"'>
            <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
            <a-button type="default" icon="download" v-if='item.tabName == "员工离职" || item.tabName == "奖惩管理"'>批量导出</a-button>
          </div>
          <s-table
            ref="table"
            rowKey="key"
            :columns="item.columns"
            :rowSelection="item.tabName == '员工离职' || item.tabName == '奖惩管理' ? rowSelection : null"
            :data="loadData"
            showPagination="auto">
            <span slot="serial" slot-scope="text, record, index">
              {{ index + 1 }}
            </span>
            <span slot="action" slot-scope="text, record">
              <template>
                <a @click="handleEdit(record)">查看</a>
                <a-divider type="vertical" v-if='item.tabName != "合同管理"'/>
                <a @click="handleSub(record)" v-if='item.tabName != "合同管理"'>修改</a>
                <a-divider type="vertical" v-if='item.tabName == "员工离职" || item.tabName == "奖惩管理"'/>
                <a @click="handleSub(record)" v-if='item.tabName == "员工离职" || item.tabName == "奖惩管理"'>删除</a>
              </template>
            </span>
          </s-table>
        </a-card>
      </a-tab-pane>
    </a-tabs>
</template>

<script>
import { STable } from '@/components'
import BaseForm from '@/components/BaseForm/index.vue'
import TableFilter from '@/components/TableFilter/index.vue'

import { getServiceList } from '@/api/user'

const baseLists = [
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

const tabDetailList = [
  {
    tabName:'证件资料',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '员工姓名',
        dataIndex: 'description'
      },
      {
        title: '证件编号',
        dataIndex: 'callNo'
      },
      {
        title: '证件名称',
        dataIndex: 'status'
      },
      {
        title: '生效日期',
        dataIndex: 'updatedAt'
      },{
        title: '到期日期',
        dataIndex: 'updatedAta'
      },{
        title: '状态',
        dataIndex: 'updatedAtb'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  },{
    tabName:'合同管理',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },{
        title: '合同编号',
        dataIndex: 'description'
      },{
        title: '合同名称',
        dataIndex: 'callNo'
      },{
        title: '员工姓名',
        dataIndex: 'status'
      },{
        title: '员工部门',
        dataIndex: 'updatedAt'
      },{
        title: '合同状态',
        dataIndex: 'updatedAta'
      },{
        title: '是否转正',
        dataIndex: 'updatedAtb'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  },{
    tabName:'员工调动',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },{
        title: '员工姓名',
        dataIndex: 'description'
      },{
        title: '调动编号',
        dataIndex: 'callNo'
      },{
        title: '调动类型',
        dataIndex: 'status'
      },{
        title: '调动时间',
        dataIndex: 'updatedAt'
      },{
        title: '现人员类型',
        dataIndex: 'updatedAta'
      },{
        title: '调动状态',
        dataIndex: 'updatedAtb'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ],
    filterList:[
      {
        searchLabel: '调动类型',
        searchKey: 'staffJob',
        searchType: 'Select',
        selectList: [
          {
            key: '类型',
            value: '类型'
          }
        ]
      },
      {
        searchLabel: '调动时间',
        searchKey: 'time',
        searchType:'Time'
      }
    ]
  },{
    tabName:'员工离职',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },{
        title: '员工工号',
        dataIndex: 'description'
      },{
        title: '员工姓名',
        dataIndex: 'callNo'
      },{
        title: '员工部门',
        dataIndex: 'status'
      },{
        title: '离职类型',
        dataIndex: 'updatedAt'
      },{
        title: '离职时间',
        dataIndex: 'updatedAta'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ],
    filterList:[
      {
      searchLabel: '员工工号',
      searchKey: 'staffCode'
    },
    {
      searchLabel: '员工姓名',
      searchKey: 'staffName'
    },
    {
      searchLabel: '员工部门',
      searchKey: 'staffDept'
    },
    {
      searchLabel: '离职类型',
      searchKey: 'status',
      searchType: 'Select',
      selectList: [
        {
          key: '1',
          value: '在离'
        },
        {
          key: '2',
          value: '离职'
        }
      ]
    },{
        searchLabel: '离职时间',
        searchKey: 'time',
        searchType:'Time'
      }
    ]
  },{
    tabName:'奖惩管理',
    columns:[
      {
        title: '',
        width: '50px',
        scopedSlots: { customRender: 'serial' }
      },{
        title: '员工工号',
        dataIndex: 'description'
      },{
        title: '员工姓名',
        dataIndex: 'description1'
      },{
        title: '部门',
        dataIndex: 'callNo'
      },{
        title: '岗位',
        dataIndex: 'status'
      },{
        title: '奖惩类别',
        dataIndex: 'updatedAt'
      },{
        title: '奖惩内容',
        dataIndex: 'updatedAta'
      },{
        title: '录入时间',
        dataIndex: 'updatedAtb'
      },{
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ],
    filterList:[
      {
      searchLabel: '员工工号',
      searchKey: 'staffCode'
    },
    {
      searchLabel: '员工姓名',
      searchKey: 'staffName'
    },
    {
      searchLabel: '员工部门',
      searchKey: 'staffDept'
    },
    {
      searchLabel: '奖惩类型',
      searchKey: 'status',
      searchType: 'Select',
      selectList: [
        {
          key: '1',
          value: '在离'
        },
        {
          key: '2',
          value: '离职'
        }
      ]
    }
    ]
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
    STable,
    BaseForm,
    TableFilter
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
    this.disabled = flag == 1
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