import { STable } from '@/components'
import { Tree } from 'ant-design-vue'
import { getUserList,getDeptTreeData,delDeptTree } from '@/api/user'
import {columns,result,treeData} from './codeList.js'
import addDepartment from './addDepartment/addDepartment.vue'
import addUserModal from './addUserModal/addUserModal.vue'
export default {
    name: 'organizational',
    components: {
        STable,
        Tree,
        addDepartment,
        addUserModal
    },
    data() {
        return {
            queryParam:{},
            userData: parameter => {
                // console.log(parameter)
                const requestParameters = Object.assign({}, parameter, this.queryParam)
                // console.log('loadData request parameters:', requestParameters)
                return getUserList(requestParameters).then(res => {
                    // return res.data
                    return result
                })
            },
            treeData: treeData,
            columns: columns,
            selectedRowKeys: [],
            selectedRows: [],
            nickname:'',
            titleBatch:'',
            batchParentId:''
        }
    },
    methods: {
        searchLoad(){
            this.queryParam={nickname:this.nickname}
            this.$refs.table.refresh();
        },
        onSelectChange(selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        // handleAdd(){},
        // handleDetail(record){},
        // handleEdit(record){},
        handleAdd() {
            this.$refs.addUserModal.openModal('add');
        },
        handleDetail(record) {
            this.$refs.addUserModal.openModal('detail',record.id);
        },
        handleEdit(record) {
            this.$refs.addUserModal.openModal('edit',record.id);
        },
        toPass(record) {
            // this.$refs.editPass.openModal(obj.id);
        },
        roleEdit(record){},
        passEdit(record){},
        handleDel(record){},
        //部门树
        gettreedata() {//获取树
            this.treeData = []
            getDeptTreeData().then(res => {
                let str = JSON.stringify([res.data]);
                str = str.replace(/id/g, "key").replace(/name/g, "title").replace(/subDept/g, "children");
                this.treeData = JSON.parse(str);
            })
        },
        selectNode(keys,node) {//点击树节点操作
            this.selectedRowKeys=[]
            if(keys.length==0){
                this.titleBatch=''
                this.batchParentId=''
            }else{
                this.titleBatch=node.node.title
                this.batchParentId=node.node.dataRef.key
            }  
            if(node.node.dataRef.parentId==-1||node.node.dataRef.parentId==0){
                this.queryParam={
                    // companyIds:keys
                    deptId:''
                }
            }else if(node.node.dataRef.parentId){
                this.queryParam={
                    // departmentIds:keys
                    deptId:keys.join()
                }
            }
            this.reflash();
        },
        reflash(){
            this.selectedRowKeys=[],
            this.selectedRows=[],
            this.$refs.table.refresh()
        },
        addDeptLoad(){
            this.$refs.addDepartment.deptModalshow(this.titleBatch,this.batchParentId,'新建下级')
            // console.log(this.titleBatch,this.batchParentId)
        },
        editDeptLoad(){
            this.$refs.addDepartment.deptModalshow(this.titleBatch,this.batchParentId,'编辑')
            // console.log(this.titleBatch,this.batchParentId)
        },
        delDeptLoad(){
            if (this.batchParentId === '') {
                this.$message.warning("请选择节点");
                return false
            }
            if (this.titleBatch == '全公司') {
                this.$message.warning("根节点不能删除");
                return false
            }
            let _this=this;
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？',
                okText: '确认',
                cancelText: '取消',
                onOk() {
                    delDeptTree(_this.batchParentId+'/delete').then(res=>{
                        if(res.code==200){
                            _this.$message.success('删除成功');
                            _this.gettreedata()
                        }
                    })
                  },      
                  onCancel() {},
              });
        },
        deptreflash(){
            this.gettreedata()
        }


    },
    created() {
        this.gettreedata()
    }
}