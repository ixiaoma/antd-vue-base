<template>
    <div class="stage-wrapper parallel-stage">
        <div class="branches">
            <div class="branch" v-for="(child,childIndex) in parentItem" :key='childIndex'>
                <div class="start-line">
                    <div class="left"></div>
                    <div class="right"></div>
                </div>
                <div class="branch-stages">
                    <approval-tag v-if='child.type=="approval"'/>
                    <stage-wrapper v-else/>
                    <div v-if="child.children && child.children.length">
                        <branch-wrapper :parentItem='child.children'/>
                    </div>
                </div>
                <div class="end-line">
                    <div class="left"></div>
                    <div class="right"></div>
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
    import stageWrapper from './stageWrapper'
    import approvalTag from './approvalTag'
    export default {
        name:'branchWrapper',
        components:{
            stageWrapper,
            approvalTag,
            endLine
        },
        props:{
            parentItem:{
                type:Array,
                default:[]
            }
        }
    }
</script>