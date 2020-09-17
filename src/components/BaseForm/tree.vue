<template>
  <a-tree-select
    show-search
    style="width: 100%"
    v-model="value"
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    placeholder="请选择"
    :tree-data="treeData"
    allow-clear
    :multiple='multipleTree'
    :tree-checkable='multipleTree'
    
    :labelInValue="false"
    tree-default-expand-all
    
    :replaceFields="{title:'name',children:'subDept',value:'id',key:'id'}"
  >
  <!-- treeCheckStrictly
  @change="onChange"
    @search="onSearch"
    @select="onSelect" -->
  </a-tree-select>
</template>

<script>
import { getDeptTreeData } from '@/api/user'
export default {
  data() {
    return {
      value: [],
      treeData:[]
    };
  },
  props:{
    multipleTree:{
        type:Boolean,
        default:true
    }
  },
  methods: {
    async getTreeList(){
      this.treeData = [await getDeptTreeData()]
    },
    onChange(value) {
      console.log(value);
      this.value = value;
    },
    onSearch() {
      console.log(...arguments);
    },
    onSelect() {
      console.log(...arguments);
    },
  },
  created(){
    this.getTreeList()
  }
};
</script>
