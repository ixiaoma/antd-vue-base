
<script>
export default{
    render(){
        const endLine = (
            <div class="end-line">
                <div class="left"></div>
                <div class="right"></div>
                <div class="stage-operation new-stage-operation">
                    <a-popover>
                        <template slot="content">
                            <p>添加审批步骤</p>
                            <p>创建分支</p>
                        </template>
                        <a-icon data-id="10" class="icon addBtn icon-add4" type="plus-circle" />
                    </a-popover>
                </div>
            </div>
        )
        const stageWrapper = (
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
                {endLine}
            </div>
        )
        const approvalTag = (
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
                {endLine}
            </div>
        )
        return(
            <div>
                {approvalTag}
                {stageWrapper}
            </div>
        )
    }
}
</script>
<style lang="less">
    @import './index.less';
</style>