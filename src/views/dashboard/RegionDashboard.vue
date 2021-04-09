<template>
  <div class="region-dashboard">
    <a-row class="filter-row">
      <span class="chart-select">
        省份 : 
        <a-select  default-value="广东省" style="width: 120px" @change="handleChange">
              <a-select-option value="广东省">
                  广东省
              </a-select-option>
          </a-select>
        </span>
        <span class="chart-select">
          城市 : 
          <a-select default-value="汕头市" style="width: 120px" @change="handleChange">
              <a-select-option value="汕头市">
                  汕头市
              </a-select-option>
          </a-select>
        </span>
        <span class="chart-select">
          区县 : 
          <a-select default-value="龙湖区" style="width: 120px" @change="handleChange">
              <a-select-option value="龙湖区">
                  龙湖区
              </a-select-option>
          </a-select>
        </span>
        <span class="chart-select">
          门店 : 
          <a-select default-value="罗森" style="width: 120px" @change="handleChange">
              <a-select-option value="罗森">
                  罗森
              </a-select-option>
          </a-select>
        </span>
    </a-row>
    <a-row :gutter="20" class="chart-con">
      <a-col :span="24" class="pre-chart-block">
        <region-num-list/>
      </a-col>
      <a-col :span="12" class="pre-chart-block">
        <store-eval-chart/>
      </a-col>
      <a-col :span="12" class="pre-chart-block">
        <factory-otc-chart/>
      </a-col>
      <!-- <a-col :span="12" class="pre-chart-block">
        <brand-otc-chart/>
      </a-col> -->
    </a-row>
  </div>
</template>
<script>
import regionNumList from './components/regionNumList.vue';
const comFile = require.context('./components/', true, /\.vue$/)
let comObj = {}
comFile.keys().forEach(ele => {
    const fileName = comFile(ele).default.name;
    comObj[ fileName ] = comFile(ele).default
})
export default {
  components: { regionNumList },
  name:'regionDashboard',
  components:comObj,
  methods:{
    handleChange(){

    }
  }
}
</script>
<style scoped lang='less'>
    .region-dashboard{
      padding: 20px;
      width: 100%;
      height: calc(100vh - 64px);
      background: url(~@/assets/dashboard-bj.jpg) no-repeat;
      background-size: 100% 100%;
      background-position: 50% 0;
      .filter-row{
        margin-bottom: 10px;
        .chart-select{
          margin: 0 20px;
          color: #fff;
        }
      }
      .pre-chart-block{
        height: 360px;
      }
      /deep/.ant-select-selection {
          background: initial;
          color: #fff;
          border-radius: 30px;
      }
      /deep/.ant-select-arrow{
          color: #fff;
      }
      /deep/.rows{
        height: 290px!important;
        .row-item{
          height: 50px!important;
          line-height: 50px!important;
        }
      }
    }
</style>