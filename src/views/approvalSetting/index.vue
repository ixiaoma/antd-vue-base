<template>
    <div class="approval-setting">
        <!-- v-model="activeKey" -->
        <a-tabs default-active-key="1" size='small' class="tabs-style">
            <a-tab-pane key="1" tab='模版设置'>
                <model-setting/>
            </a-tab-pane>
            <a-tab-pane key="2" tab='审批设置'>
                <a-button type="primary" @click="toSetting">配置</a-button>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
    import { Icon } from 'ant-design-vue'
    import modelSetting from './modelSetting/modelSetting.vue'

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
            IconFont,
            modelSetting
        },
        methods:{
            toSetting(){
                this.$router.push({name:'approvalFlow',title:'审批流程设置'})
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