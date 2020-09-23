
<template>
<a-card class="table-page-search-wrapper">
      <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="todoData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :scroll="{ x: 1600}"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <template slot="action" slot-scope="text, record">         
                  <a @click="handleSub(record)">查看</a>
                </template>
      </a-table>
    </a-card>
</template>


<script src="./assessDone.js"></script>
