import { getCodeList,homeUserCenter } from '@/api/user'
import { overtimeJudgmentType } from '@/api/other'
import { saveLayout } from '@/api/commonApi'
import moment from 'moment'
import ModelTable from '../ModelTable/modelTable.vue'
import FooterToolBar from '@/layouts/FooterToolbar'


export default {
  name: 'StaffForm',
  data() {
    return {
      pageCode:'overtime',
      activeKey: '1',
      code:'',
      empName:'',
      serviceTypeList: [],
      overtimeTypeList:[],
      form: this.$form.createForm(this, { name: 'staff-approval' }),
      validates: {
        serviceType: { rules: [{ required: true, message: '请选择服务类型' }] },
        startDate: { rules: [{ type: 'object', required: true, message: '请选择开始时间' }] },
        endDate: { rules: [{ type: 'object', required: true, message: '请选择结束时间' }] },
        totalTime:{ rules: [{ required: true, message: '请填写加班原因' }] },
        theReason: { rules: [{ required: true, message: '请填写加班原因' }] },
      },
      workTimeList:[]
    }
  },
  components: {
    ModelTable, FooterToolBar
  },
  computed: {

  },
  methods: {
    moment,
    relativeFn() {//选择关联字段
      this.$refs.modelTable.showModel('workOrder')
    },
    clearRleative() {//清空关联值  
      this.form.setFieldsValue({ workId: '' })
    },
    selectData(data) {//回填关联字段的值
      this.form.setFieldsValue({ workId: data['workOrder'] })
    },
    //服务类型change
    serviceTypeChange(value){
      this.form.setFieldsValue({serviceType:value})
      if(this.form.getFieldValue('startDate')&&this.form.getFieldValue('endDate')&&value){
        this.overtimeJudgmentTypeLoad()
      }
    },
    //开始时间change
    startDateChange(value){
      this.form.setFieldsValue({startDate:value})
      if(value&&this.form.getFieldValue('endDate')&&this.form.getFieldValue('serviceType')){
        this.overtimeJudgmentTypeLoad()
      }
    },
    //结束时间change
    endDateChange(value){
      this.form.setFieldsValue({endDate:value})
      if(this.form.getFieldValue('startDate')&&value&&this.form.getFieldValue('serviceType')){
        this.overtimeJudgmentTypeLoad()
      }
    },
    //判断加班类型,时长，餐补 方法
    overtimeJudgmentTypeLoad(){
      let params={
        startDate:this.form.getFieldValue('startDate')?this.form.getFieldValue('startDate').format('YYYY-MM-DD HH:mm:ss') : null,
        endDate:this.form.getFieldValue('endDate')?this.form.getFieldValue('endDate').format('YYYY-MM-DD HH:mm:ss') : null,
        serviceType:this.form.getFieldValue('serviceType'),
        code:this.code
      }
     this.workTimeListLoad()
      // overtimeJudgmentType(params).then(res=>{
      //   this.workTimeListLoad()//加班类型 页面展示
      // })
    },
    //加班类型 页面展示
    workTimeListLoad(){
      this.workTimeList=[
        {startDate:'2020-09-07 18:00:00',endDate:'2020-09-08 18:00:00',totalTime:'8',overtimeType:'工作日加班',mealSupplement:25},
        {startDate:'2020-10-07 18:00:00',endDate:'2020-10-08 18:00:00',totalTime:'8',overtimeType:'工作日加班',mealSupplement:25}
      ]
      if(this.workTimeList.length==1){
        this.form.setFieldsValue({totalTime:this.workTimeList[0].totalTime})
        this.form.setFieldsValue({overtimeType:this.workTimeList[0].overtimeType})
        this.form.setFieldsValue({mealSupplement:this.workTimeList[0].mealSupplement})
      }
      if(this.workTimeList.length>1){
        let totalTime=0
        let mealSupplement=0
        this.workTimeList.forEach(item=>{
          totalTime+=Number(item.totalTime)
          mealSupplement+=Number(item.mealSupplement)
        })
        this.form.setFieldsValue({totalTime:totalTime})
        this.form.setFieldsValue({mealSupplement:mealSupplement})
      }
    },
    //提交
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (err) return;
        values['startDate'] = values['startDate'] ? values['startDate'].format('YYYY-MM-DD HH:mm:ss') : null
        values['endDate'] = values['endDate'] ? values['endDate'].format('YYYY-MM-DD HH:mm:ss') : null
        let params=[]  
        this.workTimeList.length&&this.workTimeList.forEach(item=>{
          let arr=[
            {"code":"code","value":[this.pageCode]},
            {"code":"empName","value":[this.empName]},
            {"code":"workId","value":[values['workId']]},
            {"code":"totalTime","value":[item['totalTime']]},
            {"code":"overtimeType","value":[item['overtimeType']]},//加班类型
            {"code":"startDate","value":[item['startDate']]},
            {"code":"endDate","value":[item['endDate']]},
            {"code":"theReason","value":[values['theReason']]},
            {"code":"serviceType","value":[values['serviceType']]},	
            {"code":"mealSupplement","value":[item['mealSupplement']]},	
          ]
          params.push(arr)
        }) 
        saveLayout({pageCode:this.pageCode,params}).then(res=>{
          this.$message.success("保存成功")
          this.$router.go(-1)
        })
      })
    },
    initDataLoad(){
       
    },
    goBack(){
      this.$router.go(-1)
    },
    codeLoad(){
      getCodeList('service_type').then(res=>{
        this.serviceTypeList=res
      })
      getCodeList('overTime').then(res=>{
        this.overtimeTypeList=res
      })
    },
    userLoad () {
      homeUserCenter().then(res=>{
          this.code=res.code
          this.empName=res.realName
      })
    }
  },
  created() {
    this.userLoad()
    this.codeLoad()
  }
}