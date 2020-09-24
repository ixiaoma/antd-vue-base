
<template>
<a-card class="table-page-search-wrapper">
    <div class="table-operator">
            <a-button type="primary" icon="upload" v-if="buttonList.includes('export')">导出</a-button>
            <a-button icon="download" v-if="buttonList.includes('upload')">导入</a-button>
        </div>
      <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.todoId"
                  :columns="columns" 
                  :data-source="todoData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :scroll="{ x: 1600}"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <template slot="action" slot-scope="text, record">         
                  <a v-if="buttonList.includes('detail')" @click="handleSub(record,3)">查看</a>
                </template>
      </a-table>
    </a-card>
</template>


<script src="./assessDone.js"></script>
