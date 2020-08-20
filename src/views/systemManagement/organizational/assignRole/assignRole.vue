<template>
  <a-modal title="修改密码" :visible="showModal" :width="700" @cancel="handleCancel">
    <a-transfer
    :list-style="{
        width: '300px',
        height: '400px',
    }"
      :data-source="roleData"
      show-search
      :filter-option="filterOption"
      :target-keys="roledataSelect"
      :render="item => item.title"
      @change="handleChange"
      @search="handleSearch"
    />
    <template slot="footer">
      <a-button key="back" @click="handleCancel">取消</a-button>
      <a-button key="submit" type="primary" @click="editSave">修改</a-button>
    </template>
  </a-modal>
</template>
<script>
import { rolesList,userDeatil,rolesAssignUser } from '@/api/user'
import { Transfer } from 'ant-design-vue'
export default {
  data() {
    return {
      id: '',
      showModal: false,
      roleData: [],
      roledataSelect: []
    }
  },
  components:{
      'a-transfer':Transfer
  },
  methods: {
    filterOption(inputValue, option) {
      return option.title.indexOf(inputValue) > -1
    },
    handleChange(roledataSelect, direction, moveKeys) {
      console.log(roledataSelect, direction, moveKeys)
      this.roledataSelect = roledataSelect
    },
    handleSearch(dir, value) {
      console.log('search:', dir, value)
    },
    editSave() {
        var params = {
            id: this.id,
            roleids: this.roledataSelect.join(':')
        }
        rolesAssignUser(this.id + '/userrole', params).then(res => {
            if (res.code == 200) {
                this.$message.success("操作成功");
                this.showModal = false
            }
        })
    },
    openModal(id) {
      this.id = id
      this.showModal = true
      this.roleAllLoad()
      this.roleSelectLoad()
    },
    handleCancel() {
      this.showModal = false
    },
    roleAllLoad(){
        let params = {
            enabled: true
        }
        rolesList(params).then(res => {
            this.roleData = [];
            if (res.data.length > 0) {
                for (var i = 0; i < res.data.length; i++) {
                    var onedimensionlist = {
                        key: res.data[i].id,
                        title: res.data[i].name,
                    };
                    this.roleData.push(onedimensionlist);
                }
            } else {
                this.roleData = [];
            }
        })
    },
    roleSelectLoad(){
        this.roledataSelect = [];
        userDeatil(this.id + '/userrole').then(res => {
            if (res.code == 200) {
                if (res.data.length > 0) {
                    for (var i = 0; i < res.data.length; i++) {
                        var roledataSelect = res.data[i].id;
                        this.roledataSelect.push(roledataSelect);
                    }
                } else {
                    this.roledataSelect = [];
                }
            }
        })
    }
  },
  mounted() {

  }
}
</script>