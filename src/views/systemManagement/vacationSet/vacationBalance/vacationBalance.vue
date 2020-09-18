<style lang="less" scoped>
  @import "./vacationBalance.less";
</style>
<template>
  <div class="vacationBalance">
    <a-form class="ant-advanced-search-form" layout="inline">
            <a-row :gutter="24">
              <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="部门">
                       <a-tree-select
                                :treeData="treeData"
                                style="width: 100%"
                                v-model="deptId"
                                :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
                                :showSearch='true'
                                treeNodeFilterProp="title"
                                :placeholder="'请选择部门'" 
                                :getPopupContainer="triggerNode => triggerNode.parentElement"
                                allowClear
                            />            
                    </a-form-item>
                </a-col>
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="姓名">
                        <a-input v-model="username" allowClear/>
                    </a-form-item>
                </a-col>
                <a-button type="primary" style="margin:0 10px" icon="search" @click="searchRefresh()">查询</a-button>
            </a-row>
            <a-row type="flex" justify="end">
                <a-button type="primary" style="margin-right:5px" icon="download" @click="uploadLoad">导入余额</a-button>
                <a-button type="primary" style="margin-right:5px" icon="upload" @click="exportLoad">导出余额</a-button>
            </a-row>
        </a-form>
   <s-table
        ref="table"
        rowKey="userId"
        :columns="columns"
        :data="loadData"
        :scroll='{x:true}'>
            <span slot="action" slot-scope="text, record">
                <template>
                    <a  @click="handleEdit(record)" style="margin:0 3px">查看</a>
                </template>
            </span>
        </s-table>
        <a-modal v-model="visible" title="提交排班计划" :bodyStyle='{padding:0}'  :footer="null">
            <a-row style="padding:20px 20px 50px">
                <a-button @click="downLoad" style="margin-right:50px"> <a-icon type="download"/> 下载模板 </a-button>  
                <a-upload name="file"
                    :action="userVacationImport"
                    :headers="headers"
                    @change="handleChange"
                    :show-upload-list="false"
                    >
                    <a-button type="primary"> <a-icon type="upload" /> 选择文件 </a-button>
                </a-upload>
            </a-row>   
      </a-modal>
  </div>
</template>
<script src="./vacationBalance.js"></script>
