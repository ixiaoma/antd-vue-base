<template>
    <div class="add-node-btn-box">
        <div class="add-node-btn">
            <a-popover v-model="visible" placement="right" trigger="click">
                <div class="add-node-popover-body" slot="content">
                    <a class="add-node-popover-item approver" @click="addType(1)">
                        <div class="item-wrapper">
                            <a-icon type="user" class="icon-style"/>
                        </div>
                        <p>审批人</p>
                    </a>
                    <a class="add-node-popover-item notifier" @click="addType(2)">
                        <div class="item-wrapper">
                            <a-icon type="team" class="icon-style"/>
                        </div>
                        <p>抄送人</p>
                    </a>
                    <a class="add-node-popover-item condition" @click="addType(4)">
                        <div class="item-wrapper">
                            <a-icon type="cluster" class="icon-style"/>
                        </div>
                        <p>条件分支</p>
                    </a>
                </div>
                <button class="btn" type="button">
                    <a-icon type="plus" style="color:#fff"/>
                </button>
            </a-popover>
        </div>
    </div>
</template>
<script src='./addCode.js'></script>
<style scoped>、
.dingflow-design .add-node-btn-box {
    width: 240px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    position: relative
}

.dingflow-design .add-node-btn-box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: auto;
    width: 2px;
    height: 100%;
    background-color: #cacaca
}
.icon-style{
    font-size: 36px;
    margin-top: 20px;
}

</style>