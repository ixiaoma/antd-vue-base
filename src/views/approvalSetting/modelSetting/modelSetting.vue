<template>
    <a-card :bordered="false">
        <a-row :gutter='56'>
            <a-col span='12'>
                <div class="phone-con">
                    <div class="title">培训申请</div>
                    <draggable v-model="layoutList" class="draggable-con">
                        <div v-for="(item,index) in layoutList" :key='index'>
                            <div class="mutile-com pre-block" v-if="item.valueType=='TEXT_MULTI' || item.valueType=='ATTACHMENT' || item.valueType=='PICTURE'">
                                <div class="text-style">
                                    {{item.name}}
                                    <span class="must-down" v-if='item.mustDown'>*</span>
                                </div>
                                <div class="placeholder-style second-row">
                                    <span v-if="item.valueType=='TEXT_MULTI'">{{item.placeholder || '请输入'}}</span>
                                    <div class="file-box" v-else>
                                        <a-icon v-if="item.valueType=='ATTACHMENT'" type="paper-clip" style="font-size:30px"/>
                                        <a-icon v-if="item.valueType=='PICTURE'" type="file-image" style="font-size:30px"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row-com pre-block" v-else>
                                <span class="text-style">
                                    {{item.name}}
                                    <span class="must-down" v-if='item.mustDown'>*</span>
                                </span>
                                <span class="placeholder-style" v-if="item.valueType == 'RADIO' || item.valueType == 'CHECKBOX' || item.valueType == 'SELECT' || item.valueType == 'DATETIME'">
                                    <span>{{item.placeholder || '请选择'}}</span>
                                    <a-icon type="right" style="font-size:16px;margin-left:3px"/>
                                </span>
                                <span class="placeholder-style" v-else>
                                    <span>{{item.placeholder || '请输入'}}</span>
                                </span>
                            </div>
                        </div>
                    </draggable>
                    <a-popover trigger="click" v-model="visible">
                        <template slot="content">
                            <div class="com-block">
                                <a-row :gutter='12'>
                                    <a-col span='6' v-for="item in valueTypeList" :key='item.valueType'>
                                        <div class='pre-field' @click="addField(item)">
                                            <icon-font :type="item.icon" class="icon-style"/>
                                            <span>{{item.value}}</span>
                                        </div>
                                    </a-col>
                                </a-row>
                            </div>
                        </template>
                        <a-button block icon="plus">添加控件</a-button>
                    </a-popover>
                </div>
            </a-col>
            <a-col span='12' v-show="showSetting">
                <h3>控件设置</h3>
                <a-form>
                    <a-form-item label="控件名称" :label-col="{span:6}" :wrapper-col="{span:12}" required :validateStatus='validateStatus'>
                        <a-input v-model.trim='currentItem.name'/>
                    </a-form-item>
                    <a-form-item label="控件说明" :label-col="{span:6}" :wrapper-col="{span:12}">
                        <a-textarea v-model.trim="currentItem.placeholder" rows="4" :placeholder="currentItem.valueType == 'RADIO' || currentItem.valueType == 'CHECKBOX' || currentItem.valueType == 'SELECT' || currentItem.valueType == 'DATETIME' ? '请选择' : '请输入'"/>
                    </a-form-item>
                    <a-form-item label="其他" :label-col="{span:6}" :wrapper-col="{span:12}">
                        <a-checkbox v-model='currentItem.readonly'>必填</a-checkbox>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
        <a-row type='flex' justify='center' style="margin-top:10px">
            <a-button type='primary' @click="commit">下一步</a-button>
        </a-row>
    </a-card>
</template>
<script>
import { valueTypeList } from '@/utils/commonCode'
import { saveForm, getFormDetail } from '@/api/approval'
export default {
    data(){
        return {
            valueTypeList,
            visible:false,
            showSetting:false,
            validateStatus:'success',
            currentItem:{},
            layoutList:[]
        }
    },
    methods:{
        addField(item){
            this.currentItem = {valueType:item.label,name:item.value}
            this.layoutList.push(this.currentItem)
            this.showSetting = true
            this.visible = false
        },
        async commit(){
            for(let i = 0 ; i < this.layoutList.length ; i++){
                if(!this.layoutList[i].name){
                    this.$message.warning('控件名称不能为空')
                    this.validateStatus = 'error'
                    return;
                }
            }
            const parameter = {
                id:1,
                params:this.layoutList
            }
            const res = await saveForm(parameter)
        }
    }
}
</script>
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
            background-color: #1890FF;
        }
        .draggable-con{
            flex: 1;
            background-color: #f8f8f8;
            padding-top: 10px;
            .text-style{
                color: #000;
            }
            .placeholder-style{
                color: #bfbfbf;
            }
            .must-down{
                color: red;
            }
            .row-com{
                background-color: #fff;
                margin-bottom: 10px;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
            }
            .mutile-com{
                background-color: #fff;
                margin-bottom: 10px;
                height: 100px;
                padding: 10px 10px 0;
                .second-row{
                    margin-top: 10px;
                }
                .file-box{
                    width:50px;
                    height: 50px;
                    border: 1px solid #eae9e9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .pre-block:hover,.pre-block:active{
            border: 1px dashed #1890FF;
            cursor: pointer;
        }
        .pre-block:visited{
            border: 1px solid #1890FF;
        }
    }
    .com-block{
        width: 380px;
    }
    .pre-field{
        height: 80px;
        margin-top: 12px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid #e8e8e8;
        .icon-style{
            font-size: 26px;
            margin-bottom: 10px;
        }
    }
</style>