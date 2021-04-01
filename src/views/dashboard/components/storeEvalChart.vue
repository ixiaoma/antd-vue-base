<template>
    <dv-border-box-12>
        <div id="storeEvalChart" class="pre-charts"></div>
    </dv-border-box-12>
</template>
<script>
const echarts = require('echarts')
export default {
    name:'storeEvalChart',
    methods:{
        initEcharts(){
            const myCharts = echarts.init(document.getElementById('storeEvalChart'))
            const option = {
                title: {
                    text: '门店评价',
                    textStyle: {
                        color: '#fff'
                    }
                },
                
                radar: {
                    name: {
                        textStyle: {
                            color: '#fff',
                            // backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: '品牌上架率', max: 6500},
                        { name: '厂家上架率', max: 16000},
                        { name: 'sku上架率', max: 30000},
                        { name: '连通区域', max: 38000},
                        { name: '双喜数量', max: 52000},
                        { name: '核心陈列区域占有率', max: 25000}
                    ]
                },

                series: {
                    type: 'radar',
                    data: [
                        {
                            value: [4300, 10000, 28000, 35000, 50000, 19000],
                            name: '预算分配（Allocated Budget）'
                        }
                    ]
                }
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
