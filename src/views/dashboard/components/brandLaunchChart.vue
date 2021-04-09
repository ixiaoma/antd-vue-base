<template>
    <dv-border-box-12>
        <!-- <a-button class="chart-select chart-btn">选择品牌</a-button> -->
        <div id="brandLaunchChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'brandLaunchChart',
    props:{
        color:{
            type:String,
            default:'#fff'
        }
    },
    methods:{
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('brandLaunchChart'))
            const option = {
                title: {
                    text: '上架趋势',
                    textStyle: {
                        color: this.color
                    }
                },

                tooltip: {
                    trigger: 'axis'
                },

                legend: {
                    top: '8%',
                    data: ['南京', '利群', '双喜', '芙蓉王', '中南海'],
                    textStyle: {
                        color: this.color
                    }
                },

                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                    textStyle: {
                        color: this.color
                    }
                },

                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLabel: {
                        textStyle: {
                            color: this.color
                        }
                    }
                },

                yAxis: {
                    type: 'value',
                    axisLabel: {
                        textStyle: {
                            color: this.color
                        }
                    }
                },

                series: [
                    {
                        name: '南京',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '利群',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '双喜',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '芙蓉王',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '中南海',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
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
