import { STable } from '@/components'
import { lableData,getUserList,agentDelete,agentEnable,getEnterpriseList } from '@/api/systemManage'
import addAccount from './addAccount/addAccount.vue'
import editPass from './editPass/editPass.vue'
export default {
    name: 'sysAccountManage',
    components: {
        STable,
        addAccount,
        editPass
    },
    data() {
        return {
            realName:'',
            cellphone:'',
            loginName:'',
            enabled:'',
            enabledlist:[{ label: '启用', value: "1" }, { label: '禁用', value: "0" }],
            columns: [
                {title: '姓名',dataIndex: 'realName'},
                {title: '登录名',dataIndex: 'loginName'},
                {title: '手机号',dataIndex: 'cellphone'},
                {title: '用户类型',dataIndex: 'userType'},
                {title: '所属公司',dataIndex: 'companyName'},
                {title: '启用禁用状态',dataIndex: 'enabled',scopedSlots: { customRender: 'enabledSlots' }},
                {title: '操作',dataIndex: 'action',scopedSlots: { customRender: 'operationSlots' }},
            ],
            filterList:[
                {
                    title: '姓名',
                    dataIndex: 'realName'
                },
                {
                    title: '登录名',
                    dataIndex: 'loginName'
                },
                {
                    title: '手机号',
                    dataIndex: 'cellphone'
                },
                {
                    title: '用户类型',
                    type:'Select',
                    dataIndex: 'userType',
                    selectList:[]
                },
                {
                    title: '所属公司',
                    type:'Select',
                    dataIndex: 'companyId',
                    selectList:[]
                },
                {
                    title: '状态',
                    type:'Select',
                    dataIndex: 'enabled',
                    selectList:[
                        {key:1,value:'启用'},
                        {key:0,value:'禁用'}
                    ]
                }
            ],
            pageNo:1,
            totalCount:0,
            loadData: [
                {realName:'张三',loginName:'zhangsan',cellphone:'15650998800',userType:'',companyName:'中国烟草',enabled:false},
                {realName:'李四',loginName:'lisi',cellphone:'18300990800',userType:'',companyName:'中国烟草',enabled:false}
            ],
                // getUserList(parameter).then(res => {
                //     this.pageNo=res.data.pageNo
                //     this.totalCount=res.data.totalCount
                //     return res
                // })
            // },
            selectedRowKeys: [],
            selectedRows: [],
        }
    },
    methods: {
        refresh(){
            this.$refs.table.refresh(true)
        },
        resetLoad(){
            this.realName=''
            this.cellphone=''
            this.loginName=''
            this.enabled=''
            this.$refs.table.refresh(true)
        },
        onSelectChange(selectedRowKeys, selectedRows) {
            this.selectedRowKeys = selectedRowKeys
            this.selectedRows = selectedRows
        },
        changeSwitch(record) {//启用禁用
            let params={
                enable:record.enabled==1?0:1
            }
            agentEnable(record.id,params).then(res=>{
                if(res.code == 200) {
                    // this.refresh();
                    this.$refs.table.refresh(false)
                }
            })
        },
        addAccount() {
            this.$refs.addAccount.openModal('add');
        },
        toDetail(obj) {
            this.$refs.addAccount.openModal('detail',obj.id);
        },
        toEdit(obj) {
            this.$refs.addAccount.openModal('edit',obj.id);
        },
        toPass(obj) {
            this.$refs.editPass.openModal(obj.id);
        },
        toDelete(obj) {
            let _self = this
            this.$confirm({
                title: '温馨提示',
                content: '确认删除？删除后数据无法恢复！',
                okText: '确认',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    agentDelete([obj.id]).then(res => {
                        if (res && res.code == '200') {
                            _self.refresh()
                            _self.$message.success('删除成功');
                        }
                    })
                },
                onCancel() { }
            });
        },
        //用户类型
        async usertypeLoad(){
            let params={
                categoryCode:'admin_user_type'
            }
            const res = await lableData(params)
            const listData = res.data.map(ele=>{
                return{
                    key:ele.codeKey,
                    value:ele.codeValue
                }
            })
            return listData
        },
        async getCompanyList() {
            const params = {
              "pageNo": 1,
              "pageSize": 5000,
              searchFilter: { filters: [{"field":"state","operator":"eq","value":1}], logic: "and" }
            }
            const res = await getEnterpriseList(params)
            const listData = res.data.records.map(ele=>{
                return{
                    key:ele.id,
                    value:ele.companyName
                }
            })
            return listData
        },
        async initData(){
            const userList = [
                {realName:'张三',loginName:'zhangsan',cellphone:'15650998800',userType:'',companyName:'中国烟草',enabled:false}
            ]
            
            // this.filterList.forEach(ele=>{
            //     if(ele.dataIndex == 'userType') ele.selectList = userList
            //     if(ele.dataIndex == 'companyId') ele.selectList = companyList
            // })
        } 
    },
    created(){
        this.initData()
    }
}