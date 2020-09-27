<template>
  <a-card class="table-page-search-wrapper">
    <a-form class="ant-advanced-search-form" layout="inline">
      <a-row :gutter="24">
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item label="报表名称">
            <a-input v-model="name" allowClear />
          </a-form-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item label="报表模板">
            <a-select mode="default" v-model="template" allowClear>
              <a-select-option
                v-for="k in templateList"
                :key="k.codeKey"
                :value="k.codeKey"
              >{{ k.codeValue }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item label="报表排序">
            <a-input-number style="width:100%" v-model="sort" :min="0" :precision="0" />
          </a-form-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-button type="primary" style="margin:0 10px">保存</a-button>
        </a-col>
        <a-col span="24">
          <p style="color:red;">&nbsp;&nbsp;&nbsp;注:点击“删除”或者“配置”按钮后，最后都需要点击“保存”才可以操作成功！</p>
        </a-col>
      </a-row>
    </a-form>
    <a-row :gutter="15">
      <!-- 列表显示 -->
      <a-col span="8">
        <p class="top-title">
          报表查询列表字段
          <a-button type="primary" size="small" @click="configload(1)">配置</a-button>
        </p>
        <a-table :columns="columns" :data-source="tableDataList" size="small" :bordered="true">
          <template slot="sort" slot-scope="text, record,index">
            <a-input-number
              size="small"
              v-model="record.sort"
              @change="sortchange(1,index,record.sort)"
              :min="0"
              :precision="0"
              :pagination="false"
            />
          </template>
          <template slot="action" slot-scope="text, record,index">
            <a @click="remove(record,index,1)">删除</a>
          </template>
        </a-table>
      </a-col>
      <!-- 查询条件 -->
      <a-col span="8">
        <p class="top-title">
          报表查询条件字段
          <a-button type="primary" size="small" @click="configload(2)">配置</a-button>
        </p>

        <a-table :columns="columns" :data-source="tableDataSearch" size="small" :bordered="true">
          <template slot="sort" slot-scope="text, record,index">
            <a-input-number
              size="small"
              v-model="record.sort"
              @change="sortchange(2,index,record.sort)"
              :min="0"
              :precision="0"
              :pagination="false"
            />
          </template>
          <template slot="action" slot-scope="text, record,index">
            <a @click="remove(record,index,2)">删除</a>
          </template>
        </a-table>
      </a-col>
      <!-- 导出 -->
      <a-col span="8">
        <p class="top-title">
          报表导出字段
          <a-button type="primary" size="small" @click="configload(3)">配置</a-button>
        </p>
        <a-table :columns="columns" :data-source="tableDataExport" size="small" :bordered="true">
          <template slot="sort" slot-scope="text, record,index">
            <a-input-number
              size="small"
              v-model="record.sort"
              @change="sortchange(3,index,record.sort)"
              :min="0"
              :precision="0"
              :pagination="false"
            />
          </template>
          <template slot="action" slot-scope="text, record,index">
            <a @click="remove(record,index,3)">删除</a>
          </template>
        </a-table>
      </a-col>
    </a-row>
  </a-card>
</template>
<script>
export default {
  name: 'addCustomReport',
  title: 'addCustomReport',
  components: {},
  data() {
    return {
      name: '',
      template: '',
      sort: '',
      templateList: [],
      columns: [
        {
          title: '名称',
          dataIndex: 'title'
        },
        {
          title: '排序',
          dataIndex: 'sort',
          scopedSlots: { customRender: 'sort' }
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      tableDataList: [],
      tableDataSearch: [],
      tableDataExport: []
    }
  },
  computed: {},
  methods: {
    //排序事件，解决双向数据绑定问题
    sortchange(value, index, sort) {
      if (value == 1) {
        this.tableDataList[index].sort = sort
      } else if (value == 2) {
        this.tableDataSearch[index].sort = sort
      } else if (value == 3) {
        this.tableDataExport[index].sort = sort
      }
    },
    //配置按钮
    configload(value) {
      this.modalType = ''
      if (!this.basicTable_codeKey) {
        this.$message.warning('请选择报表模板')
        return false
      }
      value == 1
        ? (this.loading1 = true)
        : value == 2
        ? (this.loading2 = true)
        : value == 3
        ? (this.loading3 = true)
        : ''
      this.clear = setInterval(() => {
        //全部字段加载完才进行数组相减/展示模态框,因为接口太慢了，接口快了之后可以删除，直接this.tableDataload(value)
        if (this.tableshow) {
          this.tableDataload(value)
          clearInterval(this.clear)
        }
      }, 100)
    },
    //数组相减
    tableDataload(value) {
      let tableDataAll = JSON.parse(JSON.stringify(this.tableDataAll))
      let arr =
        value == 1
          ? this.tableDataList.map(item2 => item2.fieldCode)
          : value == 2
          ? this.tableDataSearch.map(item2 => item2.fieldCode)
          : value == 3
          ? this.tableDataExport.map(item2 => item2.fieldCode)
          : []
      let tableArr = tableDataAll.filter(item => arr.indexOf(item.fieldCode) == -1)
      let arrEnd = []
      if (value == '1' || value == '2') {
        tableArr.forEach(item => {
          if (item.authDisplayBoolean) {
            arrEnd.push(item)
          }
        })
      }
      if (value == '3') {
        tableArr.forEach(item => {
          if (item.authExport) {
            arrEnd.push(item)
          }
        })
      }
      this.tableData = arrEnd
      this.modalType = value
      value == 1
        ? (this.loading1 = false)
        : value == 2
        ? (this.loading2 = false)
        : value == 3
        ? (this.loading3 = false)
        : ''
      this.isModal = true
      this.selection = []
    },
    //删除字段
    remove(row, index, value) {
      value == 1
        ? this.tableDataList.splice(index, 1)
        : value == 2
        ? this.tableDataSearch.splice(index, 1)
        : this.tableDataExport.splice(index, 1)
    }
  }
}
</script>
<style scoped>
.top-title {
  font-size: 14px;
  height: 36px;
  line-height: 36px;
  padding-left: 30px;
  background-color: #eaf1fc;
  color: #3983e3;
  text-align: left;
  margin-bottom: 5px;
}
</style>