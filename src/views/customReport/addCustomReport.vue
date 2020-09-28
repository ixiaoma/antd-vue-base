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
            <a-select mode="default" v-model="template" allowClear @change="getFieldList">
              <a-select-option v-for="k in templateList" :key="k.codeKey" :value="k.codeKey">{{ k.codeValue }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-form-item label="报表排序">
            <a-input-number style="width:100%" v-model="sort" :min="0" :precision="0" />
          </a-form-item>
        </a-col>
        <a-col :lg="6" :md="12" :sm="24">
          <a-button type="primary" style="margin:0 10px" @click="save">保存</a-button>
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
          报表查询列表字段<a-button type="primary" size="small" @click="configload(1)">配置</a-button>
        </p>
        <a-table :columns="columns" :data-source="tableDataList" :rowKey="(record) =>  record.fieldCode" size="small" :bordered="true">
          <template slot="sort" slot-scope="text, record,index">
            <a-input-number size="small" v-model="record.sort" @change="sortchange(1,index,record.sort)" :min="0" :precision="0" :pagination="false"/>
          </template>
          <template slot="action" slot-scope="text, record,index">
            <a @click="remove(record,index,1)">删除</a>
          </template>
        </a-table>
      </a-col>
      <!-- 查询条件 -->
      <a-col span="8">
        <p class="top-title">
          报表查询条件字段<a-button type="primary" size="small" @click="configload(2)">配置</a-button>
        </p>
        <a-table :columns="columns" :data-source="tableDataSearch" :rowKey="(record) =>  record.fieldCode" size="small" :bordered="true">
          <template slot="sort" slot-scope="text, record,index">
            <a-input-number size="small" v-model="record.sort" @change="sortchange(2,index,record.sort)" :min="0" :precision="0" :pagination="false"/>
          </template>
          <template slot="action" slot-scope="text, record,index">
            <a @click="remove(record,index,2)">删除</a>
          </template>
        </a-table>
      </a-col>
      <!-- 导出 -->
      <a-col span="8">
        <p class="top-title">
          报表导出字段<a-button type="primary" size="small" @click="configload(3)">配置</a-button>
        </p>
        <a-table :columns="columns" :data-source="tableDataExport" :rowKey="(record) =>  record.fieldCode" size="small" :bordered="true">
          <template slot="sort" slot-scope="text, record,index">
            <a-input-number size="small" v-model="record.sort" @change="sortchange(3,index,record.sort)" :min="0" :precision="0" :pagination="false"/>
          </template>
          <template slot="action" slot-scope="text, record,index">
            <a @click="remove(record,index,3)">删除</a>
          </template>
        </a-table>
      </a-col>
    </a-row>

    <a-modal v-model="isModal" title="配置" :bodyStyle='{padding:10}'>
        <a-row>
            <a-table 
              ref="table"
              size="small"
              :row-selection="rowSelection"
              :bordered="true"
              :rowKey="(record) =>  record.code"
              :columns="settingColumns" 
              :data-source="settingTableData"      
              :showPagination="false"
              :loading="loading"
            >
          </a-table>  
        </a-row>   
        <template slot="footer">
          <a-button key="back" @click="handleCancel">取消</a-button>
          <a-button type="primary" @click="handleOk">保存</a-button>
        </template>
    </a-modal>



  </a-card>
</template>
<script src="./addCustomReport.js"></script>
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