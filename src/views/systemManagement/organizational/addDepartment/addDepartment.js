
import { addDeptTree,editDeptTree,detailDeptTree,delDeptTree,rolesList,getUserList } from '@/api/user'
export default {
    name: 'organizational',
    components: {
       
    },
    data() {
        return {
            modaltitle:'新建',
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
            loading2:false
        }
    },
    methods: {
        deptModalshow(titleBatch,batchParentId,modaltitle){
            if(!titleBatch){
                this.$message.warning('请选择节点');
                return false;
            }
            // this.adddepartment.parentId = ''
            // this.parentsname = this.departmentName
            this.addfrom={
                parentId: batchParentId,//父级id
                name: '',
                nameShort: '',
                manager: '',
                userIds: [],
                dataAuthority: '',
                roleIds: []
            }

            if(modaltitle=='编辑'){
                detailDeptTree(batchParentId).then(res=>{
                    this.addfrom.name = res.data.name?res.data.name:''
                    this.addfrom.nameShort = res.data.nameShort?res.data.nameShort:''
                    this.addfrom.dataAuthority = res.data.dataAuthority?res.data.dataAuthority:''                
                    this.tableDataUser1=res.data.managerUserList?res.data.managerUserList:[]//部门负责人      
                    this.tableDataUser2=res.data.obUsers?res.data.obUsers:[]//部门工作观察者
                    setTimeout(() => {
                        this.addfrom.roleIds = res.data.roleIds?res.data.roleIds:[]            
                        this.addfrom.manager=res.data.manager?res.data.manager:''//部门负责人
                        this.addfrom.userIds = res.data.userIds?res.data.userIds:[]//部门工作观察者
                        this.addDepvisible=true
                    }, 300);
                })
            }else{
                this.addDepvisible=true
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
            let params=this.addfrom
            addDeptTree(params).then(res => {
       
            })
        },
        handleCancel(){},
        handleChange(){},
        ObserverDataload1(value) {//获取部门负责人
            if (value !== '') {
                this.loading1 = true;
                let params = {
                    nickname: value,
                    pageSize: 100,
                    page:1
                }
                getUserList(params).then(res => {
                    this.loading1 = false;
                    this.tableDataUser1 = res.data.records
                })
            }
        },
        ObserverDataload2(value) {//获取部门观察者
            if (value !== '') {
                this.loading2 = true;
                let params = {
                    nickname: value,
                    pageSize: 100,
                    page:1
                }
                getUserList(params).then(res => {
                    this.loading2 = false;
                    this.tableDataUser2 = res.data.records
                })
            }
        },
        getRoleData() {//获取权限角色       
            let params = {
                enabled: true
            }
            rolesList(params).then(res => {
                this.roleData = res.data;
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