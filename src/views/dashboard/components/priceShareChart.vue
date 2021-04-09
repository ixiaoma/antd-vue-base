<template>
    <dv-border-box-12>
        <div id="priceShareChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'priceShareChart',
    methods:{
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('priceShareChart'))
            const option = {
                title: {
                    text: '价格带占有率对比',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                legend: {
                    top: '8%',
                    data: ['双喜', '南京'],
                    textStyle: {
                        color: '#fff'
                    }
                },

                xAxis: {
                    type: 'category',
                    data: ['10', '20', '30', '40', '50'],
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },

                yAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                        // formatter: '{value} %'
                    }
                },

                series: [
                    {
                        name: '双喜',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true,
                            // position: 'right',
                            formatter:'{c}%'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: ['80','52','87','5','43']
                    },
                    {
                        name: '南京',
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true,
                            // position: 'right',
                            formatter:'{c}%'
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        data: ['20','48','13','95','57']
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
