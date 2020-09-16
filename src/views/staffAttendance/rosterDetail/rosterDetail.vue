<style lang="less" scoped>
  @import "./rosterDetail.less";
</style>
<template>
<div class="rosterDetail">
    <table border="1">
      <tr >
        <th style="width:60px" class="pink"></th>
        <th style="width:30px" v-for="item in currentMonthDay" :key="item" :class="weekList.indexOf(item.toString())>=0?'yellow':'pink'">{{item}}</th>
      </tr>
      <tr v-for="(item,index) in rosterData" :key="index+'_1'">
        <td class="pink" style="font-weight:700">{{item.empName}}</td>
        <td v-for="(item3,ind) in item.rosterType" :key="ind" :class="weekList.indexOf((ind+1).toString())>=0?'yellow':'pink'">{{item3}}</td>
      </tr>
    </table>
  </div>
</template>


<script src="./rosterDetail.js"></script>
