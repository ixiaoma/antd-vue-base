<template>
    <a-tree-select show-search allow-clear style="width: 100%" :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      v-model="treeList"
      :tree-data="treeData"
      :multiple='multipleTree'
      :disabled='disabled'
      :tree-checkable='multipleTree'
      treeCheckStrictly
      tree-default-expand-all
      @change="onChange"
      allowClear
      placeholder="请选择部门"
      :replaceFields="{title:'name',children:'subDept',value:'id',key:'id'}"/>
</template>

<script>
import { getDeptTreeData } from '@/api/user'
export default {
  data() {
    return {
      treeList: null,
      treeData:[]
    };
  },
  props:{
    multipleTree:{
        type:Boolean,
        default:false
    },
    selectList:{
      type:[Array,String,Number]
    },
    disabled:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    async getTreeList(){
      this.treeData = [await getDeptTreeData()]
    },
    onChange(value) {
      const data = this.multipleTree ? value.map(ele=>ele.value) : value
      this.$emit('selectTree',data)
    },
    async getInitData(){
      await this.getTreeList()
      this.treeList = this.multipleTree ? [] : ''
      if(this.multipleTree && this.selectList && this.selectList.length){
        this.getTreeData(this.selectList,this.treeData)
      }
    },
    getTreeData(ids,list){
      for(let i = 0 ; i < list.length ; i++){
        if(ids.includes(list[i].id)){
          this.treeList.push({
            label:list[i].name,
            value:list[i].id
          })
        }else{
          if(list[i].subDept && list[i].subDept.length){
            this.getTreeData(ids,list[i].subDept)
          }
        }
      }
    }
  },
  created(){
    this.getInitData()
  }
};
</script>
