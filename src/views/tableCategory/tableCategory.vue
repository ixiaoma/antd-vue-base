<template>
    <div class="tableCategory">
        <a-form class="ant-advanced-search-form" layout="inline">
            <a-row :gutter="24">
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表类别编码">
                        <a-input v-model="search.categoryCode"/>
                    </a-form-item>
                </a-col>
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表类别名称">
                        <a-input v-model="search.categoryName"/>
                    </a-form-item>
                </a-col>
                <!-- <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表类别类型">
                        <a-select v-model="search.cateType" mode="default" placeholder="请选择码表类别类型" allowClear>
                            <a-select-option v-for="k in selectOption" :key="k.id" :value="k.id">
                            {{ k.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col> -->
                <a-col :lg='18' :md="18" :sm="24">
                    <a-button type="primary" icon="search" @click="searchFn">查询</a-button>
                    <a-button icon="sync" class="middle-btn" @click="restFn">重置</a-button>
                    <a-button type="primary" icon="plus" @click="addCategories">新建</a-button>
                    <a-button type="primary" icon="setting" class="middle-btn" @click="tableValueManage">码表值管理</a-button>
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
                <template slot="operationSlots" slot-scope="text,record">
                    <!-- <a-icon class="operationIcon" @click="toDetail(record)" title="查看" type="eye" /> -->
                    <a-icon class="operationIcon" @click="editCategories(record)" title="编辑" type="form" />
                    <a-icon class="operationIcon" @click="deleteCategories(record)" title="删除" type="delete" />
                </template>
            </s-table>
        </a-row>
        <addTableCategories ref="addTableCategories" @refresh="searchFn"></addTableCategories>
    </div>
</template>

<script src="./tableCategory.js"></script>

<style lang="less">
@import './tableCategory.less';
</style>