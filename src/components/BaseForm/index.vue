<template>
    <a-form :form="form" @submit="handleSubmit" class="ant-advanced-search-form">
        <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
            <a-collapse-panel v-for="(item,index) in layoutList" :key="String(index)" :header="item.groupName">
                <a-row :gutter="56">
                    <a-col v-for="(i,d) in item.fieldList" :key="d" :span="12" >
                        <a-form-item :label="i.fieldName">
                            <a-input v-if="i.fieldType == 1" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.fieldName" />
                            <a-textarea v-else-if="i.fieldType == 2" rows="4" v-decorator="decoratorFn(i)" :placeholder="'请填写'+i.fieldName"/>
                            <a-select v-else-if="i.fieldType == 3" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.fieldName"/>
                            <a-cascader v-else-if="i.fieldType == 5" v-decorator="decoratorFn(i)" :placeholder="'请选择'+i.fieldName" :options="i.codeList" :load-data="loadData" change-on-select @change="onChange"/>
                            <a-date-picker v-else-if="i.fieldType == 6" v-decorator="decoratorFn(i)" style="width:100%" :placeholder="'请选择'+i.fieldName"/>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-collapse-panel>
        </a-collapse>
        <footer-tool-bar>
            <a-button @click="goBack">取消</a-button>
            <a-button type="primary" style="margin-left: 8px" html-type="submit">提交</a-button>
        </footer-tool-bar>
    </a-form>
</template>
<script src='./index.js'></script>