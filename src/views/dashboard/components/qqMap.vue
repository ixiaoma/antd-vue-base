<template>
    <div class="map-com">
        <div id="map-wrap"></div>
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
            const center = new TMap.LatLng(39.91, 116.38)
            //定义map变量，调用 TMap.Map() 构造函数创建地图
            this.map = new TMap.Map(document.getElementById('map-wrap'), {
                center: center,//设置地图中心点坐标
                zoom:1,   //设置地图缩放级别
                mapTypeId:"roadmap"
            });
            this.map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
            this.map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ROTATION);
        },
        setOptionData(geometries){
            if (this.markerCluster) {
                this.markerCluster.setMap(null);
                this.markerCluster = null;
            }
            this.markerCluster = new TMap.MarkerCluster({
                id: 'cluster',
                map: this.map,
                enableDefaultStyle: true, // 启用默认样式
                minimumClusterSize: 1, // 形成聚合簇的最小个数
                geometries,
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
    #map-wrap{
        /deep/.logo-text,.rotate-circle{
            display: none;
        }
    }
    #map-wrap div div{
            display: none!important;;
        }
</style>
