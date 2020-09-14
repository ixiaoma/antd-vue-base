<template>
    <div class="setting-list">
        <a-row :gutter="48">
            <a-col :lg="8" :xl="6" :xxl="4" v-for="(item,index) in objectList" :key='index'>
                <div class="pre-block" @click="toSetting(item)">
                    <div class="left">
                        <icon-font :type="item.icon" />
                        <span class="font">{{item.name}}</span>
                    </div>
                    <div>
                        <a-icon type="close" class="close" @click="e=>deleteField(e,index)"/>
                        <a-switch v-model="item.deploy" @click="(check,e)=>e.stopPropagation(check)" @change='changeFn(item)' checked-children="启用" un-checked-children="禁用"/>
                    </div>
                </div>
            </a-col>
            <a-col :lg="8" :xl="6" :xxl="4">
                <div class="add-block" @click="addFlow">
                    <a-icon type="plus" style="font-size:30px"/>
                </div>
            </a-col>
        </a-row>
        <a-modal v-model="visible" title="添加模版" :bodyStyle='{padding:0}' @ok="commit">
            <a-form :form="form">
                <a-form-item label="KEY" :label-col="{span:6}" :wrapper-col="{span:12}">
                    <a-input v-decorator="['defineKey',{rules: [{required: true, whitespace:true, message: '请填写Key' }]}]"/>
                </a-form-item>
                <a-form-item label="模版名称" :label-col="{span:6}" :wrapper-col="{span:12}">
                    <a-input v-decorator="['name',{rules: [{required: true, whitespace:true, message: '请填写模板名称' }]}]"/>
                </a-form-item>
                <a-form-item label="图标" :label-col="{span:6}" :wrapper-col="{span:12}">
                    <a-popover trigger="click" v-model="popVisible">
                        <template slot="content">
                            <div class="com-block">
                                <a-row :gutter='12'>
                                    <a-col span='8' v-for="(item,index) in iconList" :key='index'>
                                        <div class='pre-field' @click="selectIcon(item)">
                                            <icon-font :type="item" class="icon-style"/>
                                        </div>
                                    </a-col>
                                </a-row>
                            </div>
                        </template>
                        <div class='pre-field field-icon'>
                            <icon-font :type="icon" class="icon-style"/>
                        </div>
                    </a-popover>
                </a-form-item>
                <a-form-item label="模版说明" :label-col="{span:6}" :wrapper-col="{span:12}">
                    <a-textarea rows="4"  v-decorator="['description']"/>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script src='./index.js'></script>
<style lang="less" scoped>
    @import './index.less';
</style>