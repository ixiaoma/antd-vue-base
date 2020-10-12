import addRole from './addRole/addRole.vue'
import { getRoleListData, enabledRole, deleteRole, menusList, getAllUserData, getRoleResource, getRoleUser, saveRoleResource, saveRoleUser } from '@/api/systemManage'
export default {
  name: 'roleManage',
  components: {
    addRole
  },
  data() {
    return {
      roleList: [],
      activeKey: 'menu',
      currentRoleId: '',
      userTargetKeys: [],
      userData: [],
      defaultExpandedKeys: [],
      checkedKeys: [],
      treeData: [],
      checkedNodes:[],
      InitializingRoles:['1206475457298436098','1206468796794015746','1211542440578650113','1214068682011971585','1214068742984568834'],//初始化角色（不可禁用、编辑、删除）
    }
  },
  methods: {
    getRoleList() {//获取角色列表
      getRoleListData().then(res => {
        if (res && res.code == 200) {
          res.data.forEach(ele => {
            ele.enabled = ele.enabled == '1' ? true : false;
          })
          this.roleList = res.data ? res.data : [];
        }
      })
    },
    getMenusList() {//获取菜单列表
      menusList().then(res => {
        if (res && res.code == 200) {
          let str = JSON.stringify(res.data);
          str = str.replace(/childList/g, "children");
          this.treeData = str.length ? JSON.parse(str) : [];
          this.treeData.length && this.changeAllTreeNode(this.treeData);
        }
      })
    },
    getAllUserList() {//获取用户列表
      getAllUserData().then(res => {
        if (res && res.code == 200) {
          res.data.forEach(ele => {
            ele.key = ele.id;
            ele.title = ele.loginName+'('+ele.realName+')';
          })
          this.userData = res.data ? res.data : [];
        }
      })
    },
    changeAllTreeNode(node) {//修改所有树节点的字段名
      node.length && node.forEach(ele => {
        ele.title = ele.name;
        ele.key = ele.id;
        if (ele.children && ele.children.length) {
          this.changeAllTreeNode(ele.children)
        }
      })
    },
    addRole() {//添加角色
      this.$refs.addRole.openModal('add');
    },
    editRole(data) {//编辑角色
      this.$refs.addRole.openModal('edit', data);
    },
    copyRole(data) {//复制角色
      this.$refs.addRole.openModal('copy', data);
    },
    delRole(data) {//删除节点操作
      let ids = [data.id];
      let that = this;
      this.$confirm({
        title: '温馨提示',
        content: '确认删除？删除后数据无法恢复！',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          deleteRole(ids).then(res => {
            if (res.code == 200) {
              that.$message.success('删除成功');
              that.getRoleList();
            }
          })
        },
        onCancel() { },
      });
    },
    changeSwitch(item) {//禁用启用角色
      let params = {
        enable: item.enabled ? 0 : 1
      }
      enabledRole(item.id, params).then(res => {
        if (res && res.code == 200) {
          this.$message.success('操作成功');
          this.getRoleList();
        }
      })
    },
    setRole(id) {//角色配置
      getRoleResource(id).then(res => {
        if (res && res.code == 200) {
          this.checkedKeys = res.data ? res.data : [];
          this.defaultExpandedKeys = this.checkedKeys;
        }
      }).then(() => {
        getRoleUser(id).then(res => {
          if (res && res.code == 200) {
            this.userTargetKeys = res.data ? res.data : [];
          }
        }).then(res => {
          this.currentRoleId = id;
        })
      })
    },
    changeTabs(key) {
      this.activeKey = key;
    },
    userFilterOption(inputValue, option) {//过滤用户
      return option.title.indexOf(inputValue) > -1;
    },
    userHandleChange(targetKeys, direction, moveKeys) {//选择用户
      this.userTargetKeys = targetKeys;
    },
    checkTree(checkedKeys, {checkedNodes}) {
      this.checkedNodes = checkedNodes.map(ele=>ele.data.props.parentId)
      this.checkedKeys = checkedKeys.checked;
    },
    saveSettingInfo() {
      let params = {
        roleId: this.currentRoleId
      }
      if (this.activeKey == 'menu') {
        const checkList = this.checkedKeys
        this.checkedNodes.forEach(val=>{
          if(val && !this.checkedKeys.filter(ele=>ele == val).length){
            checkList.push(val)
          }
        })
        params.resourceIds = checkList;
        saveRoleResource(params).then(res => {
          if (res && res.code == 200) {
            this.$message.success('保存成功')
          }
        })
      } else {
        params.userIds = this.userTargetKeys;
        saveRoleUser(params).then(res => {
          if (res && res.code == 200) {
            this.$message.success('保存成功')
          }
        })
      }
    },
  },
  mounted() {
    this.getRoleList();
    this.getMenusList();
    this.getAllUserList();
  }
}