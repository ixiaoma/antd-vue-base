<template>
    <a-card :bordered="false">
        <a-row :gutter='56'>
            <a-col span='12'>
                <div class="phone-con">
                    <div class="title">培训申请</div>
                    <draggable v-model="layoutList" class="draggable-con">
                        <div v-for="(item,index) in layoutList" :key='index'>
                            <div class="mutile-com pre-block" :class="index == currentIndex ? 'current-border' : ''" @click="editField(item,index)" v-if="item.valueType=='TEXT_MULTI' || item.valueType=='ATTACHMENT' || item.valueType=='PICTURE'">
                                <div class="text-style">
                                    <a-icon type="close" class="close" @click="deleteField(index)"/>
                                    {{item.name}}
                                    <span class="must-down" v-if='item.mustDown'>*</span>
                                </div>
                                <div class="placeholder-style second-row">
                                    <span v-if="item.valueType=='TEXT_MULTI'">{{item.description || '请输入'}}</span>
                                    <div class="file-box" v-else>
                                        <a-icon v-if="item.valueType=='ATTACHMENT'" type="paper-clip" style="font-size:30px"/>
                                        <a-icon v-if="item.valueType=='PICTURE'" type="file-image" style="font-size:30px"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row-com pre-block" :class="index == currentIndex ? 'current-border' : ''" @click="editField(item,index)" v-else>
                                <span class="text-style">
                                    <a-icon type="close" class="close" @click="deleteField(index)"/>
                                    {{item.name}}
                                    <span class="must-down" v-if='item.mustDown'>*</span>
                                </span>
                                <span class="placeholder-style" v-if="item.valueType == 'RADIO' || item.valueType == 'CHECKBOX' || item.valueType == 'SELECT' || item.valueType == 'DATETIME'">
                                    <span>{{item.description || '请选择'}}</span>
                                    <a-icon type="right" style="font-size:16px;margin-left:3px"/>
                                </span>
                                <span class="placeholder-style" v-else>
                                    <span>{{item.description || '请输入'}}</span>
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
                    <a-form-item v-if="isSelectCode" label="关联码表值" :label-col="{span:6}" :wrapper-col="{span:12}" required :validateStatus='validateCategoryCode'>
                        <a-select
                            v-model="currentItem.categoryCode"
                        >
                            <a-select-option v-for="item in codeList3" :key="item.code" :value="item.code">
                            {{ item.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="控件说明" :label-col="{span:6}" :wrapper-col="{span:12}">
                        <a-textarea v-model.trim="currentItem.description" rows="4" :placeholder="currentItem.valueType == 'RADIO' || currentItem.valueType == 'CHECKBOX' || currentItem.valueType == 'SELECT' || currentItem.valueType == 'DATETIME' ? '请选择' : '请输入'"/>
                    </a-form-item>
                    <a-form-item label="其他" :label-col="{span:6}" :wrapper-col="{span:12}">
                        <a-checkbox v-model='currentItem.required'>必填</a-checkbox>
                    </a-form-item>
                    <a-form-item label="权限字段" :label-col="{span:6}" :wrapper-col="{span:12}">
                        <a-checkbox v-model='currentItem.conditionField'>启用</a-checkbox>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
        <a-row type='flex' justify='center' style="margin-top:10px">
            <a-button type='primary' @click="commit">下一步</a-button>
        </a-row>
    </a-card>
</template>
<script src='./modelSetting'></script>
<style lang="less" scoped>
    @import './modelSetting.less';
</style>