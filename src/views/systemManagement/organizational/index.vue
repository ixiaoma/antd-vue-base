<style lang="less">
@import './index.less';
</style>
<template>
  <div class="userSetting">
    <a-row type="flex">
      <a-col :span="24">
          <a-col :span="6">
                <a-col :span="24">
                   <span style="display:inline-block;margin-left:10px">部门：{{titleBatch||'全公司'}}</span>
                   <a-icon type="plus" @click="addDeptLoad" style="margin-left:20px"/>
                   <a-icon type="form" @click="editDeptLoad" style="margin-left:15px"/>
                   <a-icon type="delete" @click="delDeptLoad" style="margin-left:15px"/>
                </a-col>
                <a-col :span="24">
                    <Tree showLine :treeData="treeData" @select="selectNode"></Tree>
                </a-col>
          </a-col>
          <a-col offset="1" :span="17">        
               <div class="table-operator">
                    <a-input v-model="nickname" placeholder="请输入用户名" style="width:200px;margin-right:10px"/>
                    <a-button type="primary" icon="search" @click="searchLoad">搜索</a-button>
                    <a-button style="float:right" type="default" icon="download">导出</a-button>
                    <a-button style="float:right" type="primary" icon="plus" @click="handleAdd">新建</a-button>      
                </div>      
              <s-table
                ref="table"
                :rowKey="(record) =>  record.id"
                :columns="columns"
                :data="userData"
                :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :showPagination="true"
                :scroll="{ x: 1200}"
                >
                <template slot="incumbencyName" slot-scope="text, record">
                    <span>{{record.incumbency?"在职":"离职"}}</span>
                </template>
                <template slot="action" slot-scope="text, record">
                    <a-icon type="form" @click="handleEdit(record)"/>
                    <a-divider type="vertical" />
                    <a-icon type="unlock" @click="passEdit(record)"/>
                    <a-divider type="vertical" />
                    <a-icon type="setting" @click="roleEdit(record)"/>
                    <a-divider type="vertical" />
                    <a-icon type="delete" @click="handleDel(record)"/>
                </template>
                </s-table>
          </a-col>
      </a-col>
    </a-row>
    <addDepartment ref="addDepartment" @deptreflash="deptreflash"></addDepartment>
    <addUserModal ref="addUserModal" @reflash="reflash"></addUserModal>
  </div>
</template>
<script src="./index.js"></script>