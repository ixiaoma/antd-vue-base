<template>
  <div class="dashboard">
    <a-row :gutter="20">
      <a-col :span="8" class="pre-chart-block">
        <map-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <funnel-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <brand-launch-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <cigarette-rank-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <price-share-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <store-eval-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <factory-otc-chart/>
      </a-col>
      <a-col :span="8" class="pre-chart-block">
        <brand-otc-chart/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const comFile = require.context('./components/', true, /\.vue$/)
let comObj = {}
comFile.keys().forEach(ele => {
    const fileName = comFile(ele).default.name;
    comObj[ fileName ] = comFile(ele).default
})
export default{
  components:comObj
}
</script>

<style lang="less" scoped>
  .dashboard{
    padding: 20px;
    width: 100%;
    height: 100%;
    background: url(~@/assets/dashboard-bj.jpg) no-repeat;
    background-size: 100% 100%;
    background-position: 50% 0;
    .pre-chart-block{
      height: 360px;
    }
  }
</style>
