<template>
    <a-card :bordered="false" class="table-page-search-wrapper">
        <a-form :form="form" @submit="handleSubmit" layout="inline" :class="readonly ? 'detail-style' : ''">
            <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
                <a-collapse-panel v-for="(item,index) in layoutList" v-if='!item.hidden' :key="String(index)" :header="item.groupName">
                    <a-row :gutter="56">
                        <span v-for="(i,d) in item.fieldDefineValueList" :key="d">
                            <a-col v-if='i.display' :sm='24' :md ='18' :lg="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? 20 : 12" >
                                <a-form-item :label="i.name" v-if='readonly || i.readOnly' class="readonly-row" :class="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' || readonly ? '' : 'pre-row'">
                                    <span class="ant-form-text" :title="i.value ? i.value.join(',') : ''">  {{i.value ? i.value.join(',') : ''}} </span>
                                </a-form-item>
                                <a-form-item :label="i.name" v-else :class="i.valueType == 'TEXT_MULTI' || i.valueType == 'PICTURE' || i.valueType == 'ATTACHMENT' ? '' : 'pre-row'">
                                    <a-row :gutter="8">
                                        <a-col :span="22">
                                            <a-textarea allowClear v-if="i.valueType == 'TEXT_MULTI'" rows="3" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.name"/>
                                            <a-input-number allowClear v-else-if="i.valueType == 'INTEGER'" :formatter="limitNumber" :parser="limitNumber"  :precision='0' v-decorator="decoratorFn(i)" :placeholder="'请输入'+i.name" style="width:100%"/>
                                            <a-input-number allowClear v-else-if="i.valueType == 'DECIMAL'" :precision='0' v-decorator="decoratorFn(i)" :placeholder="'请输入'+i.name" style="width:100%"/>
                                            <a-select v-else-if="i.valueType == 'RADIO' || i.valueType == 'CHECKBOX'" :mode="i.valueType == 'CHECKBOX' ? 'multiple' : 'default'" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.name" allowClear showSearch @change='(data)=>{selectChange(data,i)}'>
                                                <a-select-option :value="item.codeKey" v-for="(item,index) in i.codeItems" :key='index'>{{item.codeValue}}</a-select-option>
                                            </a-select>
                                            <a-cascader allowClear v-else-if="i.valueType == 'SELECT'" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.name"
                                            :field-names="{ label: 'codeValue', value: 'codeKey',children:'children'}" :options="i.codeItems" :load-data="(selectedOptions)=>{loadData(selectedOptions,i)}" change-on-select/>
                                            <a-date-picker allowClear :show-time="i.valueType == 'DATETIME'" v-else-if="i.valueType == 'DATETIME' || i.valueType == 'DATE'" v-decorator="decoratorFn(i)" style="width:100%" :placeholder="'请选择'+i.name"/>
                                            <tree-select v-else-if="i.valueType == 'ORG_TREE_SINGLE' || i.valueType == 'ORG_TREE_MULTI'" :multipleTree="i.valueType == 'ORG_TREE_MULTI'" v-decorator="decoratorFn(i)" :selectList='i.value' @selectTree='(list)=>{selectTree(list,i.code)}' :disabled='i.referObjectCode ? true : false'/>
                                            <div class="clearfix" v-else-if="i.valueType == 'PICTURE'" v-decorator="decoratorFn(i)">
                                                <a-upload
                                                :action="fileUploadApi"
                                                :headers="{'Authorization':'Bearer'+ accessToken}"
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
                                            <div class="clearfix" v-else-if="i.valueType == 'ATTACHMENT'" v-decorator="decoratorFn(i)">
                                                <a-upload 
                                                :action="fileUploadApi"
                                                :showUploadList="false"
                                                @change="file=>{uploadFile(file,i.code)}"
                                                :headers="{'Authorization':'Bearer'+ accessToken}">
                                                    <a-button> <a-icon type="upload" />上传附件</a-button>
                                                </a-upload>
                                                <div v-for="(item,index) in form.getFieldValue(i.code)" :key='index'>
                                                    <a-icon type="link" />
                                                    <a :href="item" style="margin:5px 60px 5px 10px" @click="downLoadFile(item)">{{item}}</a>
                                                    <a-icon type="delete" style="color:#1890FF;cursor: pointer;" @click="deleteFile(i.code,index)"/>
                                                </div>
                                            </div>
                                            <a-input allowClear :disabled='i.referObjectCode ? true : false' v-else :maxLength="i.valueType == 'PHONE' ? 11 : null" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.name">
                                                <span slot="addonAfter" v-if='i.serverApi'>
                                                    <a-icon type="close" v-if='form.getFieldValue(i.code)' @click="clearRleative(i)"/>
                                                    <a-icon type="plus" v-else @click="relativeFn(i)"/>
                                                </span>
                                            </a-input>
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
                        </span>
                    </a-row>
                </a-collapse-panel>
            </a-collapse>
            <footer-tool-bar v-if='showBottom'>
                <a-button @click="goBack">{{ readonly ? '返回' :"取消" }}</a-button>
                <a-button type="primary" style="margin-left: 8px" html-type="submit" v-if='!readonly'>{{$route.query.pageCode=="performance_assessment_detail"?'提交审批':'提交'}}</a-button>
            </footer-tool-bar>
        </a-form>
        <model-table ref='modelTable' @selectData='selectData'/>
        <!-- 员工绩效 -->
        <staffAchievements :readonly="readonly||operationType" v-if="$route.query.pageCode=='performance_assessment_detail'||$route.query.pageCode=='performance_assessment_detail/todo'" ref="staffAchievements"></staffAchievements>
        <!-- 考核待办 经理审批 -->
        <kpiApproval ref="kpiApproval" v-if="$route.query.pageCode=='performance_assessment_detail/todo'&&$route.query.operationType=='经理审批'"></kpiApproval>
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
    }
    .readonly-row{
        /deep/.ant-form-item-control{
            line-height: 33px;
        }
    }
    .table-page-search-wrapper{
        .ant-form-inline {
            .ant-form-item,.ant-form-item-with-help{
                margin-bottom: 0px;
            }
        }
    } 
    .pre-row{
        height: 61px;
    }
</style>