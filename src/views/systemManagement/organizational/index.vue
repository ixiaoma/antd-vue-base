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
                    <a-input v-model="username" placeholder="请输入用户名" style="width:200px;margin-right:10px"/>
                    <a-button type="primary" icon="search" @click="searchLoad">搜索</a-button>
                    <!-- <a-button style="float:right" type="default" icon="download" @click="exportLoad">导出</a-button> -->
                    <a-button style="float:right" type="primary" icon="plus" @click="handleAdd">新建</a-button>      
                </div>   
                <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="userData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :scroll="{ x: 1200}"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <!-- :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" -->
                <template slot="incumbencyName" slot-scope="text, record">
                    <span>{{record.incumbency?"在职":"离职"}}</span>
                </template>
                <template slot="enabled" slot-scope="text, record">
                  <a-switch checked-children="启用" un-checked-children="禁用" :checked="record.enabled?true:false" @change="enabledChange(record)"/>
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
                </a-table>    
          </a-col>
      </a-col>
    </a-row>
    <addDepartment ref="addDepartment" @deptreflash="deptreflash"></addDepartment>
    <addUserModal ref="addUserModal" @reflash="reflash"></addUserModal>
    <editPass ref="editPass" @reflash="reflash"></editPass>
    <assignRole ref="assignRole" @reflash="reflash"></assignRole>
  </div>
</template>
<script src="./index.js"></script>