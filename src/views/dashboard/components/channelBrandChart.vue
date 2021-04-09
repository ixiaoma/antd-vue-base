<template>
    <dv-border-box-12>
        <div id="channelBrandChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'channelBrandChart',
    props:{
        color:{
            type:String,
            default:'#fff'
        }
    },
    methods:{
        handleChange(){

        },   
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('channelBrandChart'))
            const option = {
                title: {
                    text: '渠道品牌上架率排名',
                    textStyle: {
                        color: this.color
                    }
                },
                
                dataset: {
                    source: [
                        ['product',  '南京', '利群', '双喜'],
                        ['超市', 43.3, 85.8, 93.7],
                        ['便利店', 83.1, 73.4, 55.1],
                        ['烟草专卖店', 86.4, 65.2, 82.5]
                    ]
                },

                legend: {
                    top: '10%',
                    data: ['利群', '南京', '双喜'],
                    textStyle: {
                        color: this.color
                    }
                },

                grid: {containLabel: true},

                xAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: this.color
                        }
                    }
                },

                yAxis: {
                    axisLabel: {
                        textStyle: {
                            color: this.color
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
