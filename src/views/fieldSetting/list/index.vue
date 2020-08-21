<template>
    <div class="setting-list">
        <a-button type="primary" v-for="(item,index) in objectList" :key='index' @click="toSetting(item)">
            {{item.name}}
        </a-button>
    </div>
</template>
<script src='./index.js'></script>