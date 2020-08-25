<style lang="less" scoped>
  @import "./systemNotice.less";
</style>
<template>
<div class="systemNotice">
    <!--这是systemNotice列表页面-->
    <a-card :bordered="false">
      <a-tabs default-active-key="0" @change="tabChange">
        <a-tab-pane key="0" tab="全部"></a-tab-pane>
        <a-tab-pane key="1" tab="日常通知"></a-tab-pane>
        <a-tab-pane key="2" tab="节假日通知"></a-tab-pane>
        <a-tab-pane key="3" tab="排班通知"></a-tab-pane>
        <a-tab-pane key="4" tab="其他通知"></a-tab-pane>
      </a-tabs>
      <!-- <table-filter :filterList='filterList'/> -->
      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd(null,1)">新建</a-button>
      </div>

      <s-table
        ref="table"
        :rowKey="(record) =>  record.id"
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
          <a @click="handleSub(record)">查看</a>
          <a-divider type="vertical" />
          <a @click="handleAdd(record,3)">修改</a>
        </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>


<script src="./systemNotice.js"></script>
