<style lang="less" scoped>
  @import "./index.less";
</style>
<template>
<div class="codeTable">
    <!--码表管理-->
    <a-card :bordered="false">   
      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd(null,1)">新建</a-button>
      </div>
      <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="noticeData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :scroll="{ x: 1200}"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <template slot="action" slot-scope="text, record">         
                  <a @click="handleAdd(record,3)">修改</a>
                  <a-divider type="vertical" />
                  <a @click="handleDel(record)">删除</a>
                </template>
      </a-table>
    </a-card>
  </div>
</template>


<script src="./index.js"></script>
