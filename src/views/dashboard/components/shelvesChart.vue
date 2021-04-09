<template>
    <dv-border-box-12>
        <div id="shelvesChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'shelvesChart',
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
            const myCharts = echarts.init(document.getElementById('shelvesChart'))
            const option = {
                title: {
                    text: '上架趋势',
                    textStyle: {
                        color: this.color
                    }
                },
                
                xAxis: {
                    type: 'category',
                    data: ['2021-01', '2021-02', '2021-03', '2021-04', '2021-05']
                },

                yAxis: {
                    type: 'value'
                },

                series: [{
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
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
