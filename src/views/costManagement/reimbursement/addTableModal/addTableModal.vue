<style lang="less" scoped>@import "./addTableModal.less";</style>


<template>
     <a-modal
      :title="title"
      :visible="visible"
      :confirm-loading="loading"
      @ok="handleOk"
      @cancel="handleCancel"
      :width="'80%'"
    >
      <a-card :bordered="false">
        <!-- <table-filter :filterList='data.filterList'/> -->
        <div class="table-operator">
            <a-button type="primary" icon="plus" @click="addReimbursement">新建</a-button>
        </div>

        <s-table
            ref="table"
            rowKey="key"
            :columns="data.columns"
            :filterList="data.filterList"
            :data="loadData"
            :alert="true"
            :showPagination="false"
        >
            <span slot="serial" slot-scope="text, record, index">
            {{ index + 1 }}
            </span>
            <!-- <span slot="description" slot-scope="text">
            <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
            </span> -->

            <span slot="action" slot-scope="text, record">
                <template>         
                <a @click="handleAdd(record,2)">查看</a>
                <a-divider type="vertical" />
                <a @click="handleAdd(record,3)">修改</a>
                </template>
            </span>
        </s-table>
        </a-card>

     


      <!-- 表单弹窗 -->
      <add-form-modal ref="addFormModal" @confirm="confirmForm"></add-form-modal>
    </a-modal>
</template>


<script src="./addTableModal.js"></script>