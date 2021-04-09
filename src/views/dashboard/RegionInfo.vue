<template>
  <div class="region-dashboard">
    <a-row :gutter='30' class="static-con">
      <a-col span='8'>
        <a-card>
          <a-statistic
            title="采集门店数"
            :value="3000"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
          </a-statistic>
        </a-card>
      </a-col>
      <a-col span='8'>
        <a-card>
          <a-statistic
            title="上架门店数"
            :value="1500"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
          </a-statistic>
        </a-card>
      </a-col>
      <a-col span='8'>
        <a-card>
          <a-statistic
            title="区域覆盖率"
            :value="50"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="20" class="chart-con">
      <a-col :span="24" class="pre-chart-block">
        <brand-launch-chart color='#000'/>
      </a-col>
      <a-col :md='24' :xl='12' :xxl='8' class="pre-chart-block">
        <cigarette-rank-chart color='#000'/>
      </a-col>
      <a-col :md='24' :xl='12' :xxl='8' class="pre-chart-block">
        <channel-brand-chart color='#000'/>
      </a-col>
      <a-col :md='24' :xl='12' :xxl='8' class="pre-chart-block">
        <shelves-chart color='#000'/>
      </a-col>
      <!-- <a-col :md='24' :xl='12' :xxl='8' class="pre-chart-block">
        <funnel-chart color='#000'/>
      </a-col>
      <a-col :md='24' :xl='12' :xxl='8' class="pre-chart-block">
        <price-share-chart color='#000'/>
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
  name:'regionInfo',
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
      height: 100%;
      .static-con{
        margin-bottom: 20px;
        .ant-card{
          text-align: center;
          border-radius: 30px;
          box-shadow: 6px 6px 3px 3px #f0f2f5;
        }
        /deep/.ant-card-bordered{
          border: none;
        }
      }
      .filter-row{
        margin-bottom: 10px;
      }
      .pre-chart-block{
        height: 360px;
      }
      .chart-select{
        margin: 0 20px;
        color: #fff;
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