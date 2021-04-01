<template>
  <div class="qqmap-wrap">
    <div class="top-tab">
      <div class="extra-content">
        <div class="stat-item">
          <h1 style="margin-top: 16px;font-weight:bold">全部</h1>
        </div>
      </div>
      <div class="extra-content">
        <div class="stat-item">
          <a-statistic title="审批中" :value="56" />
        </div>
        <div class="stat-item">
          <a-statistic title="员工" :value="8" />
        </div>
        <div class="stat-item">
          <a-statistic title="考勤" :value="2223" />
        </div>
      </div>
      <div class="extra-content">
        <div class="stat-item">
          <a-statistic title="本月通过" :value="56" />
        </div>
        <div class="stat-item">
          <a-statistic title="本月驳回" :value="8" />
        </div>
      </div>
      <div class="extra-content">
        <div class="stat-item">
          <h1 style="margin-top: 16px;font-weight:bold">提醒-合同</h1>
        </div>
        <div class="stat-item">
          <h1 style="margin-top: 16px;font-weight:bold">提醒-试用期</h1>
        </div>
    </div>
    </div>
    <div class="map-continer">
      <div id="map-wrap"></div>
    </div>
  </div>
</template>

<script>
  export default {
      name:'qqMap',
      data(){
          return {
              map:null,
              markerCluster:null
          }
      },
      methods:{
          initMap() {
              //定义地图中心点坐标
              const center = new TMap.LatLng(36, 113.38)
              this.setOptionData()
              //定义map变量，调用 TMap.Map() 构造函数创建地图
              this.map = new TMap.Map(document.getElementById('map-wrap'), {
                  center: center,//设置地图中心点坐标
                  zoom:4.3,   //设置地图缩放级别
                  mapTypeId:"roadmap"
              });
              this.map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
              this.map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION);
          },
          setOptionData(){
              if (this.markerCluster) {
                  this.markerCluster.setMap(null);
                  this.markerCluster = null;
              }
              this.markerCluster = new TMap.MarkerCluster({
                  id: 'cluster',
                  map: this.map,
                  enableDefaultStyle: true, // 启用默认样式
                  minimumClusterSize: 1, // 形成聚合簇的最小个数
                  geometries:[{ // 点数组
                      position: new TMap.LatLng(39.953416, 116.480945)
                    },
                    {
                      position: new TMap.LatLng(39.984104, 116.407503)
                    },
                    {
                      position: new TMap.LatLng(39.908802, 116.497502)
                    },
                    {
                      position: new TMap.LatLng(40.040417, 116.373514)
                    },
                    {
                      position: new TMap.LatLng(39.953416, 116.380945)
                    },
                    {
                      position: new TMap.LatLng(39.984104, 116.307503)
                    },
                    {
                      position: new TMap.LatLng(39.908802, 116.397502)
                    },
                    {
                      position: new TMap.LatLng(40.040417, 116.273514)
                    },
                  ],
                  scale:2,
                  zoomOnClick: true, // 点击簇时放大至簇内点分离
                  gridSize: 60, // 聚合算法的可聚合距离
                  averageCenter: false, // 每个聚和簇的中心是否应该是聚类中所有标记的平均值
                  maxZoom: 8 // 采用聚合策略的最大缩放级别
              });
              this.markerCluster.on("click", (evt)=> {
                  const list = evt.cluster.geometries.map(ele=>ele.id)
                  this.$emit('filterEvent',list)
              })
          }
      },
      mounted(){
          this.initMap()
      }
  }
</script>

<style lang="less" scoped>
  @import "./Workplace.less";
</style>
