import { STable } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import BaseForm from '@/components/BaseForm/index.vue'
import FooterToolBar from '@/layouts/FooterToolbar'
import moment from "moment"
import { getServiceList } from '@/api/user'
import { 
  basicInfoStorage , 
  basicInfoSave,
  basicInfoCommit,
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
const filterList = []
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
    pageCode:'license_info'
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
      tabLists:[],
      activeKey:'1',
      readonly:false,
      visible:false,
      modalTitle:'',
      currentForm:{},
      selectedRowKeys: [],
      selectedRows: [],
      loadData: parameter => {
        const params = Object.assign({}, parameter, this.queryParam)
        let api = this.currentTab.api[1] ; 
        params["filter"] = 
        {
            filters:[
              {field: "basicInfoId", fieldType: "TEXT_MULTI", operator: "eq", value: this.basicInfoId}
            ],
            logic: "and"
        }
        
        return api(params)
          .then(res => {
            return res
          })
      },
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
    },
    basicForm(){
      return {
        ...this.$route.query
      }
    },
    basicInfoId(){
      return this.$route.query.id
    },
  },
  methods: {
    // tab切换
    changeTabs(e){
      this.activeKey = e ; 
    },

    // 保存
    save(){
      this.$refs.baseForm.handleSubmit()
    },
    // 提交
    submit(){
      this.$refs.baseForm.form.validateFields(async (err, values) => {
        if (!err) {
            let saveData = []
            this.$refs.baseForm.layoutList.forEach(item=>{
                item.fieldDefineValueList.forEach(ele=>{
                  console.log(values[ele.code] , 'values[ele.code]')
                    if(values[ele.code]){
                        let data = values[ele.code]
                        if(ele.valueType == 'DATETIME'){
                            data = moment(values[ele.code]).format('YYYY-MM-DD HH:mm:ss')
                        }
                        saveData.push({
                            code:ele.code,
                            value:[data]
                        })
                    }else{
                      if(ele.value){
                          saveData.push({
                            code:ele.code,
                            value:ele.value
                        })
                      }
                  }
                })
            })
          basicInfoCommit(this.basicInfoId , saveData).then(res=>{
            this.$message.success('提交成功')
            this.$router.go(-1)
          })
        }
    })
     
    },
    // 暂存
    clickStorage(){
      this.$refs.baseForm.form.validateFields(async (err, values) => {
                if (!err) {
                    let saveData = []
                    this.$refs.baseForm.layoutList.forEach(item=>{
                        item.fieldDefineValueList.forEach(ele=>{
                            if(values[ele.code]){
                                let data = values[ele.code]
                                if(ele.valueType == 'DATETIME'){
                                    data = moment(values[ele.code]).format('YYYY-MM-DD HH:mm:ss')
                                }
                                saveData.push({
                                    code:ele.code,
                                    value:[data]
                                })
                            }
                        })
                    })
                  // const param = {
                  //     pageCode:'basic_info',
                  //     params:saveData
                  // }
                  await basicInfoStorage(saveData)
                }
            })
    },
    handleAdd(item){
      this.modalTitle = item.tabName
      this.currentForm = { 
        pageCode : item.pageCode , 
        flag: 1 
       } ; 
      this.visible = true
    },
    // 表格编辑
    handleEdit( data , item ){
      this.modalTitle = item.tabName
      this.currentForm = { 
        pageCode : item.pageCode , 
        flag: 3 ,
        id:data.id
       } ; 
      this.visible = true
    },
    handleFind( data , item ){
      this.modalTitle = item.tabName
      this.currentForm = { 
        pageCode : item.pageCode , 
        flag: 2 ,
        id:data.id
       } ; 
      this.visible = true
    },
    
    nextStep(id){
      this.$message.success('保存成功'); 
      if(this.activeKey > 1){
        return this.visible = false ; 
      }
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
    // 表单提交  id flag 
    onOk(){
      this.$refs.modalForm.handleSubmit()
    },
    // nextStep(res){
    //   this.visible = false ; 
    // },
    
  },
  created(){
    const { flag } = this.$route.query
    if(flag == 2){
      this.readonly = true
      // this.tabLists = [...baseLists,...tabDetailList]
      this.tabLists = [...baseLists]
    }else {
      this.tabLists = [...baseLists]
    }
  }
}