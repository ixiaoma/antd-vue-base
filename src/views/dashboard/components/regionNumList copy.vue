<template>
    <dv-border-box-12>
        <dv-scroll-board class="pre-charts" :config="config"/>
    </dv-border-box-12>
</template>
<script>
export default {
    name:'regionNumList',
    data(){
        return{
            config:{
                header: ['品牌', '采集门店数', '上架门店数', '区域覆盖率'],
                data: [
                    ['南京', '1000', '800','80%'],
                    ['利群', '5800', '3900','67%'],
                    ['双喜', '2000', '1000','50%'],
                    ['芙蓉王', '1000', '800','80%'],
                    ['中南海', '10000', '689','68.9%'],
                    ['泰山', '1000', '1000','100%'],
                    ['贵烟', '1000', '600','60%'],
                    ['中华', '1000', '700','70%']
                ],
                index: true,
                columnWidth: [50],
                align: ['center']
            }
        }
    }
}
</script>
<style scoped lang='less'>
    @import './common.less';
</style>
