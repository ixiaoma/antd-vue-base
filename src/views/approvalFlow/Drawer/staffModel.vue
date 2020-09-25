<template>
<a-modal
      title="选择成员"
      :visible="visible"
      :width='660'
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <a-transfer
        :data-source="staffList"
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
import { getStaffList } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      targetKeys: [],
      visible:false
    };
  },
  computed:{
    ...mapGetters(['staffList'])
  },
  methods: {
    showModel(list){
      if(!this.staffList.length){
        this.getRoleList()
      }
      this.targetKeys = list.map(ele=>ele.dataId)
      this.visible = true
    },
    async getRoleList() {//获取用户列表
        const res =  await getStaffList()
        const list = res || []
        this.$store.state.approval.staffList = list.map(ele=>{
            return {
                key : ele.id,
                title:ele.realName
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
      const selectList = []
      this.staffList.forEach(item => {
        if(this.targetKeys.indexOf(item.key) != -1){
          selectList.push({
            dataId : item.key,
            name: item.title,
            type:'ASSIGN'
          })
        }
      })
      this.$emit('setStaffData',selectList)
      this.visible = false
    },
    handleCancel(){
        this.visible = false
    }
  }
};
</script>
