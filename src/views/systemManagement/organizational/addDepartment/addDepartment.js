
import { addDeptTree,editDeptTree,detailDeptTree,delDeptTree,rolesList,getUserList } from '@/api/user'
export default {
    name: 'addDepartment',
    components: {
       
    },
    data() {
        return {
            modaltitle:'新建下级',
            addDepvisible:false,
            confirmLoading:false,
            parentsname:'',
            addfrom:{
                parentId: '',//父级id
                name: '',
                nameShort: '',
                manager: '',
                userIds: [],
                dataAuthority: '',
                roleIds: []
            },
            tableDataUser1: [],//部门负责人数据
            tableDataUser2: [],//观察者数据
            roleData: [],//角色权限数据
            loading1:false,
            loading2:false,
            titleBatch:'',
            batchParentId:''
        }
    },
    methods: {
        deptModalshow(titleBatch,batchParentId,modaltitle){
            if(!titleBatch){
                this.$message.warning('请选择节点');
                return false;
            }
            this.addfrom={
                parentId: '',//父级id
                name: '',
                nameShort: '',
                manager: '',
                userIds: [],
                dataAuthority: '',
                roleIds: []
            }
            if(modaltitle=="新建下级"){
                this.addfrom.parentId=batchParentId
                this.parentsname=titleBatch
                this.addDepvisible=true
            }
            if(modaltitle=='编辑'){
                detailDeptTree(batchParentId).then(res=>{
                    this.addfrom.name = res.name?res.name:''
                    this.addfrom.nameShort = res.nameShort?res.nameShort:''               
                    this.tableDataUser1=res.managerUserList?res.managerUserList:[]//部门负责人      
                    this.tableDataUser2=res.obUsers?res.obUsers:[]//部门工作观察者
                    this.addfrom.dataAuthority = res.dataAuthority.toString()  
                    setTimeout(() => {
                        this.addfrom.roleIds = res.roleIds?res.roleIds.map(item=>item.toString()):[]            
                        this.addfrom.manager=res.manager?res.manager.toString():''//部门负责人
                        this.addfrom.userIds = res.userIds?res.userIds.map(item=>item.toString()):[]//部门工作观察者
                        this.addDepvisible=true
                    }, 300);
                })
            }
            this.titleBatch=titleBatch
            this.batchParentId=batchParentId
            this.modaltitle=modaltitle
            
        },
        handleOk() {
            if(!this.addfrom.name) {
                this.$message.warning('部门名称不能为空');
                return false;
            }
            if(!this.addfrom.nameShort) {
                this.$message.warning('部门简称不能为空');
                return false;
            }
            if(!this.addfrom.dataAuthority) {
                this.$message.warning('部门负责人数据权限不能为空');
                return false;
            }
            let params=JSON.parse(JSON.stringify(this.addfrom))
            if(this.modaltitle=="编辑"){
                delete params.parentId
                params.id=this.batchParentId
                editDeptTree(params).then(res => {
                    // if(res.code==200){
                        this.$message.success('编辑成功');
                        this.addDepvisible=false
                        this.$emit('deptreflash')
                    // }
                    
                })
            }else{
                addDeptTree(params).then(res => {
                    // if(res.code==200){
                        this.$message.success('新建成功');
                        this.addDepvisible=false
                        this.$emit('deptreflash')
                    // }
                    
                })
            }    
            
        },
        handleCancel(){
            this.addDepvisible=false
        },
        ObserverDataload1(value) {//获取部门负责人
            if (value !== '') {
                this.loading1 = true;
                let params = {
                    username: value,
                    pageSize: 100,
                    page:1
                }
                getUserList(params).then(res => {
                    this.loading1 = false;
                    this.tableDataUser1 = res.records
                })
            }
        },
        ObserverDataload2(value) {//获取部门观察者
            if (value !== '') {
                this.loading2 = true;
                let params = {
                    username: value,
                    pageSize: 100,
                    page:1
                }
                getUserList(params).then(res => {
                    this.loading2 = false;
                    this.tableDataUser2 = res.records
                })
            }
        },
        getRoleData() {//获取权限角色       
            let params = {
                enabled: true
            }
            rolesList(params).then(res => {
                this.roleData = res;
            })
        },
        managerChange(e){
            this.addfrom.manager=e
        },
        userIdsChange(e){
            this.addfrom.userIds=e
        },
        dataAuthorityChange(e){
            this.addfrom.dataAuthority=e
        },
        roleIdsChange(e){
            this.addfrom.roleIds=e
        },
    },
    created() {
        this.getRoleData()
    }
}