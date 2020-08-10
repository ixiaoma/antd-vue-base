<template>
    <div class="stage-wrapper">
        <div class="stage">
            <div>
                <p class="passType">审批人</p>
                <a-icon type="edit" class="icon icon-edit"/>
                <a-icon type="close-circle" class="icon deleteItem icon-delete5"/>
                <i class="icon deleteItem icon-delete5"></i>
                <div class="approve-peo-new clearfix ellipsis approve-margin">
                    审批人：发起人所在部门负责人
                </div>
            </div>
        </div>
        <end-line/>
    </div>
</template>
<style lang="less" scoped>
    @import './index.less';
</style>
<script>
    import endLine from './endLine'
    export default {
        components:{
            endLine
        }
    }
</script>