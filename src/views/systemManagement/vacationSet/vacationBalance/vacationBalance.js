import { STable } from '@/components'
import { userVacationPage,getDeptTreeData,userVacationColumn,userVacationExport } from '@/api/user'
import { userVacationImport,userVacationDown } from '@/api/uploaddown'
const access_token = sessionStorage.getItem('ACCESS_TOKEN')

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
            },
            visible:false,
            userVacationImport:userVacationImport,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            fileList:[]
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
        //导出余额
        exportLoad(){
            let params={
                "pageNo": 1,
                "pageSize": 10,
                "filter": {
                    "logic": "and",
                    "filters": []
                }
            }
            if(this.username){
                params.filter.filters.push({"field": "username","operator": "contain","value": this.username})
            }
            if(this.deptId){
                params.filter.filters.push({"field": "deptId","operator": "eq","value": this.deptId})
            }
            userVacationExport(params).then(res=>{
                var fileDownload = require('js-file-download')
                let fileName = "余额导出.xlsx";
                fileDownload(res.data,fileName);
            })
        },
        uploadLoad(){
            this.visible=true
        },
        handleChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                this.$message.success('上传成功');
                this.visible=false
            } else if (info.file.status === 'error') {  
                this.$message.error('上传失败');
                this.visible=false
            }
        },
        downLoad(){
            window.location.href=userVacationDown+'?access_token='+sessionStorage.getItem('ACCESS_TOKEN')
        }
    },
    created() {
        this.userVacationColumnLoad()
        this.gettreedata()
    },
};