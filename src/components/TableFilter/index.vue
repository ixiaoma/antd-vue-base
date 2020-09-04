<template>
  <div class="table-page-search-wrapper">
    <a-form :form="form" @submit="handleSearch" layout="inline">
      <a-row :gutter="48">
        <a-col
          v-for="(item,index) in filterList"
          :key="index"
          :md="8" :sm="24"
          :style="{ display: index < count ? 'block' : 'none' }"
        >
          <a-form-item :label="item.name">
            <a-select v-if="item.valueType == 'RADIO'" v-decorator="[item.code]" :placeholder="'请选择'+item.name"/>
            <a-cascader v-else-if="item.valueType == 'SELECT'" v-decorator="[item.code]" :placeholder="'请选择'+item.name" :options="item.codeList" :load-data="loadData" change-on-select/>
            <a-date-picker v-else-if="item.valueType == 'DATETIME'" v-decorator="[item.code]" style="width:100%" :placeholder="'请选择'+item.name"/>
            <!-- <a-input-number v-if="k.searchType==&quot;Number&quot;" v-decorator="[k.searchKey]" style="width:100%" :placeholder="k.searchLabel"/> -->
            <a-input v-else v-decorator="[item.code]" :placeholder="'请填写'+item.name" />
          </a-form-item>
        </a-col>
        <a-col :span="8" :style="{ textAlign: 'right' }" class="search-reset-btn" v-if='filterList.length'>
          <a-button type="primary" icon="search" @click="handleSearch">查询</a-button>
          <a-button style="margin-left: 8px" icon="sync" @click="handleReset">重置</a-button>
          <a v-if="filterList.length > 2" :style="{ marginLeft: '8px', fontSize: '14px' }" @click="toggle">
            {{ expand ? '收起' : '展开全部' }} <a-icon :type="expand ? 'up' : 'down'" />
          </a>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script src='./index.js'></script>
<style>
.search-reset-btn{
  float: right;
}
</style>
