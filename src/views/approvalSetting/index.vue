<template>
    <div class="approval-setting">
        <a-tabs v-model="activeKey" size='small' class="tabs-style">
            <a-tab-pane key="1" tab='模版设置'>
                <model-setting @nextStep="nextStep"/>
            </a-tab-pane>
            <a-tab-pane key="2" tab='审批设置'>
                <a-button type="primary" @click="toSetting">配置</a-button>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
    import modelSetting from './modelSetting/modelSetting.vue'
    export default{
        data(){
            return{
                activeKey:'1',
                objectList:[]
            }
        },
        components:{
            modelSetting
        },
        methods:{
            toSetting(){
                const { id } = this.$route.query
                this.$router.push({name:'approvalFlow',title:'审批流程设置',query:{id}})
            },
            nextStep(){
                this.activeKey = '2'
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