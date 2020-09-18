<template>
<div>
    <a-modal v-model="visible" v-if="visible" title="预算金额查看" :width="800" :bodyStyle='{padding:20}' :footer="null">
        <h3>现预算金额:¥{{budgetAmount}}</h3>
         <s-table
            ref="table"
            rowKey="userId"
            :columns="columns"
            :data="loadData"
            :scroll='{x:true}'>
            </s-table>
    </a-modal>
    <a-modal v-model="setAmount" v-if="setAmount" title="设置现预算金额" :bodyStyle='{padding:20}'>
         <!-- <a-input v-model="budgetAmount" placeholder="请填写现预算金额"/> -->
         现预算金额：<a-input-number style="width:70%" v-model="budgetAmount" placeholder="请填写现预算金额" :min="0" :precision='2'/>
         <template slot="footer">
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary"  @click="handleOk">保存</a-button>
        </template>
    </a-modal>
    <a-modal v-model="budgetEdit" :title="budgetTitle" :bodyStyle='{padding:20}'>
           预算维度：<a-select mode="default" v-model="budgetLatitude" style="width:70%" :disabled="budgetTitle=='预算维度查看'">
                <a-select-option v-for="k in budgetLatitudeList" :key="k.codeKey" :value="k.codeKey">
                {{ k.codeValue }}
                </a-select-option>
            </a-select>
            <template slot="footer">
            <a-button key="back" @click="budgetEditCancel">取消</a-button>
            <a-button key="submit" type="primary"  @click="budgetEditOk" :disabled="budgetTitle=='预算维度查看'">保存</a-button>
        </template>
    </a-modal>
</div>
</template>
<script src='./budgetGetAmount.js'></script>