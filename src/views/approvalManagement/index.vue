<template>
    <div class="setting-list">
        <a-row :gutter="48">
            <a-col :lg="8" :xl="6" :xxl="4" v-for="(item,index) in objectList" :key='index'>
                <div class="pre-block" @click="toSetting(item)">
                    <div class="left">
                        <icon-font :type="item.icon" />
                        <span class="font">{{item.name}}</span>
                    </div>
                    <a>审批配置</a>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
    import { Icon } from 'ant-design-vue'

    const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1976655_pmtz41pdboo.js'
    })
    export default{
        data(){
            return{
                objectList:[
                    {
                        name:'加班',
                        icon:'icon-jiaban'
                    }
                ]
            }
        },
        components:{
            IconFont
        },
        methods:{
            toSetting(){
                this.$router.push({name:'approvalSetting',title:'审批设置'})
            }
        }
    }
</script>
<style lang="less" scoped>
    .setting-list{
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