import { STable } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import BaseForm from '@/components/BaseForm/index.vue'
import FooterToolBar from '@/layouts/FooterToolbar'
import moment from 'moment'
import { saveEditLayout , saveLayout } from '@/api/commonApi'

import { getServiceList } from '@/api/user'

const baseLists = [
  {
    tabName:'社会关系',
    pageCode:'social_relations',
    nullAble:true , 
    loadData:[],
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
    loadData:[] , 
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
    loadData:[],
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
      tabLists:[],
      activeKey:'1',
      readonly:false,
      visible:false,
      modalTitle:'',
      formCode:'',
      selectedRowKeys: [],
      selectedRows: [],
      loadData: [

      ],
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
  },
  methods: {
    handleAdd(item){
      this.tableIndex = -1 ; 
      this.modalTitle = item.tabName
      this.formCode = item.pageCode
      this.visible = true
    },
    handleEdit(item ,record , index){
      console.log(item , record , 'item record')
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
              if(ele.valueType == 'DATETIME'){
                ele.value =[ moment(record[ele.code] , 'YYYY-MM-DD') ]
                return ; 
              }
              ele.value = [record[ele.code]]
            }
          })
          return item ; 
        })
        console.log(modalForm.layoutList , 'modalForm.layoutList')
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
    onOk(){
      // 将填写信息存入表格数据中
        let modalForm = this.$refs.modalForm ; 
        modalForm.form.validateFields(async (err, values) => {
          if (!err) {
              modalForm.layoutList.forEach(item=>{
                  item.fieldDefineValueList.forEach(ele=>{
                      if(values[ele.code]){
                          let data = values[ele.code]
                          if(ele.valueType == 'DATETIME'){
                            values[ele.code] = moment(values[ele.code]).format('YYYY-MM-DD')
                          }
                      }
                  })
              })
              let { tableIndex } = this ; 
              if( tableIndex == -1 ){ // 新增 
                this.tabLists[this.activeKey - 2].loadData.push(values) ; 
              }else{ // 编辑
                this.tabLists[this.activeKey - 2].loadData.splice(tableIndex , 1 , values) ; 
              }
              this.visible = false ; 
          }
      })
    },
  },
  created(){
    const { flag } = this.$route.query
    if(flag == 2){
      this.readonly = true
      this.tabLists = [...baseLists]
    }else {
      this.tabLists = [...baseLists]
    }
  }
}