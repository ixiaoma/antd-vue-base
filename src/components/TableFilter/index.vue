<template>
  <div id="components-form-demo-advanced-search">
    <a-form :form="form" @submit="handleSearch">
      <a-row :gutter="24">
        <a-col
          v-for="(k,i) in filterList"
          :key="i"
          :span="8"
          :style="{ display: i < count ? 'block' : 'none' }"
        >
          <a-form-item :label="k.searchLabel" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-input-number v-if="k.searchType==&quot;Number&quot;" v-decorator="[k.searchKey]" style="width:100%" :placeholder="k.searchLabel"/>
            <a-select
              v-else-if="k.searchType==&quot;Select&quot;"
              v-decorator="[k.searchKey]"
              mode="default"
              :placeholder="k.searchLabel"
              style="width: 100%"
              showSearch
              :filterOption="filterOption"
              allowClear>
              <a-select-option v-for="(item,index) in k.selectList" :key="index" :value="item.key">
                {{ item.value }}
              </a-select-option>
            </a-select>
            <a-date-picker v-else-if="k.searchType==&quot;Time&quot; || k.searchType==&quot;DateTime&quot; || k.searchType==&quot;NotShowTime&quot;" v-decorator="[k.searchKey]" :showTime="k.searchType==&quot;DateTime&quot; ? true : false" style="width:100%"/>
            <a-input v-else v-decorator="[k.searchKey]" :placeholder="k.searchLabel"/>
          </a-form-item>
        </a-col>
        <a-col :span="8" :style="{ textAlign: 'right' }" class="search-reset-btn">
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
.ant-advanced-search-form {
  padding: 24px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
</style>
