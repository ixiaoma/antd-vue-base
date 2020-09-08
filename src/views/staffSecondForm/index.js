import { STable } from '@/components'
import TableFilter from '@/components/TableFilter/index.vue'
import BaseForm from '@/components/BaseForm/index.vue'
import FooterToolBar from '@/layouts/FooterToolbar'

import { getServiceList } from '@/api/user'

const baseLists = [
  {
    tabName:'社会关系',
    pageCode:'social_relations',
    nullAble:true
  },{
    tabName:'工作经历',
    pageCode:'work_experience'
  },{
    tabName:'教育经历',
    pageCode:'educational_experience',
    nullAble:true
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
      formCode:'',
      selectedRowKeys: [],
      selectedRows: [],
      loadData: []
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
    }
  },
  methods: {
    handleAdd(item){
      this.modalTitle = item.tabName
      this.formCode = item.pageCode
      this.visible = true
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
    }
  },
  created(){
    const { flag } = this.$route.query
    if(flag == 2){
      this.readonly = true
      this.tabLists = [...baseLists,...tabDetailList]
    }else {
      this.tabLists = [...baseLists]
    }
  }
}