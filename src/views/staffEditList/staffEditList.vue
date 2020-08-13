<style lang="less" scoped>
  @import "./staffEditList.less";
</style>
<template>
<div class="staffEditList">
    <!--这是staffEditList列表页面-->
    <a-card :bordered="false">
      <table-filter :filterList='filterList'/>
      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
        <a-button type="default" icon="download">导出</a-button>
        <a-button type="default" icon="upload">批量导入</a-button>
      </div>
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
            <a @click="handleSub(record)">查看</a>
            <a-divider type="vertical" />
            <a @click="handleEdit(record)">修改</a>
          </template>
        </span>
      </s-table>
    </a-card>
  </div>
</template>


<script src="./staffEditList.js"></script>
