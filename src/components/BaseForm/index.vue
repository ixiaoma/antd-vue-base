<template>
    <a-card :bordered="false" class="table-page-search-wrapper">
        <!-- :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }" -->
        <a-form :form="form" @submit="handleSubmit" layout="inline" :class="readonly ? 'detail-style' : ''">
            <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
                <a-collapse-panel v-for="(item,index) in layoutList" :key="String(index)" :header="item.groupName">
                    <a-row :gutter="56">
                        <a-col v-for="(i,d) in item.fieldDefineValueList" :key="d" :md='24' :lg ='18' :xl="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? 20 : 12" >
                            <a-form-item :label="i.name" v-if='readonly || i.readOnly' class="readonly-row">
                                <span class="ant-form-text" :title="i.value ? i.value.join(',') : ''">  {{i.value ? i.value.join(',') : ''}} </span>
                            </a-form-item>
                            <a-form-item :label="i.name" v-else>
                                <a-row :gutter="8">
                                    <a-col :span="22">
                                        <a-textarea v-if="i.valueType == 'TEXT_MULTI'" rows="3" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.name"/>
                                        <a-select v-else-if="i.valueType == 'RADIO'" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.name" allowClear showSearch>
                                            <a-select-option :value="item.codeKey" v-for="(item,index) in i.codeItems" :key='index'>{{item.codeValue}}</a-select-option>
                                        </a-select>
                                        <!-- <a-cascader v-else-if="i.valueType == 'SELECT'" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.name" :options="i.codeList" :load-data="loadData" change-on-select/> -->
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
                                        <a-input v-else :maxLength="i.valueType == 'PHONE' ? 11 : null" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.name" />
                                        <!-- <tree-select v-else-if="i.valueType == 'ATTACHMENT'"/> -->
                                        <!-- <span v-else class="ant-form-text">{{i.value}}</span> -->
                                    </a-col>
                                    <a-col :span="2">
                                        <a-popover v-if="i.description">
                                            <template slot="content">{{i.description}}</template>
                                            <a-icon type="exclamation-circle" style="font-size:20px;color:orange"/>
                                        </a-popover>
                                    </a-col>
                                </a-row>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-collapse-panel>
            </a-collapse>
            <footer-tool-bar v-if='showBottom'>
                <a-button @click="goBack">{{ readonly ? '返回' :"取消" }}</a-button>
                <a-button type="primary" style="margin-left: 8px" html-type="submit" v-if='!readonly'>{{$route.query.pageCode=="performance_assessment_detail"?'提交审批':'提交'}}</a-button>
            </footer-tool-bar>
        </a-form>
        <!-- 员工绩效 -->
        <staffAchievements :readonly="readonly" v-if="$route.query.pageCode=='performance_assessment_detail'" ref="staffAchievements"></staffAchievements>
    </a-card>
</template>
<script src='./index.js'></script>
<style lang="less" scoped>
    .detail-style{
        .ant-form-item{
            background-color: #E6F7FD;
            margin-bottom: 10px!important;
            border-radius: 10px;
            padding-left: 20px;
        }
        .ant-form-item-label{
            color: #000;
        }
        .ant-form-text{
            color: #101010;
        }   
        // #ecf6ff
    }
    .readonly-row{
        /deep/.ant-form-item-control{
            line-height: 33px;
        }
    }
    
</style>