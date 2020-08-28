
<template>
  <div class="searchTable">
    <a-card :bordered="false" v-if='!pageLoading'>
        <table-filter :filterList='filterList' @refresh='searchRefresh'/>

        <div class="table-operator">
            <a-button type="primary" icon="plus" @click="handleAdd(null,1)">新建</a-button>
            <a-button type="default" icon="download">导出</a-button>
        </div>

        <s-table
        ref="table"
        rowKey="id"
        :columns="columns"
        :data="loadData"
        :rowSelection="rowSelection">
            <span slot="action" slot-scope="text, record">
                <template>
                    <!-- v-if="showBtnList.includes('detail')" -->
                    <a @click="handleAdd(record,2)" style="margin:0 3px">查看</a>
                    <a @click="handleAdd(record,3)" style="margin:0 3px">修改</a>
                    <a @click="deleteData(record.id)" style="margin:0 3px">删除</a>
                </template>
            </span>
        </s-table>
    </a-card>
  </div>
</template>


<script src="./searchTable.js"></script>
