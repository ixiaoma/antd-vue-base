<template>
<a-modal
      title="选择标签"
      :visible="visible"
      :width='660'
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-transfer
        :data-source="sourceData"
        show-search
        :list-style="{
            width: '260px',
            height: '360px',
        }"
        :filter-option="filterOption"
        :target-keys="targetKeys"
        :render="item => item.title"
        @change="handleChange"
        @search="handleSearch"
    />
    </a-modal>
  
</template>
<script>
import { rolesPage } from '@/api/user'
export default {
  data() {
    return {
      sourceData: [],
      targetKeys: [],
      visible:false
    };
  },
  methods: {
    async getRoleList() {//获取角色列表
        let params = {
            pageSize: 500
        }
        const res =  await rolesPage(params)
        const roleList = res.records ? res.records : []
        this.sourceData = roleList.map(ele=>{
            return {
                key : ele.id,
                title:ele.name
            }
        })
    },
    filterOption(inputValue, option) {
      return option.name.indexOf(inputValue) > -1;
    },
    handleChange(targetKeys, direction, moveKeys) {
      this.targetKeys = targetKeys;
    },
    handleSearch(dir, value) {
      console.log('search:', dir, value);
    },
    handleOk(){

    },
    handleCancel(){
        this.visible = false
    }
  },
  created() {
    this.getRoleList();
  }
};
</script>
