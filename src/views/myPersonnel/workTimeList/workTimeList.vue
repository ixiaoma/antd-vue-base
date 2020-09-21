<style lang="less" scoped>
  @import "./workTimeList.less";
</style>
<template>
<div class="workTimeList">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="员工考勤">
        <staffwork></staffwork>
      </a-tab-pane>
      <a-tab-pane key="2" tab="出勤记录">
        <staffwork></staffwork>
      </a-tab-pane>
      <a-tab-pane key="3" tab="休假记录">
        <staffwork></staffwork>
      </a-tab-pane>
      <a-tab-pane key="4" tab="加班记录">
        <staffwork></staffwork>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>


<script src="./workTimeList.js"></script>
