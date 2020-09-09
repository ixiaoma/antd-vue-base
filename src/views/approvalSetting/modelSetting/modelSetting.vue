<template>
    <a-card :bordered="false">
        <a-row :gutter='56'>
            <a-col span='12'>
                <div class="phone-con">
                    <div class="title">培训申请</div>
                    <div class="content">

                    </div>
                    <!-- <draggable v-model="item.layoutList" :options="{group:'filed1'}" >
                    
                    </draggable> -->
                    <a-popover title="Title">
                        <template slot="content">
                            <div class="com-block">

                            </div>
                        </template>
                        <a-button block icon="plus">添加控件</a-button>
                    </a-popover>
                </div>
            </a-col>
            <a-col span='12'>

            </a-col>
        </a-row>
    </a-card>
</template>
<style lang="less" scoped>
    .phone-con{
        width: 375px;
        border: 1px solid #e8e8e8;
        height: 600px;
        display: flex;
        flex-direction: column;
        float: right;
        .title{
            height: 32px;
            line-height: 32px;
            color: #fff;
            text-align: center;
            // font-size: 16px;
            background-color: #1890FF;
        }
        .content{
            flex: 1;
        }
        .com-block{
            width: 360px;
        }
    }
</style>