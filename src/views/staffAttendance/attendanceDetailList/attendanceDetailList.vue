<style lang="less" scoped>
  @import "./attendanceDetailList.less";
</style>
<template>
<div class="attendanceDetailList" v-if='!pageLoading'>
  <table-filter :filterList='filterList' @refresh='searchRefresh'/> 
        <div class="table-operator">
            <a-button type="primary"  @click="handleUpdate(null,1)">批量更新考勤状态</a-button>
        </div>
    <s-table
        ref="table"
        rowKey="id"
        :columns="columns"
        :rowSelection="rowSelection"
        :data="loadData"
        :scroll='{x:true}'>
        </s-table>
  </div>
</template>


<script src="./attendanceDetailList.js"></script>
