<template>
    <div class="end-line">
        <div class="left"></div>
        <div class="right"></div>
        <div class="stage-operation new-stage-operation">
            <a-popover>
                <template slot="content">
                    <p>添加审批步骤</p>
                    <p>创建分支</p>
                </template>
                <a-icon data-id="10" class="icon addBtn" type="plus-circle" />
            </a-popover>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import './index.less';
</style>