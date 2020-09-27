<template>
    <a-form :form="formField" style="padding:0 20px">
    <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
        <a-collapse-panel key="1" header="加班申请">
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="员工工号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input v-decorator="['staffNo',validates.staffNo]"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="员工姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input v-decorator="['staffName',validates.staffName]"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="员工部门" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input v-decorator="['staffName',validates.staffName]"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="itcode" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input v-decorator="['staffName',validates.staffName]"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="开始时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                 <a-date-picker style="width:100%" v-decorator="['publishDate',validates.publishDate]" show-time format="YYYY-MM-DD HH:mm:ss"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="结束时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                 <a-date-picker style="width:100%" v-decorator="['expiryDate',validates.expiryDate]" show-time format="YYYY-MM-DD HH:mm:ss"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="总计时间" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-input v-decorator="['staffName',validates.staffName]"/>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="加班原因" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-textarea  v-decorator="['approvalRemark',validates.approvalRemark]" :placeholder="'请填写审批备注'" :auto-size="{ minRows: 2, maxRows: 6 }"/>
            </a-form-item>
        </a-col>
        </a-collapse-panel>
        </a-collapse>
    </a-form>
</template>
<script src='./index.js'></script>