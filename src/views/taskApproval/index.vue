<template>
    <div class="task-approval">
        <a-radio-group v-model="result">
            <a-radio value='APPROVE'>通过</a-radio>
            <a-radio value='REJECT'>驳回</a-radio>
        </a-radio-group>
        <a-button type='primary' @click="commitApproval">确认</a-button>
    </div>
</template>
<script src='./index.js'></script>