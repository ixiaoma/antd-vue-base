<template>
    <div class="map-dashboard">
        <!-- <a class="chart-select" @click="returnTop">返回上一级</a> -->
        <div id="mapWarp"></div>
    </div>
</template>
<script>
const echarts = require('echarts')

import '@/assets/map/js/china.js'
const province = require.context('@/assets/map/js/province/', true, /\.js$/)
province.keys().map((ele) => {
  let file = ele.replace(/.\//g, '')
  require('@/assets/map/js/province/' + file)
})
export default{
    name:'mapWarp',
    data(){
        return{
            myChart:null,
            option:null,
            mapData:[
                {name:'江苏', value: 3000},
                {name:'山东', value: 12000},
                {name:'重庆', value: 999},
                {name:'宁夏', value: 7600},
                {name:'江苏', value: 540},
                {name:'海南', value: 19999},
            ]
        }
    },
    methods:{
        returnTop(){
            this.option.geo.map = 'china'
            this.myChart.clear()
            this.myChart.setOption(this.option)
        },
        initEcharts(){
            this.myChart = echarts.init(document.getElementById('mapWarp'))
            const data = [
                {name:'江苏', value: 3000},
                {name:'山东', value: 12000},
                {name:'重庆', value: 999},
                {name:'宁夏', value: 7600},
                {name:'江苏', value: 540},
                {name:'海南', value: 19999},
            ];

            this.option = {
                title: {
                    text: '全国上柜门店数量',
                    textStyle: {
                        color: '#fff'
                    }
                },

                visualMap: {
                    itemWidth: 4,
                    min: 0,
                    max: 20000,
                    hoverLink: false,
                    showLabel: true,
                    textStyle: {
                        color: '#fff'
                    },
                    pieces: [{
                        gte: 20000,
                        label: '>= 20000',
                        color: '#FF7C32'
                    }, {
                        gte: 12000,
                        lte: 16000,
                        label: '12000 - 16000',
                        color: '#FDCC1A'
                    }, {
                        gte: 8000,
                        lte: 12000,
                        label: '8000 - 12000',
                        color: '#4174FE'
                    }, {
                        gte: 4000,
                        lte: 8000,
                        label: '4000 - 8000',
                        color: '#5AD7D8'
                    },  {
                        gte: 0,
                        lte: 4000,
                        label: '0 - 4000',
                        color: '#92CC75'
                    }]
                },
                geo: {
                    map: 'china',
                    zoom: 1,
                    roam: false, // 鼠标滑动放大缩小
                    label: {
                        normal: {
                            show: true,
                            color: '#fff'
                        },
                        emphasis: {
                            show: true,
                            color: '#fff'
                        }
                    },
                    itemStyle: {
                        areaColor: '#031332',
                        borderWidth: '.5',
                        borderColor: '#d9d9d9'
                    },
                    emphasis: {
                        itemStyle: {
                            borderWidth: '1',
                            areaColor: '#92CC75',
                            borderColor: '#333',
                            color: '#fff'
                        }
                    }
                },
                series: [{
                    name: '全国上柜门店数量',
                    type: 'map',
                    geoIndex: 0,
                    data
                }]
                // geo: {
                //     show: true,
                //     map: 'china',
                    // label: {
                    //     normal: {
                    //         show: true
                    //     },
                    //     emphasis: {
                    //         show: true
                    //     }
                    // },
                //     roam: true,
                //     itemStyle: {
                //         normal: {
                //             areaColor: '#ccc',
                //             borderColor: '#3B5077'
                //         },
                //         emphasis: {
                //             areaColor: '#fbf244'
                //         }
                //     },
                //     zoom: 1.2
                // },
                // // dataZoom: [{
                // //     type: 'inside',
                // //     start: 0,
                // //     end: 10
                // // }, {
                // //     start: 0,
                // //     end: 10,
                // //     handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                // //     handleSize: '80%',
                // //     handleStyle: {
                // //         color: '#fff',
                // //         shadowBlur: 3,
                // //         shadowColor: 'rgba(0, 0, 0, 0.6)',
                // //         shadowOffsetX: 2,
                // //         shadowOffsetY: 2
                // //     }
                // // }],
                // series : [
                //     {
                //         name: 'pm2.5',
                //         type: 'scatter',
                //         coordinateSystem: 'geo',
                //         data: data,
                //         symbolSize: function (val) {
                //             return val[2] / 2000;
                //         },
                //         label: {
                //             normal: {
                //                 formatter: '{b}',
                //                 position: 'right',
                //                 show: false
                //             },
                //             emphasis: {
                //                 show: true
                //             }
                //         },
                //         itemStyle: {
                //             normal: {
                //                 color: '#ddb926'
                //             }
                //         }
                //     },
                //     {
                //         name: '点',
                //         type: 'scatter',
                //         coordinateSystem: 'geo',
                //         symbol: 'pin',
                //         symbolSize: 40,
                //         label: {
                //             normal: {
                //                 formatter: '{@[2]}',
                //                 show: true,
                //                 textStyle: {
                //                     color: '#fff',
                //                     fontSize: 9
                //                 }
                //             }
                //         },
                //         itemStyle: {
                //             normal: {
                //                 color: '#2090f7' // 标志颜色
                //             }
                //         },
                //         zlevel: 6,
                //         data: data
                //     }
                // ]
            }
            this.myChart.setOption(this.option)
            
            this.myChart.on('click', (params)=> {
                if(this.option.geo.map == 'china'){
                    const geoMap = params.name
                    this.option.geo.map = geoMap
                    this.option.series[0].data = [
                      {name:'江门市',value:'3000'},
                      {name:'东莞市',value:'30000'},
                      {name:'汕头市',value:'9000'},
                      {name:'梅州市',value:'900'},
                    ]
                    this.myChart.clear()
                    this.myChart.setOption(this.option)
                }
            });
            this.myChart.on('dblclick', function(params) {
                console.log(params)
                // clearTimeout(timeFn);
                // //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
                // timeFn = setTimeout(function(){
                //     var name = params.batch[0].name;
                //     var mapCode = cityMap[name];
                //     if (!mapCode) {
                //         alert('无此区域地图显示');
                //         return;
                //     }
                //     loadMap(mapCode, name); 
                //     //将上一级地图信息压入mapStack
                //     mapStack.push({
                //         mapCode: curMap.mapCode,
                //         mapName: curMap.mapName
                //     }); 
                // }, 250);   
            });
        },
        pointClick(data){
            console.log(data)
        }
    },
    mounted(){
        // this.$nextTick(()=>{
        //     this.initEcharts()
        // })
        this.initEcharts()
    }
}
</script>

<style lang='less'>
    .map-dashboard{
        width: 100%;
        height: 100%;
        background: url(~@/assets/dashboard-bj.jpg) no-repeat;
        background-size: 100% 100%;
        background-position: 50% 0;
        #mapWarp{
            width: 100%;
            height: calc(100vh - 64px);
        }
    }
</style>