<template>
    <a-card class="table-page-search-wrapper">
        <a-form @submit="handleSearch" layout="inline">
            <a-row :gutter="48">
                <a-col :md="8" :sm="24" >
                    <a-form-item label="审批类型">
                        <a-select v-model='defineKey'>
                            <a-select-option v-for="(item,index) in objectList" :key='index' :value="item.defineKey">{{item.name}}</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24" :style="{ textAlign: 'right' }" class="search-reset-btn" >
                    <a-button type="primary" icon="search" @click="handleSearch">查询</a-button>
                    <a-button style="margin-left: 8px" icon="sync" @click="handleReset">重置</a-button>
                    <a v-if="false" :style="{ marginLeft: '8px', fontSize: '14px' }" @click="toggle">
                        {{ expand ? '收起' : '展开全部' }} <a-icon :type="expand ? 'up' : 'down'" />
                    </a>
                </a-col>
            </a-row>
        </a-form>
        <s-table
            ref="table"
            rowKey="id"
            :columns="columns"
            :data="loadData"
            :scroll='{x:true}'>
            <span slot="action" slot-scope="text, record">
                <template>
                    <a @click="toApproval(record)" style="margin:0 3px">审批</a>
                </template>
            </span>
        </s-table>
    </a-card>
</template>
<script src='./index.js'></script>