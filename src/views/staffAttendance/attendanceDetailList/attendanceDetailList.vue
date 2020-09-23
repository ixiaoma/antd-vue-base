<style lang="less" scoped>
  @import "./attendanceDetailList.less";
</style>
<template>
<a-card class="table-page-search-wrapper" v-if="!pageLoading">
  <table-filter :filterList='filterList' @refresh='searchRefresh'/> 
        <div class="table-operator">
            <a-button type="primary"  @click="replaceCardLoad()">批量更新考勤状态</a-button>
        </div>
    <s-table
        ref="table"
        rowKey="id"
        :columns="columns"
        :rowSelection="rowSelection"
        :data="loadData"
        :scroll='{x:true}'>
        </s-table>
        <replaceCard ref="replaceCard" @refelsh="refelsh"></replaceCard>
  </a-card>
</template>


<script src="./attendanceDetailList.js"></script>
