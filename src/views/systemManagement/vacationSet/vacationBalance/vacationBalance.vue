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
  </div>
</template>
<script src="./vacationBalance.js"></script>
