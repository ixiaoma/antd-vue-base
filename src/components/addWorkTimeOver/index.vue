<template>
<a-card :bordered="false" class="table-page-search-wrapper">
    <a-form :form="form" style="padding:0 20px">
    <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
        <a-collapse-panel key="1" header="加班申请">
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="员工工号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <!-- <a-input v-decorator="['code',validates.code]"/> -->
                 {{code}}
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="员工姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <!-- <a-input v-decorator="['empName',validates.empName]"/> -->
                {{empName}}
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="服务类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-select mode="default" v-decorator="['serviceType',validates.serviceType]" style="width: 100%" allowClear @change="serviceTypeChange">
                    <a-select-option v-for="k in serviceTypeList" :key="k.codeKey" :value="k.codeKey">
                    {{ k.codeValue }}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-col>
         <a-col :sm='24' :md ='18' :lg="12"  v-if="form.getFieldValue('serviceType')=='服务类'">
            <a-form-item label="工单单号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input allowClear disabled v-decorator="['workId',validates.workId]" placeholder="请填写工单单号">
                    <span slot="addonAfter">
                        <a-icon type="close" v-if="form.getFieldValue('workId')" @click="clearRleative"/>
                        <a-icon type="plus" v-else @click="relativeFn"/>
                    </span>
                </a-input>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="开始时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                 <a-date-picker style="width:100%" v-decorator="['startDate',validates.startDate]" show-time format="YYYY-MM-DD HH:mm:ss" @change="startDateChange"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="结束时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                 <a-date-picker style="width:100%" v-decorator="['endDate',validates.endDate]" show-time format="YYYY-MM-DD HH:mm:ss" @change="endDateChange"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="总计时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input v-decorator="['totalTime',validates.totalTime]"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="加班类型" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-select mode="default" v-decorator="['overtimeType',validates.overtimeType]" style="width: 100%" allowClear>
                    <a-select-option v-for="k in overtimeTypeList" :key="k.codeKey" :value="k.codeKey">
                    {{ k.codeValue }}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="加班原因" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-textarea  v-decorator="['theReason',validates.theReason]" :auto-size="{ minRows: 2, maxRows: 6 }"/>
            </a-form-item>
        </a-col>
        </a-collapse-panel>
        </a-collapse>
         <footer-tool-bar>
            <a-button @click="goBack">返回</a-button>
            <a-button type="primary" style="margin-left: 8px" @click="handleSubmit">提交</a-button>
        </footer-tool-bar>
    </a-form>
    <model-table ref='modelTable' @selectData='selectData'/>
</a-card>
</template>
<script src='./index.js'></script>