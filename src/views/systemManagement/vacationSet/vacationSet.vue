<style lang="less" scoped>
  @import "./vacationSet.less";
</style>
<template>
  <div class="vacationSet">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="请假类型">
        <leaveType></leaveType>
      </a-tab-pane>
      <a-tab-pane key="2" tab="假期余额">
        <vacationBalance></vacationBalance>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script src="./vacationSet.js"></script>
