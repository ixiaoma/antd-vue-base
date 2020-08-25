<style lang="less" scoped>
  @import "./workOvertimeApproval.less";
</style>
<template>
<div class="workOvertimeApproval">
    <!--这是workOvertimeApproval列表页面-->
    <a-card :bordered="false">
      <table-filter :filterList='filterList'/>
      <s-table
        ref="table"
        rowKey="key"
        :columns="columns"
        :filterList="filterList"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto">
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
          <a @click="handleAdd(record,2)">查看</a>
        </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>


<script src="./workOvertimeApproval.js"></script>
