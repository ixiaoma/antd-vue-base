<template>
    <dv-border-box-12>
        <a-select class="chart-select" default-value="上架数量" style="width: 120px" @change="handleChange">
            <a-select-option value="上架数量">
                上架数量
            </a-select-option>
            <a-select-option value="上架率">
                上架率
            </a-select-option>
            <a-select-option value="门店占有率">
                门店占有率
            </a-select-option>
        </a-select>
        <div id="cigaretteRankChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'cigaretteRankChart',
    methods:{
        handleChange(){

        },
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('cigaretteRankChart'))
            const option = {
                title: {
                    text: '香烟上架排名',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                dataset: {
                    source: [
                        ['score', 'amount', 'product'],
                        [89.3, 58212, '泰山'],
                        [57.1, 78254, '贵烟'],
                        [74.4, 41032, '黄鹤楼'],
                        [50.1, 12755, '芙蓉王'],
                        [89.7, 20145, '中华'],
                        [68.1, 79146, '中南海'],
                        [19.6, 91852, '双喜'],
                        [10.6, 101852, '南京'],
                        [32.7, 20112, '利群']
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
