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
    ...mapGetters(['staffList','staffInfoList'])
  },
  methods: {
    showModel(list){
      if(!this.staffList.length){
        this.getStaffList()
      }
      this.targetKeys = list
      this.visible = true
    },
    async getStaffList() {//获取用户列表
        const res =  await getStaffList()
        const list = res || []
        this.$store.state.approval.staffInfoList = list
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
      let userList = [] , userIdList = [] , deptList = [] , deptIdList = []
      this.staffInfoList.forEach(item => {
        if(this.targetKeys.indexOf(item.id) != -1){
          userList.push(item.realName)
          userIdList.push(item.id)
          if(deptIdList.indexOf(item.deptId) == -1){
            console.log(item)
            deptIdList.push(item.deptId)
            deptList.push(item.deptName)
          }
        }
      })
      const selectData = {
        userList:userList.join(','),
        userIdList:userIdList.join(','),
        deptIdList:deptIdList.join(',')
      }
      this.$emit('selectData',selectData)
      this.visible = false
    },
    handleCancel(){
        this.visible = false
    }
  }
};
</script>
