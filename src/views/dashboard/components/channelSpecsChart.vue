<template>
    <dv-border-box-12>
        <a-select class="chart-select" default-value="中华" style="width: 120px" @change="handleChange">
            <a-select-option value="中华">
                中华
            </a-select-option>
            <a-select-option value="南京">
                南京
            </a-select-option>
            <a-select-option value="双喜">
                双喜
            </a-select-option>
        </a-select>
        <div id="channelSpecsChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'channelSpecsChart',
    methods:{
        handleChange(){

        },
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('channelSpecsChart'))
            const option = {
                title: {
                    text: '渠道规格上架率排名',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                dataset: {
                    source: [
                        ['product',  '中华全开式13mg', '中华（软13mg）', '中华（硬13mg）'],
                        ['超市', 43.3, 85.8, 93.7],
                        ['便利店', 83.1, 73.4, 55.1],
                        ['烟草专卖店', 86.4, 65.2, 82.5]
                    ]
                },

                legend: {
                    top: '10%',
                    data: ['中华（软13mg）', '中华全开式13mg', '中华（硬13mg）'],
                    textStyle: {
                        color: '#fff'
                    }
                },

                grid: {containLabel: true},

                xAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                yAxis: {
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'}
                ]
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
