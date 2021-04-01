<template>
    <dv-border-box-12>
        <div id="brandOtcChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'brandOtcChart',
    methods:{
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('brandOtcChart'))
            const option = {
                title: {
                    text: '品牌上柜率',
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
                    data: ['好猫', '黄山', '黄鹤楼', '娇子', '中南海', '泰山', '南京'],
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
