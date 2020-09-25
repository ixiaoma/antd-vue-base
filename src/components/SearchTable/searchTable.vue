
<template>
  <div class="searchTable">
    <a-card :bordered="false" v-if='!pageLoading'>
        <table-filter :filterList='filterList' @refresh='searchRefresh'/> 
        <div class="table-operator">
            <a-button type="primary" icon="plus" v-if="buttonList.includes('add')" @click="handleAdd(null,1)">新建</a-button>
            <a-button type="primary" icon="plus" v-if="buttonList.includes('addApproval')" @click="toApproval(null,1)">新增申请</a-button>
            <div>
                <slot></slot>
                <a-button type="default" icon="download" v-if="buttonList.includes('output')" style="margin-left:10px">导出</a-button>
            </div>
        </div>
        <s-table
        ref="table"
        rowKey="id"
        :columns="columns"
        :rowSelection="showSelect?rowSelection:null"
        :data="loadData"
        :scroll='{x:true}'>
            <span slot="action" slot-scope="text, record">
                <template>        
                    <a v-if="buttonList.includes('detail')" @click="handleAdd(record,2)" style="margin:0 3px">查看</a>
                    <a v-if="buttonList.includes('edit')" @click="handleAdd(record,3)" style="margin:0 3px">修改</a>
                    <a v-if="buttonList.includes('delete')" @click="deleteData(record.id)" style="margin:0 3px">删除</a>
                    <a v-if="buttonList.includes('rosterDetail')" @click="rosterDetailLoad(record,2)" style="margin:0 3px">查看排班</a>
                    <a v-if="buttonList.includes('attendanceDetail')" @click="attendanceDetailLoad(record,2)" style="margin:0 3px">查看考勤</a>
                    <a v-if="buttonList.includes('workTimeDetail')" @click="workTimeDetailLoad(record,2)" style="margin:0 3px">查看考勤</a>
                    <a v-if="buttonList.includes('detailApproval')" @click="detailApprovalLoad(record,2)" style="margin:0 3px">查看</a>
                </template>
            </span>
        </s-table>
    </a-card>
  </div>
</template>


<script src="./searchTable.js"></script>

