<style lang="less" scoped>
  @import "./reimbursement.less";
</style>
<template>
<div class="reimbursement">
    <!--这是reimbursement列表页面-->
    <a-card :bordered="false">
      <table-filter :filterList='filterList'/>
      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="typeVisible = true ">新建</a-button>
      </div>

      <s-table
        ref="table"
        rowKey="key"
        :columns="columns"
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
          <a-divider type="vertical" />
          <a @click="handleAdd(record,3)">修改</a>
        </template>
        </span>
      </s-table>
    </a-card>

    <!-- 选择类型弹窗 -->
    <a-modal
      title="选择报销类型"
      :visible="typeVisible"
      @ok="typeOk"
      @cancel="typeCancel"
      :footer="null"
    >
      <div>
        <a-button type="primary" style="margin-bottom:15px">日常报销</a-button>
      </div>
      <div >
        <p>非行政类报销</p>
        <div class="type-box">
          <a-button 
          type="primary" 
          v-for="(typeItem , i) in typeList" 
          @click="addReimbursement(typeItem)"
          :key="i">{{typeItem.name}}</a-button>
        </div>
      </div>

      <div style="height:30px"></div>

    </a-modal>

    <add-form-modal ref="addFormModal"></add-form-modal>
    <add-table-modal ref="addTableModal"></add-table-modal>
  </div>
</template>


<script src="./reimbursement.js"></script>
