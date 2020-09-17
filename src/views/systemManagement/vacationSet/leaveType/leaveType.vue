<style lang="less" scoped>
@import './leaveType.less';
</style>
<template>
  <div class="leaveType">
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="handleAdd(null,'add')">添加类型</a-button>
    </div>
    <s-table ref="table" rowKey="id" :columns="columns" :data="loadData" :scroll="{x:true}">
      <span slot="action" slot-scope="text, record">
        <template>
          <a @click="handleAdd(record,'edit')" style="margin:0 3px">修改</a>
          <a @click="deleteData(record.id)" style="margin:0 3px">删除</a>
        </template>
      </span>
    </s-table>
    <addLeaveType @reflash="reflash" ref="addLeaveType"></addLeaveType>
  </div>
</template>
<script src="./leaveType.js"></script>
