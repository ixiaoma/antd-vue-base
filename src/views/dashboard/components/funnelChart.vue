<template>
    <dv-border-box-12>
        <a-select class="chart-select" default-value="双喜" style="width: 120px" @change="handleChange">
            <a-select-option value="双喜">
                双喜
            </a-select-option>
            <a-select-option value="lucy">
                Lucy
            </a-select-option>
            <a-select-option value="disabled" disabled>
                Disabled
            </a-select-option>
            <a-select-option value="Yiminghe">
                yiminghe
            </a-select-option>
        </a-select>
        <div id="funnelCharts" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'funnelChart',
    methods:{
        handleChange(){

        },
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('funnelCharts'))
            const option = {
                title: {
                    text: '区域品牌占有态势',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                legend: {
                    top: '10%',
                    data: ['上架率超过10%', '上架率超过5%', '主题门店', '双喜上柜', '核心位置占有率超过50%'],
                    textStyle: {
                        color: '#fff'
                    }
                },

                series: [
                    {
                        name: '漏斗图',
                        type: 'funnel',
                        top: '30%',
                        left: '0',
                        right: '36%',
                        label: {
                            position: 'right'
                        },
                        data: [
                            {value: 60, name: '主题门店'},
                            {value: 30, name: '双喜上柜'},
                            {value: 100, name: '核心位置占有率超过50%'},
                            {value: 80, name: '上架率超过5%'},
                            {value: 10, name: '上架率超过10%'}
                        ]
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
