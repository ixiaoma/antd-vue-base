import { STable } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import BaseForm from '@/components/BaseForm/index.vue'
import FooterToolBar from '@/layouts/FooterToolbar'
import moment from 'moment'
import { 
  basicInfoStorage , 
  basicInfoSave,
  socialRelationsSave , 
  socialRelationsPage , 
  socialRelationsEdit ,
  workExperienceSave , 
  workExperiencePage , 
  workExperienceEdit ,
  educationalExperienceSave , 
  educationalExperiencePage , 
  educationalExperienceEdit 
} from "@/api/reimbursement"
const filterList = [
  {
    searchLabel: '员工工号',
    searchKey: 'staffCode'
  }
]
const baseLists = [
  {
    tabName:'社会关系',
    pageCode:'social_relations',
    field: 'socialRelations' , 
    nullAble:true , 
    loadData:[],
    filterList , 
    api:[ 
      socialRelationsSave , 
      socialRelationsPage , 
      socialRelationsEdit 
    ],
    columns:[
      {
        title: '序号',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '与本人关系',
        dataIndex: 'relationshipWithMyself'
      },
      {
        title:'成员姓名',
        dataIndex: 'memberName'
      },
      {
        title:'出生日期',
        dataIndex: 'memberDate'
      },
      {
        title:'工作单位及职务',
        dataIndex:'workUnitAndPosition'
      },
      {
        title:'政治面貌',
        dataIndex:'politicCountenance'
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  },{
    tabName:'工作经历',
    pageCode:'work_experience',
    field:'workExperience' ,
    loadData:[] , 
    api: [ 
      workExperienceSave , 
      workExperiencePage , 
      workExperienceEdit
    ] , 
    columns:[
      {
        title: '序号',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '工作起始时间',
        dataIndex: 'workStartDate'
      },
      {
        title:'工作结束时间',
        dataIndex: 'workEndDate'
      },
      {
        title:'所在单位',
        dataIndex: 'unitBelongs'
      },
      {
        title:'从事工作或担任职务',
        dataIndex:'workOrDuty'
      },
      {
        title:'工作内容',
        dataIndex:'jobContent'
      },
      {
        title:'证明人',
        dataIndex:'witness'
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  },{
    tabName:'教育经历',
    pageCode:'educational_experience',
    nullAble:true,
    field:'educationalExperience',
    loadData:[],
    api:[
      educationalExperienceSave , 
      educationalExperiencePage , 
      educationalExperienceEdit 
    ] , 
    columns:[
      {
        title: '序号',
        scopedSlots: { customRender: 'serial' }
      },
      {
        title: '学位证书编号',
        dataIndex: 'degreeCertificateNumber'
      },
      {
        title:'所学专业',
        dataIndex: 'studySpeciality'
      },
      {
        title:'入学时间',
        dataIndex: 'studyStartTime'
      },
      {
        title:'学习形式',
        dataIndex:'studyType'
      },
      {
        title:'学制',
        dataIndex:'studyPeriod'
      },
      {
        title:'毕业时间',
        dataIndex:'graduationTime'
      },
      {
        title:'毕业院校',
        dataIndex:'graduateSchool'
      },
      {
        title: '操作',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' }
      }
    ]
  }
]

const tabDetailList = [
  {
    tabName:'证件资料',
    pageCode:'license'
  },{
    tabName:'合同管理',
    pageCode:'management'
  },{
    tabName:'员工调动',
    pageCode:'transfer'
  },{
    tabName:'员工离职',
    pageCode:'leave_office'
  }
]

export default {
  name: 'StaffForm',
  data(){
    return{
      filterList,
      tabLists:[],
      activeKey:'1',
      readonly:false,
      visible:false,
      modalTitle:'',
      formCode:'',
      selectedRowKeys: [],
      selectedRows: [],
      loadData: parameter => {
        const params = Object.assign({}, parameter, this.queryParam)
        let api = this.currentTab.api[1] ; 
        return api(params)
          .then(res => {
            return res.result
          })
      },
      tableIndex: -1 , // -1 新建 ， >=0 编辑某项
    }
  },
  components:{
    STable,
    TableFilter,
    BaseForm,
    FooterToolBar
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    },
    currentTab(){
      let { activeKey } = this ; 
      return this.tabLists[activeKey - 2 ] ; 
    }
  },
  methods: {
    // 暂存
    clickStorage(){
      this.handleParams()
    }, 
    // 提交
    saveStorage(){
      this.handleParams('save')
    },

    // 参数处理
    handleParams(type){
     
      this.handleFormByTable('baseForm' , values=>{
          let api = basicInfoStorage  ; 
          if(type == 'save') api = basicInfoSave ; 
          let { tabLists } = this ; 
          let params = { 
            basicInfo: values , 
          }
          tabLists.forEach((item,index)=>{
            params[item['field']] = item.loadData ; 
          })
          if(type == 'save'){ // 判断必填
            
          }
          api(params) ; 
      })
      return ; 
      this.$refs.baseForm.form.validateFields(async (err, values) => {
        if (!err) {
          let { tabLists } = this ; 
          let params = {
            basicInfo: values , 
          }
          tabLists.forEach((item,index)=>{
            params[item['field']] = item.loadData ; 
          })
          console.log(params , 'storage params') ; 
          api(params) ; 
        }else{
          this.$message.error('请填写完整基本信息')
        }
      })
    },
    
    // 缓存回填
    storageFill(){
      let tabLists = this.tabLists ; 
      let res = {
        basicInfo: {},
        socialRelations: [] , 
        workExperience: [] ,
        educationalExperience: []
      }
      this.tabLists = tabLists.map((item , index) =>{
        item.loadData = res[item.field] ; 
        return item ; 
      })
    }, 

    handleAdd(item){
      this.tableIndex = -1 ; 
      this.modalTitle = item.tabName
      this.formCode = item.pageCode
      this.visible = true
    },
    handleEdit(item ,record , index){
      this.tableIndex = index ; 
      this.modalTitle = item.tabName
      this.formCode = item.pageCode
      this.visible = true
      let timer = setTimeout(() => {
        clearTimeout(timer)
        let modalForm = this.$refs.modalForm ;
        modalForm.layoutList = modalForm.layoutList.map(item =>{
          item.fieldDefineValueList.forEach(ele=>{
            if(ele.code){
              ele.value = [record[ele.code]]
            }
          })
          return item ; 
        })
      }, 200);
    },
    nextStep(id){
      this.$router.push({query:{...this.$route.query,id,flag:3}})
      this.activeKey = '2'
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    goBack(){
      this.$router.go(-1)
    },

    // 将form数据格式转成表格格式
    handleFormByTable(formRef , callback , errCallback = ()=>{}){
      let form = this.$refs[formRef] ; 
      form.form.validateFields(async (err, values) => {
          if (!err) {
            form.layoutList.forEach(item=>{
                  item.fieldDefineValueList.forEach(ele=>{
                      if(values[ele.code]){
                          if(ele.valueType == 'DATETIME'){
                            values[ele.code] = moment(values[ele.code]).format('YYYY-MM-DD')
                          }
                      }
                  })
              })
              callback(values)
          }else{
            errCallback( err )
          }
      })
    },  

    getList(){
      return parameter => {
        const params = Object.assign({}, parameter, this.queryParam)
        return this.currentTab.api[1](params)
          .then(res => {
            return res.result
          })
      }
    },

    onOk(){
      // 将填写信息存入表格数据中
      this.handleFormByTable('modalForm' , values=>{
        let { tableIndex } = this ; 
        if( tableIndex == -1 ){ // 新增 
          this.tabLists[this.activeKey - 2].loadData.push(values) ; 
        }else{ // 编辑
          this.tabLists[this.activeKey - 2].loadData.splice(tableIndex , 1 , values) ; 
        }
        this.visible = false ; 
      })
    },
    // tab切换回调
    changeActiveKey(activeKey){

    }
  },
  created(){
    const { flag } = this.$route.query
    if(flag == 2){
      this.readonly = true
      this.tabLists = [...baseLists]
    }else {
      this.tabLists = [...baseLists]
    }
    this.storageFill()
  }
}