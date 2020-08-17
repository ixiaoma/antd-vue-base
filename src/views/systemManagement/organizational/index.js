import { STable } from '@/components'
import { Tree } from 'ant-design-vue'
import { getUserList,getDeptTreeData } from '@/api/user'
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
        handleAdd(){},
        handleDetail(record){},
        handleEdit(record){},
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
            this.titleBatch=node.node.title
            this.batchParentId=node.node.dataRef.key
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
            this.$refs.addDepartment.deptModalshow(this.titleBatch,this.batchParentId,'新建')
            console.log(this.titleBatch,this.batchParentId)
        },
        editDeptLoad(){
            this.$refs.addDepartment.deptModalshow(this.titleBatch,this.batchParentId,'编辑')
            console.log(this.titleBatch,this.batchParentId)
        },
        delDeptLoad(){
            
            console.log(this.titleBatch,this.batchParentId)
        }


    },
    created() {
        this.gettreedata()
    }
}