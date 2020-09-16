<style lang="less" scoped>
  @import "./rosterDetail.less";
</style>
<template>
<div class="rosterDetail"> 
    <div>
      <h1>部门：<span style="font-weight:400">{{$route.query.deptName}}</span></h1> <h1>月份：<span style="font-weight:400">{{$route.query.rosterMonth}}</span></h1>
      <span class="pink remark">工作日</span>
      <span class="yellow remark">周末</span>
    </div>
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
