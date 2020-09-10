<template>
    <div class="tableCateValue">
        <a-form class="ant-advanced-search-form" layout="inline">
            <a-row :gutter="24">
                <!-- <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表值">
                        <a-input v-model="search.codeValue"/>
                    </a-form-item>
                </a-col>
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="是否启用">
                        <a-select v-model="search.enabled" mode="default" allowClear>
                            <a-select-option v-for="k in selectOption" :key="k.id" :value="k.id">
                            {{ k.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col> -->
                <a-col :lg='12' :md="18" :sm="24">
                    <!-- <a-button type="primary" icon="search" style="margin-right:10px" @click="noticeDataLoad()">查询</a-button> -->
                    <!-- <a-button icon="sync" class="middle-btn" style="margin-right:10px" @click="resetFn">重置</a-button> -->
                    <a-button type="primary" icon="plus" @click="addTableValue('add')">新建</a-button>
                </a-col>
            </a-row>
        </a-form>
        <a-row>
            <a-table 
                        ref="table"
                        size="small"
                        :bordered="true"
                        :rowKey="(record) =>  record.id"
                        :columns="columns" 
                        :data-source="noticeData"      
                        :showPagination="true"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                        >
                        <template slot="defaultStatus" slot-scope="text, record">
                            <!-- <span>{{record.defaultStatus?"是":"否"}}</span> -->
                            <a-switch checked-children="是" un-checked-children="否" :checked="record.defaultStatus?true:false" @change="defaultChange(record)"/>
                        </template>
                        <template slot="action" slot-scope="text, record">         
                        <a @click="addTableValue('edit',record)">修改</a>
                        <a-divider type="vertical" />
                        <a @click="delTableValue(record)">删除</a>
                        </template>
            </a-table>
        </a-row>
        <addTableValue @refresh="noticeDataLoad()" ref="addTableValue"></addTableValue>
    </div>
</template>

<script src="./tableCateValue.js"></script>

<style lang="less">
@import './tableCateValue.less';
</style>