<style lang="less" scoped>
    @import "./addReimbursement.less";
</style>


<template>
    <div class="addReimbursement">
        <a-card :bordered="false">
            <table-filter :filterList='filterList'/>
            <div class="table-operator">
                <a-button 
                    type="primary" 
                    icon="plus" 
                    @click="showTableModal(typeItem)"
                    v-for="(typeItem , typeIndex) in typeList"
                    :key="'type' + typeIndex"
                >{{ typeItem.name }}</a-button>
            </div>

            <s-table
                ref="table"
                rowKey="key"
                :columns="columns"
                :data="loadData"
                :alert="true"
                showPagination="auto">
                <span slot="serial" slot-scope="text, record, index">
                {{ index + 1 }}
                </span>
                <span slot="action" slot-scope="text, record">
                    <template>
                        <a @click="handleAdd(record,2)">查看</a>
                        <a-divider type="vertical" />
                        <a @click="handleAdd(record,3)">修改</a>
                    </template>
                </span>
            </s-table>
        </a-card>
         <!-- 表格弹窗 -->
        <add-table-modal ref="addTableModal"></add-table-modal>
    </div>
</template>

<script src="./addReimbursement.js"></script>
