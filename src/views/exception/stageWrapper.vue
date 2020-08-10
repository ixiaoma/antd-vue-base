<template>
    <div class="stage-wrapper">
        <div class="stage stage-branch">
            <div>
                <div class="branch-title">一般条件</div>
                <a-icon type="edit" class="icon icon-edit"/>
                <a-icon type="close-circle" class="icon deleteItem icon-delete5"/>
                <div>
                    <div class="branch-condition">类型：满足全部</div>
                    <p title="请假时长 ≥ 12天" class="desc">请假时长 ≥ 12天</p>
                    <p title="现合同主体 = 111" class="desc">现合同主体 = 111</p>
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