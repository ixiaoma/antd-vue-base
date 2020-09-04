<template>
    <a-card :bordered="false">
        <a-form :form="form" @submit="handleSubmit" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }">
            <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
                <a-collapse-panel v-for="(item,index) in layoutList" :key="String(index)" :header="item.groupName">
                    <a-row :gutter="56">
                        <a-col v-for="(i,d) in item.fieldDefineValueList" :key="d" :span="12" >
                            <a-form-item :label="i.name" v-if='readonly'>
                                <span class="ant-form-text">{{i.value ? i.value.join(',') : ''}}</span>
                            </a-form-item>
                            <a-form-item :label="i.name" v-else>
                                <a-input v-if="i.valueType == 'TEXT_SINGLE'" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.name" />
                                <a-textarea v-else-if="i.valueType == 'TEXT_MULTI'" rows="4" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.name"/>
                                <a-select v-else-if="i.valueType == 'RADIO'" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.name"/>
                                <a-cascader v-else-if="i.valueType == 'SELECT'" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.name" :options="i.codeList" :load-data="loadData" change-on-select/>
                                <a-date-picker v-else-if="i.valueType == 'DATETIME'" v-decorator="decoratorFn(i)" style="width:100%" :placeholder="'请选择'+i.name"/>
                                <div class="clearfix" v-else-if="i.valueType == 'PICTURE'">
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
                                        <a-button> <a-icon type="upload" /> 上传附件</a-button>
                                    </a-upload>
                                </div>
                                <span v-else class="ant-form-text">{{i.value}}</span>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-collapse-panel>
            </a-collapse>
            <footer-tool-bar>
                <a-button @click="goBack">{{ readonly ? '返回' :"取消" }}</a-button>
                <a-button type="primary" style="margin-left: 8px" html-type="submit" v-if='!readonly'>提交</a-button>
            </footer-tool-bar>
        </a-form>
    </a-card>
</template>
<script src='./index.js'></script>