import { STable } from '@/components'
import { userVacationPage,getDeptTreeData,userVacationColumn,userVacationDetail,userVacationEdit } from '@/api/user'
export default {
    name: 'vacationBalance',
    title: 'vacationBalance',
    data() {
        return {
            username:'',
            deptId:'',
            treeData:[],
            columns:[],
            // 查询参数
            queryParam: [],
            // 加载数据方法 必须为 Promise 对象
            loadData: parameter => {
                const params = Object.assign( parameter, {filter:{logic: "and",filters:this.queryParam}})
                return userVacationPage(params)
                .then(res => {
                    return res
                })
            }
        };
    },
    components: {
        STable
    },
    methods: {
        userVacationColumnLoad(){
            this.columns=[]
            userVacationColumn().then(res=>{
                this.columns = res.map(ele=>{
                    return {
                      title: ele.name,
                      dataIndex: ele.code
                    }
                  })
                  this.columns.push({
                        title: '操作',
                        dataIndex: 'action',
                        width: '80px',
                        scopedSlots: { customRender: 'action' }
                  })
            })
        },
        handleEdit(record) {
            this.$router.push({
                name:'vacationBalanceDetail',
                query:{
                    userId:record.userId
                }

            })
        },
        deleteData(id) {

        },
        searchRefresh(){
            this.queryParam=[]
            if(this.username){
                this.queryParam.push({"field": "username","operator": "contain","value": this.username})
            }
            if(this.deptId){
                this.queryParam.push({"field": "deptId","operator": "eq","value": this.deptId})
            }
            this.$refs.table.refresh()
        },
        gettreedata() {//获取树
            this.treeData = []
            getDeptTreeData().then(res => {
                let strAdd = JSON.stringify([res]);   
                strAdd = strAdd.replace(/id/g, "value").replace(/name/g, "title").replace(/subDept/g, "children");
                this.treeData =  JSON.parse(strAdd);
            })
        },
    },
    created() {
        this.userVacationColumnLoad()
        this.gettreedata()
    },
};