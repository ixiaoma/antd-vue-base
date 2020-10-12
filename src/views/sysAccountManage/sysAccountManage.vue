<template>
    <div class="sysAccountManage">
        <a-row>
            <s-table
                ref="table"
                :rowKey="(record) =>  record.id"
                :columns="columns"
                :data="loadData"
                :filterList='filterList'
                :fileInfo="['adminUser/export','系统用户导出.xlsx']"
                :btnClick='addAccount'
                :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :showPagination="true"
            >
                <template slot="enabledSlots" slot-scope="text,record">
                    <a-switch @change="changeSwitch(record)" checkedChildren="启用" unCheckedChildren="禁用" :checked="record.enabled==1?true:false"/><!-- :checked="record.enable == 1" -->
                </template>
                <template slot="operationSlots" slot-scope="text,record">
                    <a-icon class="operationIcon" @click="toDetail(record)" title="查看" type="eye" />
                    <a-icon class="operationIcon" @click="toEdit(record)" title="编辑" type="form" />
                    <a-icon class="operationIcon" @click="toPass(record)" title="修改密码" type="lock" />
                    <a-icon class="operationIcon" @click="toDelete(record)" title="删除" type="delete" />
                </template>
            </s-table>
        </a-row>
        <addAccount ref="addAccount" @refresh="refresh"></addAccount>
        <editPass ref="editPass" @refresh="refresh"></editPass>
    </div>
</template>

<script src="./sysAccountManage.js"></script>

<style lang="less">
@import './sysAccountManage.less';
</style>