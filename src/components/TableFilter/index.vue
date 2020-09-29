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
            <a-select v-if="item.valueType == 'RADIO' || item.valueType == 'CHECKBOX'" :mode="item.valueType == 'CHECKBOX' ? 'multiple' : 'default'" v-decorator="[item.code]" :placeholder="'请选择'+item.name" allowClear showSearch>
                <a-select-option v-for="(child,index) in item.codeItems" :value="child.codeKey" :key='index'>{{child.codeValue}}</a-select-option>
            </a-select>
            <a-cascader v-else-if="item.valueType == 'SELECT'" v-decorator="[item.code]" :placeholder="'请选择'+item.name"
            :field-names="{ label: 'codeValue', value: 'codeKey',children:'children'}" :options="item.codeItems" :load-data="(selectedOptions)=>{loadData(selectedOptions,item)}" change-on-select/>
            <tree-select v-else-if="item.valueType == 'ORG_TREE_SINGLE' || item.valueType == 'ORG_TREE_MULTI'" :multipleTree="item.valueType == 'ORG_TREE_MULTI'" v-decorator="[item.code]" @selectTree='(list)=>{selectTree(list,item.code)}'/>
            <a-date-picker :show-time="item.valueType == 'DATETIME'" v-else-if="item.valueType == 'DATETIME' || item.valueType == 'DATE'" v-decorator="[item.code]" style="width:100%" :placeholder="'请选择'+item.name"/>
            <a-input-number v-else-if="item.valueType == 'INTEGER'" :formatter="limitNumber" :parser="limitNumber"  :precision='0' v-decorator="[item.code]" :placeholder="'请输入'+item.name" style="width:100%"/>
            <a-input-number v-else-if="item.valueType == 'DECIMAL'" :precision='0' v-decorator="[item.code]" :placeholder="'请输入'+item.name" style="width:100%"/>
            <a-input v-else v-decorator="[item.code]" :placeholder="'请填写'+item.name" @pressEnter='handleSearch'/>
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
