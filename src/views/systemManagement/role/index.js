import addRole from './addRole/addRole.vue'
import { Tree, Transfer } from 'ant-design-vue'
import { menusList,rolesPage,enabledRole,deleteRole, rolesMenu, getUserList, rolesSwitchUser,rolesUserTransfer,rolesUserTransferDel,roleResource,saveRoleResource } from '@/api/user'
export default {
    name: 'role',
    components: {
        addRole,
        'a-tree': Tree,
        'a-transfer': Transfer
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
            checkedNodes: [],
            InitializingRoles: ['1'],//初始化角色（不可禁用、编辑、删除）
        }
    },
    methods: {
        getRoleList() {//获取角色列表
            let params = {
                pageSize: 500
            }
            rolesPage(params).then(res => {
                // if (res && res.code == 200) {
                    res.records.forEach(ele => {
                        ele.enabled = ele.enabled == '1' ? true : false;
                    })
                    this.roleList = res.records ? res.records : [];
                // }
            })
        },
        getMenusList() {//获取菜单列表
          menusList().then(res => {
            // if (res && res.code == 200) {
              let str = JSON.stringify(res);
              str = str.replace(/id/g, "key")
            //   str = str.replace(/childList/g, "children");
              this.treeData = str.length ? JSON.parse(str) : [];
              this.treeData.length && this.changeAllTreeNode(this.treeData);
            // }
          })
        },
        getAllUserList() {//获取用户列表
            let params = {
                pageSize: 5000
            }
            getUserList(params).then(res => {
                // if (res && res.code == 200) {
                    res.records.forEach(ele => {
                        let obj={
                            key:ele.id,
                            title:ele.username + '(' + ele.realName + ')'
                        }
                        this.userData.push(obj)
                    })
                    // this.userData = res.data.records ? res.data.records : [];
                // }
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
            let that = this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？删除后数据无法恢复！',
                okText: '确认',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    deleteRole(data.id).then(res => {
                        // if (res.code == 200) {
                            that.$message.success('删除成功');
                            that.getRoleList();
                        // }
                    })
                },
                onCancel() { },
            });
        },
        changeSwitch(item) {//禁用启用角色
            let params = {
                id:item.id,
                enabled: item.enabled ? 0 : 1
            }
            enabledRole(params).then(res => {
                // if (res && res.code == 200) {
                    this.$message.success('操作成功');
                    this.getRoleList();
                // }
            })
        },
        setRole(id) {//角色配置
            rolesMenu(id + '/tree').then(res => {
                // if (res && res.code == 200) {
                    // this.checkedKeys = res.data ? res.data : [];
                    // this.defaultExpandedKeys = this.checkedKeys;
                    if (res && res.length) {              
                        let powerData = JSON.stringify(res);
                        powerData = powerData.replace(/name/g, 'title');
                        // powerData = powerData.replace(/parentId/g, 'parentmoduleid');
                        powerData = powerData.replace(/childrenModules/g, 'children');
                        powerData = powerData.replace(/moduleId/g, 'key');
                        powerData = JSON.parse(powerData);
                        this.treeData = powerData
                    } else {
                        this.treeData = []
                    }
                // }
            }).then(()=>{
                roleResource(id).then(res => {
                   this.checkedKeys = res ? res : [];
                   this.defaultExpandedKeys = this.checkedKeys;
                })
            }).then(() => {
                let params = {
                    roleId: id
                }
                rolesSwitchUser(params).then(res => {
                    // debugger
                    // if (res && res.code == 200) {
                        let arr = []
                        res.records.forEach(ele => {
                            arr.push(ele.id);
                        })
                        this.userTargetKeys = arr
                    // }
                }).then(res => {
                    this.currentRoleId = id;
                })
            })
        },
        changeTabs(key) {
            this.activeKey = key;
        },
        handleSearch(dir, value) {
            console.log('search:', dir, value)
        },
        userFilterOption(inputValue, option) {//过滤用户
            return option.title.indexOf(inputValue) > -1;
        },
        userHandleChange(targetKeys, direction, moveKeys) {//选择用户      
            if(direction == "left"){
                let params ={
                    roleId:this.currentRoleId,
                    userIds:moveKeys
                }
                rolesUserTransferDel(params).then(res=>{
                    if(res.code == 200){
                        this.userSaveData = targetKeys
                    }
                })
            }else{
                let params ={
                    roleId:this.currentRoleId,
                    userIds:moveKeys
                }
                rolesUserTransfer(params).then(res=>{
                    if(res.code == 200){
                        this.userSaveData = targetKeys
                    }
                })
            }
            this.userTargetKeys = targetKeys;
        },
        checkTree(checkedKeys, { checkedNodes }) {
            this.checkedNodes = checkedNodes.map(ele => ele.data.props.parentId)
            // this.checkedKeys = checkedKeys.checked;
            this.checkedKeys = checkedKeys;
        },
        onSelect(selectedKeys, info) {
            console.log('selected', selectedKeys, info);
        },
        saveSettingInfo() {
            let params = {}
            
            if (this.activeKey == 'menu') {
                const checkList = this.checkedKeys
                this.checkedNodes.forEach(val=>{
                  if(val && !this.checkedKeys.filter(ele=>ele == val).length){
                    checkList.push(val)
                  }
                })
                params.moduleidlist = checkList.join(':');

                saveRoleResource(this.currentRoleId,params).then(res => { 
                    this.$message.success('保存成功')               
                })
            }
        },
    },
    mounted() {
        this.getRoleList();
        // this.getMenusList();
        this.getAllUserList();
    }
}