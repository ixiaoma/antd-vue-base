<template>
    <dv-border-box-12>
        <div id="factoryOtcChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'factoryOtcChart',
    methods:{
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('factoryOtcChart'))
            const option = {
                title: {
                    text: '厂家上柜率',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                grid: {containLabel: true},
                
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                yAxis: {
                    type: 'category',
                    data: ['河北中烟', '河南中烟', '浙江中烟', '安徽中烟', '福建中烟', '云南中烟', '北京中烟'],
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                series: [{
                    data: [0.05, 0.1, 0.05, 0.05, 0.1, 0.1, 0.05],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }]
            }
            myCharts.setOption(option)
        }
    },
    mounted(){
        this.initEcharts()
    }
}
</script>
<style scoped lang='less'>
    @import './common.less';
</style>
