<template>
    <div class="setting-list">
        <a-row :gutter="48">
            <a-col :lg="8" :xl="6" :xxl="4" v-for="(item,index) in objectList" :key='index'>
                <div class="pre-block" @click="toSetting(item)">
                    <div class="left">
                        <icon-font :type="item.icon" />
                        <span class="font">{{item.name}}</span>
                    </div>
                    <a>模版配置</a>
                </div>
            </a-col>
            <a-col :lg="8" :xl="6" :xxl="4">
                <div class="add-block" @click="addFlow">
                    <a-icon type="plus" style="font-size:30px"/>
                </div>
            </a-col>
        </a-row>
        <a-modal v-model="visible" title="添加模版" :bodyStyle='{padding:0}' @ok="commit">
            <a-form>
                <a-form-item label="KEY" :label-col="{span:6}" :wrapper-col="{span:12}" required :validateStatus='validateStatus'>
                    <a-input v-model.trim='saveItem.key'/>
                </a-form-item>
                <a-form-item label="模版名称" :label-col="{span:6}" :wrapper-col="{span:12}" required :validateStatus='validateStatus'>
                    <a-input v-model.trim='saveItem.name'/>
                </a-form-item>
                <a-form-item label="模版说明" :label-col="{span:6}" :wrapper-col="{span:12}">
                    <a-textarea v-model.trim="saveItem.desc" rows="4"/>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script>
    import { getFlowList,saveFlow } from '@/api/approval'
    export default{
        data(){
            return{
                visible:false,
                validateStatus:'success',
                saveItem:{
                    name:'',
                    desc:''
                },
                objectList:[
                    {
                        name:'加班',
                        icon:'icon-jiaban'
                    }
                ]
            }
        },
        methods:{
            toSetting(){
                this.$router.push({name:'approvalSetting',title:'审批设置'})
            },
            addFlow(){
                this.visible = true
            },
            async getInitList(){
                const res = await getFlowList()
            },
            async commit(){
                const res = await saveFlow({params:this.saveItem})
            }
        },
        created(){
            this.getInitList()
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
        .add-block{
            height: 100px;
            border: 1px solid #e9e8e8;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }  
    }
</style>