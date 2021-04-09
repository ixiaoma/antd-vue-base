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
        <div id="priceBarChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'priceBarChart',
    methods:{
        handleChange(){

        },
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('priceBarChart'))
            const option = {
                title: {
                    text: '价格带上架率排名',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                dataset: {
                    source: [
                        ['product',  '南京', '中华', '利群'],
                        ['10-20', 43.3, 85.8, 93.7],
                        ['20-30', 83.1, 73.4, 55.1],
                        ['30-40', 86.4, 65.2, 82.5]
                    ]
                },

                legend: {
                    top: '10%',
                    data: ['中华', '南京', '利群'],
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
