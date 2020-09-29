<template>
    <a-card :bordered="false" class="table-page-search-wrapper">
        <h3 class="row-title">基础信息</h3>
        <a-form :form="form" layout="inline" class="form-con">
            <a-row :gutter="56">
                <span v-for="(i,d) in fieldList" :key="d" >
                    <a-col v-if='!i.display' :sm='24' :md ='18' :lg="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? 20 : 12" >
                        <a-form-item :label="i.name" v-if='i.onlyread' class="readonly-row" :class="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? '' : 'pre-row'">
                            <span class="ant-form-text" :title="i.value"> {{i.value}} </span>
                        </a-form-item>
                        <!-- v-if='i.edit' -->
                        <a-form-item :label="i.name" v-else :class="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? '' : 'pre-row'" :required="i.required">
                            <a-row :gutter="8">
                                <a-col :span="22">
                                    <a-textarea allowClear v-if="i.valueType == 'TEXT_MULTI'" rows="3" v-model.trim='i.value' :placeholder="'请填写'+i.name"/>
                                    <a-input-number allowClear v-else-if="i.valueType == 'INTEGER'" :formatter="limitNumber" :parser="limitNumber"  :precision='0' v-model.trim='i.value' :placeholder="'请输入'+i.name" style="width:100%"/>
                                    <a-input-number allowClear v-else-if="i.valueType == 'DECIMAL'" :precision='0' v-model.trim='i.value' :placeholder="'请输入'+i.name" style="width:100%"/>
                                    <a-select v-else-if="i.valueType == 'RADIO' || i.valueType == 'CHECKBOX'" :mode="i.valueType == 'CHECKBOX' ? 'multiple' : 'default'" v-model.trim='i.value' :placeholder="'请选择'+i.name" allowClear showSearch>
                                        <a-select-option :value="item.codeKey" v-for="(item,index) in i.codeItems" :key='index'>{{item.codeValue}}</a-select-option>
                                    </a-select>
                                    <a-cascader allowClear v-else-if="i.valueType == 'SELECT'" v-model.trim='i.value' :placeholder="'请选择'+i.name"
                                    :field-names="{ label: 'codeValue', value: 'codeKey',children:'children'}" :options="i.codeItems" :load-data="(selectedOptions)=>{loadData(selectedOptions,i)}" change-on-select/>
                                    <a-date-picker allowClear :show-time="i.valueType == 'DATETIME'" v-else-if="i.valueType == 'DATETIME' || i.valueType == 'DATE'" v-model.trim='i.value' style="width:100%" :placeholder="'请选择'+i.name"/>
                                    <!-- <div class="clearfix" v-else-if="i.valueType == 'PICTURE'">
                                        <a-upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        list-type="picture-card"
                                        :file-list="imgList"
                                        @preview="handlePreview"
                                        @change="handleChange"
                                        >
                                        <div v-if="imgList.length < 1">
                                            <a-icon type="plus" />
                                            <div class="ant-upload-text">
                                            Upload
                                            </div>
                                        </div>
                                        </a-upload>
                                        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                                            <img alt="example" style="width: 100%" :src="previewImage" />
                                        </a-modal>
                                    </div>
                                    <div class="clearfix" v-else-if="i.valueType == 'ATTACHMENT'">
                                        <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                            <a-button> <a-icon type="upload" />上传附件</a-button>
                                        </a-upload>
                                    </div> -->
                                    <!-- <tree-select v-else-if="i.valueType == 'ORG_TREE_SINGLE' || i.valueType == 'ORG_TREE_MULTI'" :multipleTree="i.valueType == 'ORG_TREE_MULTI'" v-model.trim='i.value' :selectList='i.value' @selectTree='(list)=>{selectTree(list,i.code)}'/> -->
                                    <a-input allowClear :disabled='i.referObjectCode ? true : false' v-else :maxLength="i.valueType == 'PHONE' ? 11 : null" v-model.trim='i.value' :placeholder="'请填写'+i.name">
                                        <span slot="addonAfter" v-if='i.serverApi'>
                                            <a-icon type="close" v-if='form.getFieldValue(i.code)' @click="clearRleative(i)"/>
                                            <a-icon type="plus" v-else @click="relativeFn(i)"/>
                                        </span>
                                    </a-input>
                                </a-col>
                                <!-- <a-col :span="2">
                                    <a-popover v-if="i.description">
                                        <template slot="content">{{i.description}}</template>
                                        <a-icon type="exclamation-circle" style="font-size:20px;color:orange"/>
                                    </a-popover>
                                </a-col> -->
                            </a-row>
                        </a-form-item>
                    </a-col>
                </span>
            </a-row>
        </a-form>
        <!-- <model-table ref='modelTable' @selectData='selectData'/> -->
        <div class="task-approval">
            <h3 class="row-title">审批意见</h3>
            <div class="form-con">
                <a-row type='flex' justify='center'>
                    <a-radio-group v-model="result" v-if='data'>
                        <a-radio value='APPROVE'>通过</a-radio>
                        <a-radio value='REJECT'>驳回</a-radio>
                    </a-radio-group>
                </a-row>
            </div>
        </div>
         <footer-tool-bar>
             <a-button @click="goBack" style="margin-right:20px">返回</a-button>
            <a-button type='primary' @click="commitApproval">确认</a-button>
        </footer-tool-bar>
    </a-card>
</template>
<script src='./index.js'></script>
<style lang="less" scoped>
    .form-con{
        padding:10px 20px;
    }
    .row-title{
        background-color: #cae2f9;
        height: 36px;
        line-height: 36px;
        padding-left: 20px;
    }
</style>