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
        <div id="specsRankChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'specsRankChart',
    methods:{
        handleChange(){

        },
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('specsRankChart'))
            const option = {
                title: {
                    text: '规格上架率排名',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, '中华全开式13mg'],
                        [57.1, 78254, '中华（软13mg）'],
                        [74.4, 41032, '中华（硬13mg）'],
                        [50.1, 12755, '中华抽屉式5支13mg'],
                        [89.7, 20145, '中华5000 13mg'],
                        [68.1, 79146, '中华硬盒12支装 10mg'],
                        [19.6, 91852, '中华硬盒5支装 10mg'],
                        [10.6, 101852, '中华(专供出口) 13mg']
                    ]
                },

                grid: {containLabel: true},

                xAxis: {
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                yAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                visualMap: {
                    orient: 'horizontal',
                    left: 'center',
                    min: 10,
                    max: 100,
                    text: ['High Score', 'Low Score'],
                    textStyle: {
                        color: '#fff'
                    },
                    dimension: 0,
                    inRange: {
                        color: ['#65B581', '#FFCE34', '#FD665F']
                    }
                },

                series: [
                    {
                        type: 'bar',
                        encode: {
                            x: 'amount',
                            y: 'product'
                        }
                    }
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
