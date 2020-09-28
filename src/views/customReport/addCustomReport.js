import { getCateValuePage,customReportSave,customReportDetail } from '@/api/user'
import { fieldDefinedList } from '@/api/setting'

export default {
  name: 'addCustomReport',
  title: 'addCustomReport',
  components: {},
  data() {
    return {
      name: '',
      template: '',
      sort: '',
      templateList: [],
      columns: [
        {
          title: '名称',
          dataIndex: 'fieldName'
        },
        {
          title: '排序',
          dataIndex: 'sort',
          scopedSlots: { customRender: 'sort' }
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      settingColumns:[ 
        {
            title: '名称',
            dataIndex: 'name',
        }
    ],
      tableDataList: [],
      tableDataSearch: [],
      tableDataExport: [],
      tableDataAll:[],
      settingTableData:[],
      selectCodeList:[],
      selectList:[],
      isModal: false,
      modalType:'',//判断哪种类型（列表显示，查询条件，导出）
      selectedRowKeys: [],
      rowSelectionList:[],
      loading:false,
      tableshow:false
    }
  },
  computed: {
    rowSelection () {
      return {  
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
},
  methods: {
    handleCancel(){
        this.isModal=false
    },
    handleOk(){
        this.isModal=false
        this.selectCodeList=this.selectedRowKeys
        if(this.modalType==1){
            this.rowSelectionList.forEach(item => {
                let obj={
                    fieldCode:item.code,
                    fieldName:item.name,
                    sort:1
                }
                this.tableDataList.push(obj)
            });
            
        }
        if(this.modalType==2){
            this.rowSelectionList.forEach(item => {
                let obj={
                    fieldCode:item.code,
                    fieldName:item.name,
                    sort:1
                }
                this.tableDataSearch.push(obj)
            });
        }
        if(this.modalType==3){
            this.rowSelectionList.forEach(item => {
                let obj={
                    fieldCode:item.code,
                    fieldName:item.name,
                    sort:1
                }
                this.tableDataExport.push(obj)
            });
        }
    },
    onSelectChange(selectedRowKeys,rowSelectionList) {
        this.selectedRowKeys = selectedRowKeys;
        this.rowSelectionList = rowSelectionList;
        console.log(this.selectedRowKeys)
        console.log(this.rowSelectionList)
    },
    //排序事件，解决双向数据绑定问题
    sortchange(value, index, sort) {
      if (value == 1) {
        this.tableDataList[index].sort = sort
      } else if (value == 2) {
        this.tableDataSearch[index].sort = sort
      } else if (value == 3) {
        this.tableDataExport[index].sort = sort
      }
    },
    //配置按钮
    configload(value) { 
      this.selectedRowKeys = [];
      this.rowSelectionList = [];
      this.modalType = ''
      if (!this.template) {
        this.$message.warning('请选择报表模板')
        return false
      }
      this.clear=setInterval(()=>{//全部字段加载完才进行数组相减/展示模态框,因为接口太慢了，接口快了之后可以删除，直接this.tableDataload(value)
          if(this.tableshow){
              this.tableDataload(value)
              clearInterval(this.clear)
          }
      },100)
    },
    //数组相减
    tableDataload(value) {
      let tableDataAll=JSON.parse(JSON.stringify(this.tableDataAll))
      let arr=value==1?this.tableDataList.map(item2=>item2.fieldCode):value==2?this.tableDataSearch.map(item2=>item2.fieldCode):value==3?this.tableDataExport.map(item2=>item2.fieldCode):[]
      let tableArr = tableDataAll.filter(item => arr.indexOf(item.code)==-1);
      let arrEnd = [];
      if(value == '1'||value == '2'){
        tableArr.forEach(item=> {
            if(item.authDisplay){
                arrEnd.push(item);
            }
        })
    }
      if(value == '3'){
          tableArr.forEach(item=> {
              if(item.authExport){
                  arrEnd.push(item);
              }
          })
      }
      this.settingTableData = arrEnd;
      this.modalType=value
      this.isModal = true
    },
    //删除字段
    remove(row, index, value) {
      value == 1 ? this.tableDataList.splice(index, 1) : value == 2? this.tableDataSearch.splice(index, 1):this.tableDataExport.splice(index, 1)
    },

    //总体保存
    save() {
        if(!this.template){
            this.$message.warning("请选择报表模板")
            return false
        }
        if(!this.name){
            this.$message.warning("请填写报表名称")
            return false
        }
        if(this.sort===""||this.sort===null||this.sort===undefined){
            this.$message.warning("请填写报表排序")
            return false
        }
        if(!this.tableDataSearch.length||!this.tableDataList.length||!this.tableDataExport.length){
            this.$message.warning("报表查询列表字段,报表查询条件字段,报表导出字段都必选一个")
            return false
        }
        let params={
            name: this.name,
            objectType: this.template,
            sort: this.sort,
            conditionConfigs:this.tableDataSearch,//查询条件
            listConfigs:this.tableDataList,//列表
            exportConfigs:this.tableDataExport//导出
        }
        if(this.$route.query.id){
            params.id=this.$route.query.id
        }
        customReportSave(params).then(res => {
            this.$message.success("操作成功")         
            this.$router.go(-1)          
        })
    },
    //详情
    showedit(){
        customReportDetail(this.$route.query.id).then(res => {
            this.getFieldList(this.template)
            this.tableDataSearch=res.conditionConfigs
            this.tableDataList=res.listConfigs
            this.tableDataExport=res.exportConfigs
        })
    },

    //报表模板
    templateLoad(){
      let params={
          "pageNo": 1,
          "pageSize": 1000,
          filter:{}
      }
      getCateValuePage('custom_report_temp',params).then(res => {
        this.templateList=res.records
      })
    },
    // 配置选择
    getFieldList(){
        this.tableDataList=[]
        this.tableDataSearch=[]
        this.tableDataExport=[]
        this.tableDataAll=[]
        this.tableshow=false
        fieldDefinedList(this.template).then(res=>{
            this.tableDataAll=res
            this.tableshow=true
        })
    },
  },
  created(){
    this.templateLoad()
    this.name=this.$route.query.name
    this.template=this.$route.query.template
    this.sort=this.$route.query.sort
    if(this.$route.query.id){
        this.showedit()
    }
  }
}