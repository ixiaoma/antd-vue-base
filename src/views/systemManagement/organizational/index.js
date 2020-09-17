import { STable } from '@/components'
import { Tree } from 'ant-design-vue'
import { getUserList, getDeptTreeData, delDeptTree, userDel, userExport, userEnable } from '@/api/user'
import { columns, result, treeData } from './codeList.js'
import addDepartment from './addDepartment/addDepartment.vue'
import addUserModal from './addUserModal/addUserModal.vue'
import editPass from './editPass/editPass.vue'
import assignRole from './assignRole/assignRole.vue'
export default {
    name: 'organizational',
    components: {
        STable,
        Tree,
        addDepartment,
        addUserModal,
        editPass,
        assignRole
    },
    data() {
        return {
            queryParam: {},
            userData: [],
            pagination: {},
            page: 1,
            pageSize: 10,
            loading: false,
            treeData: treeData,
            treeDataAdd: [],
            columns: columns,
            selectedRowKeys: [],
            selectedRows: [],
            username: '',
            titleBatch: '',
            batchParentId: '',
            isChildren:false
        }
    },
    methods: {
        handleTableChange(pagination) {
            // console.log(pagination);
            const pager = { ...this.pagination };
            pager.current = pagination.current;
            this.pagination = pager;
            this.page = pagination.current
            this.pageSize = pagination.pageSize
            this.userDataLoad()
        },
        userDataLoad(page) {
            let params = {
                page: page ? page : this.page,
                pageSize: this.pageSize,
                username: this.username,
                deptId: this.batchParentId
            }
            this.loading = true;
            getUserList(params).then(res => {
                const pagination = { ...this.pagination };
                pagination.total = res.totalCount;
                pagination.current=params.page
                this.page =params.page
                this.loading = false;
                this.userData = res.records;
                this.pagination = pagination;
            })
        },
        searchLoad() {
            this.queryParam = { username: this.username }
            // this.$refs.table.refresh();
            this.userDataLoad(1)
        },
        onSelectChange(selectedRowKeys, selectedRows) {
            // console.log(selectedRowKeys, selectedRows)
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        exportLoad() {
            let deptId = this.batchParentId == 1 ? "" : this.batchParentId
            deptId = deptId ? deptId : ''
            window.open(userExport + '?access_token=' + sessionStorage.getItem('access_token')
                + '&username=' + this.username + '&deptId=' + deptId)
        },
        handleAdd() {
            this.$refs.addUserModal.treeData = this.treeDataAdd
            this.$refs.addUserModal.openModal('add');
        },
        enabledChange(record) {
            record.enabled = !record.enabled
            console.log(record.enabled)
            var params = {
                id: record.id,
                enabled: record.enabled ? 1 : 0
            }
            userEnable(params).then(res => {
                this.$message.success("更新成功")
            })
        },
        handleDetail(record) {
            this.$refs.addUserModal.treeData = this.treeDataAdd
            this.$refs.addUserModal.openModal('detail', record.id);
        },
        handleEdit(record) {
            this.$refs.addUserModal.treeData = this.treeDataAdd
            this.$refs.addUserModal.openModal('edit', record.id);
        },
        roleEdit(record) {
            this.$refs.assignRole.openModal(record.id)
        },
        passEdit(record) {
            this.$refs.editPass.openModal(record.id);
        },
        handleDel(record) {
            let iddel = [record.id]
            if (record.enabled) {
                this.$message.warning("请先禁用再进行删除")
                return false
            }
            let _this = this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                    userDel(iddel).then(res => {
                        _this.$message.success('删除成功');
                        _this.reflash();
                    })
                },
                onCancel() { },
            });
        },
        //刷新列表
        reflash(value) {
            this.selectedRowKeys = [],
                this.selectedRows = [],
                // this.$refs.table.refresh()
                this.userDataLoad(value)
        },
        //部门树
        gettreedata() {//获取树
            this.treeData = []
            getDeptTreeData().then(res => {
                let str = JSON.stringify([res]);
                let strAdd = JSON.stringify([res]);
                str = str.replace(/id/g, "key").replace(/name/g, "title").replace(/subDept/g, "children");
                strAdd = strAdd.replace(/id/g, "value").replace(/name/g, "title").replace(/subDept/g, "children");
                this.treeData = JSON.parse(str);
                this.treeDataAdd = JSON.parse(strAdd);
            })
        },
        selectNode(keys, node) {//点击树节点操作
            this.selectedRowKeys = []
            if (keys.length == 0) {
                this.titleBatch = ''
                this.batchParentId = ''
                this.isChildren=false
            } else {
                this.titleBatch = node.node.title
                this.batchParentId = node.node.dataRef.key
                this.isChildren=node.node.dataRef.children&&node.node.dataRef.children.length>0?true:false
            }
            if (node.node.dataRef.parentId == -1 || node.node.dataRef.parentId == 0) {
                this.queryParam = {
                    // companyIds:keys
                    deptId: ''
                }
            } else if (node.node.dataRef.parentId) {
                this.queryParam = {
                    // departmentIds:keys
                    deptId: keys.join()
                }
            }
            this.reflash(1);
        },
        addDeptLoad() {
            this.$refs.addDepartment.deptModalshow(this.titleBatch, this.batchParentId, '新建下级')
            // console.log(this.titleBatch,this.batchParentId)
        },
        editDeptLoad() {
            this.$refs.addDepartment.deptModalshow(this.titleBatch, this.batchParentId, '编辑')
            // console.log(this.titleBatch,this.batchParentId)
        },
        delDeptLoad() {
            if (this.batchParentId === '') {
                this.$message.warning("请选择节点");
                return false
            }
            if (this.titleBatch == '全公司') {
                this.$message.warning("根节点不能删除");
                return false
            }
            if(this.isChildren){
                this.$message.warning("此节点存在子节点不能删除");
                return false
            }
            if (this.userData.length) {
                for(let i=0;i<this.userData.length;i++){
                    if(this.userData[i].enabled){
                        this.$message.warning("此节点下有用户不可删除");
                        return false
                    }
                }
            }
            let _this = this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                    delDeptTree(_this.batchParentId + '/delete').then(res => {
                        _this.$message.success('删除成功');
                        _this.gettreedata()       
                    })
                },
                onCancel() { },
            });
        },
        deptreflash() {
            this.gettreedata()
        }
    },
    created() {
        this.gettreedata()
        this.userDataLoad(1)
    }
}