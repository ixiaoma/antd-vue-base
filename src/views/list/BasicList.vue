<template>
  <div>
    <a-card :bordered="false">
      <a-row type="flex" justify="end">
        <a-button @click="handleAdd">邀请员工</a-button>
        <a-button type="primary" style="margin-left:8px" icon="plus" @click="handleAdd">员工</a-button>
      </a-row>
      <a-row type="flex" justify="end" class="filter-row">
        <a-input-search style="width: 200px;" />
        <a-popover title="筛选" v-model="filterVisible" trigger="click">
          <template slot="content">
            <div class="table-page-search-wrapper">
              <a-form layout="inline">
                <a-row :gutter="48">
                  <a-col :md="12" :sm="24">
                    <a-form-item label="规则编号">
                      <a-input v-model="queryParam.id" placeholder=""/>
                    </a-form-item>
                  </a-col>
                  <a-col :md="12" :sm="24">
                    <a-form-item label="使用状态">
                      <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                        <a-select-option value="0">全部</a-select-option>
                        <a-select-option value="1">关闭</a-select-option>
                        <a-select-option value="2">运行中</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :md="12" :sm="24">
                    <a-form-item label="调用次数">
                      <a-input-number v-model="queryParam.callNo" style="width: 100%"/>
                    </a-form-item>
                  </a-col>
                  <a-col :md="12" :sm="24">
                    <a-form-item label="更新日期">
                      <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期"/>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row type="flex" justify="end">
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                </a-row>
              </a-form>
            </div>
          </template>
          <a-icon type="filter" class="icon-style"/>
        </a-popover>
        <a-icon type="export" class="icon-style"/>
        <a-icon type="setting" class="icon-style"/>
      </a-row>
      <s-table
        ref="table"
        rowKey="key"
        :columns="columns"
        :filterList="filterList"
        :data="loadData"
        showPagination="auto"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="status" slot-scope="text">
          <a-badge :status="text | statusTypeFilter" :text="text | statusFilter" />
        </span>
        <span slot="description" slot-scope="text">
          <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
        </span>

        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">配置</a>
            <a-divider type="vertical" />
            <a @click="handleSub(record)">订阅报警</a>
          </template>
        </span>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        @cancel="handleCancel"
        @ok="handleOk"
      />
      <step-by-step-modal ref="modal" @ok="handleOk"/>
      </a-row></a-card>
  </div>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'

import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './modules/CreateForm'

import { getServiceList } from '@/api/user'

const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' }
  },
  {
    title: '规则编号',
    dataIndex: 'no'
  },
  {
    title: '描述',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' }
  },
  {
    title: '服务调用次数',
    dataIndex: 'callNo',
    sorter: true,
    needTotal: true,
    customRender: (text) => text + ' 次'
  },
  {
    title: '状态',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    sorter: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}
const filterList = [
  {
    searchLabel: '规则编号',
    searchKey: 'id'
  }, {
    searchLabel: '使用状态',
    searchKey: 'status',
    searchType: 'Select',
    selectList: [
      {
        key: 'close',
        value: '关闭'
      }
    ]
  }
]
export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    StepByStepModal
  },
  data () {
    this.columns = columns
    this.filterList = filterList
    return {
      // create model
      visible: false,
      filterVisible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getServiceList(requestParameters)
          .then(res => {
            return res.result
          })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
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
    handleAdd () {
      this.mdl = null
      this.visible = true
    },
    handleEdit (record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .icon-style{
    font-size: 18px;
    margin-top: 6px;
    margin-left: 10px;
    cursor: pointer;
  }
  .filter-row{
    margin: 10px 0;
  }
  .ant-popover-inner-content{
    min-width: 580px
  }
</style>
