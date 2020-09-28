
import moment from 'moment'
import { STable } from '@/components'
import { assessTodoLIst } from '@/api/other'
import { columns } from './codeList.js'
import { fileUploadApi,kpiAssessentExport,kpiAssessentUpload } from '@/api/uploaddown'



export default {
  name: 'assessDone',
  title: '考核待办',
  components: {
    STable
  },
  data() {
    this.columns = columns
    let access_token=sessionStorage.getItem('ACCESS_TOKEN')
    return {
      advanced: false,
      // 查询参数
      queryParam: {
        customerType: 0
      },
      pagination: {},
      page: 1,
      pageSize: 10,
      loading: false,
      todoData: [],
      selectedRowKeys: [],
      selectedRows: [],
      buttonList:[],
      // operationTypeList:['员工创建目标','经理审批','经理第一次评分','员工自评','经理第二次评分'],
      operationTypeList:['经理审批','经理第一次评分','经理第二次评分'],
      operationType:'',
      fileUploadApi:fileUploadApi,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      fileList:[],
      visible:false
    }
  },
  computed: {
    rowSelection() {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
// 操作类型：
// 员工创建目标
// 经理审批
// 经理第一次评分
// 员工自评
// 经理第二次评分
    handleTableChange(pagination) {
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.page = pagination.current
      this.pageSize = pagination.pageSize
      this.noticeDataLoad()
    },
    noticeDataLoad(page) {
      let params = {
        currentPage: page ? page : this.page,
        pageSize: this.pageSize,
      }
      this.loading = true;
      assessTodoLIst(params).then(res => {
        const pagination = { ...this.pagination };
        pagination.total = res.totalCount;
        pagination.current = params.currentPage
        this.page = params.currentPage
        this.loading = false;
        this.todoData = res.records;
        this.pagination = pagination;
      })
    },
   
    handleSub(data,flag) {
      let pageCode='performance_assessment_detail/todo'
      this.$router.push({
          name:'baseForm',
          query:{ title:data.operationType, flag, pageCode:pageCode, id: data ? data.todoId : null,operationType:data?data.operationType:null}
      })
    },
    onSelectChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    exportLoad(){
      if(this.operationType=='经理第一次评分'||this.operationType=='经理第二次评分'||this.operationType=='经理审批'){
        window.location.href=''
      }else{
        this.$message.warning('操作类型为‘经理审批’或‘经理第一次评分’或‘经理第二次评分’才可进行导出')
      }
    },
    uploadLoad(){
      this.fileList=[]
      this.visible=true
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    handleChange(info) {
      this.fileList=info.fileList.slice(-1)
    },
    handleUpload(){
      if(this.fileList.length){
        console.log(this.fileList[0].response)
        this.visible=false
      }else{
        this.$message.warning('请选择文件')
      }
    }
  },
  created() {
    this.noticeDataLoad()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  },
}





