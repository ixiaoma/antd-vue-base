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
        <div style="margin-bottom:20px">
            <a-button 
              type="primary" 
              icon="plus" 
              @click="addReimbursement"
            >新建</a-button>
            <a-month-picker placeholder="选择报销月份" v-model="month" style="margin-left:20px" />
            <span style="margin-left:20px">合计: </span>
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