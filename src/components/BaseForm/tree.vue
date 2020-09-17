<template>
    <a-tree-select show-search allow-clear style="width: 100%" :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      v-model="treeList"
      :tree-data="treeData"
      :multiple='multipleTree'
      :tree-checkable='multipleTree'
      treeCheckStrictly
      tree-default-expand-all
      @change="onChange"
      :replaceFields="{title:'name',children:'subDept',value:'id',key:'id'}"/>
</template>

<script>
import { getDeptTreeData } from '@/api/user'
export default {
  data() {
    return {
      treeList: [],
      treeData:[]
    };
  },
  props:{
    multipleTree:{
        type:Boolean,
        default:true
    },
    selectList:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    async getTreeList(){
      this.treeData = [await getDeptTreeData()]
    },
    onChange(value) {
      const list = value.map(ele=>ele.value)
      this.$emit('selectTree',list)
    },
    async getInitData(){
      await this.getTreeList()
      this.treeList = []
      if(this.selectList && this.selectList.length){
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
