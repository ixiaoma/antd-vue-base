<template>
    <div class="setting-list">
        <a-row :gutter="48">
            <a-col :md="4" v-for="(item,index) in objectList" :key='index'>
                <div class="pre-block" @click="toSetting(item)">
                    <div class="left">
                        <a-icon type="setting" style="font-size:36px"/>
                        <span class="font">{{item.name}}</span>
                    </div>
                    <a>字段配置</a>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script src='./index.js'></script>
<style lang="less" scoped>
    .setting-list{
        background-color: #fff;
        padding: 20px;
        height: 100%;
        .pre-block{
            width: 260px;
            height: 100px;
            border: 1px solid #e9e8e8;
            display: flex;
            align-items: center;
            cursor: pointer;
            .left{
                width: 50%;
                text-align: center;
                .font {
                    display: block;
                    margin-top: 5px;
                }
            }
        }   
    }
</style>