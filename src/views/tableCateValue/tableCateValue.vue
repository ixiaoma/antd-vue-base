<template>
    <div class="tableCateValue">
        <a-form class="ant-advanced-search-form" layout="inline">
            <a-row :gutter="24">
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表值">
                        <a-input v-model="search.codeValue"/>
                    </a-form-item>
                </a-col>
                <!-- <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="是否启用">
                        <a-select v-model="search.enabled" mode="default" allowClear>
                            <a-select-option v-for="k in selectOption" :key="k.id" :value="k.id">
                            {{ k.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col> -->
                <a-col :lg='12' :md="18" :sm="24">
                    <a-button type="primary" icon="search" @click="searchFn">查询</a-button>
                    <a-button icon="sync" class="middle-btn" @click="resetFn">重置</a-button>
                    <a-button type="primary" icon="plus" v-if="btnBoolean('code-add')" @click="addTableValue('add')">新建</a-button>
                </a-col>
            </a-row>
        </a-form>
        <a-row>
            <s-table
                ref="table"
                :rowKey="(record) =>  record.id"
                :columns="columns"
                :data="loadData"
                :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
                :showPagination="true"
                :scroll="{ x: 'max-content' }"
            >   
                <template slot="fatherCodeValueSlots" slot-scope="text,record">
                    {{text ? text : '无'}}
                </template>
                <template slot="operationSlots" slot-scope="text,record">
                    <!-- <a-icon class="operationIcon" @click="toDetail(record)" title="查看" type="eye" /> -->
                    <a-icon class="operationIcon" @click="addTableValue('edit',record)" title="编辑" type="form" />
                    <a-icon class="operationIcon" @click="delTableValue(record)" title="删除" type="delete" />
                </template>
            </s-table>
        </a-row>
        <addTableValue @refresh="searchFn" ref="addTableValue"></addTableValue>
    </div>
</template>

<script src="./tableCateValue.js"></script>

<style lang="less">
@import './tableCateValue.less';
</style>