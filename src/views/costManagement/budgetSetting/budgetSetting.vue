<template>
    <div class="budgetSetting">
        <a-row :gutter="48">
            <a-col :lg="8" :xl="6" :xxl="4">
                <div class="pre-block">
                    <div class="left">
                        <a-icon type="pay-circle" />
                        <span class="font">预算金额</span>
                    </div>
                    <div class="right">
                        <div @click="showTable">查看</div>
                        <div @click="setBudgetAmount">设置</div>
                    </div>
                </div>
            </a-col>
            <a-col :lg="8" :xl="6" :xxl="4">
                <div class="pre-block">
                    <div class="left">
                        <a-icon type="pie-chart" />
                        <span class="font">预算维度</span>
                    </div>
                    <div class="right">
                        <div @click="budgetSee">查看</div>
                        <div @click="budgetEdit">设置</div>
                    </div> 
                </div>
            </a-col>
        </a-row>
        <budgetGetAmount ref="budgetGetAmount"></budgetGetAmount>
    </div>
</template>
<script src='./budgetSetting.js'></script>
<style lang="less" scoped>
    .budgetSetting{
        background-color: #fff;
        padding: 20px;
        height: 100%;
        .anticon {
            font-size: 36px;
        }
        .pre-block{
            width: 100%;
            height: 100px;
            border: 1px solid #e9e8e8;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            cursor: pointer;
            .left{
                flex:1;
                text-align: center;
                .font {
                    display: block;
                    margin-top: 5px;
                }
            }
            .right{
                flex:1;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 5px;
                    color: #1890ff
                }
            }
        }   
    }
</style>