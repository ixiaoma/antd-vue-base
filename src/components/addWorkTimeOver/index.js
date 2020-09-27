import { getCodeList } from '@/api/user'
import moment from 'moment'
import ModelTable from '../ModelTable/modelTable.vue'
import FooterToolBar from '@/layouts/FooterToolbar'


export default {
  name: 'StaffForm',
  data() {
    return {
      activeKey: '1',
      serviceTypeList: [],
      form: this.$form.createForm(this, { name: 'staff-approval' }),
      validates: {
        serviceType: { rules: [{ required: true, message: '请选择服务类型' }] },
        startDate: { rules: [{ type: 'object', required: true, message: '请选择开始时间' }] },
        endDate: { rules: [{ type: 'object', required: true, message: '请选择结束时间' }] },
        totalTime:{ rules: [{ required: true, message: '请填写加班原因' }] },
        theReason: { rules: [{ required: true, message: '请填写加班原因' }] },
      },
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
    startDateChange(value){
      let startDate=value?value.format('YYYY-MM-DD HH:mm:ss') : null
      let endDate=this.form.getFieldValue('endDate')?this.form.getFieldValue('endDate').format('YYYY-MM-DD HH:mm:ss') : null
      console.log(startDate,endDate)
    },
    endDateChange(value){
      let startDate=this.form.getFieldValue('startDate')?this.form.getFieldValue('startDate').format('YYYY-MM-DD HH:mm:ss') : null
      let endDate=value?value.format('YYYY-MM-DD HH:mm:ss') : null
      console.log(startDate,endDate)
    },
    handleSubmit(e) {
      console.log(this.bulletinconcent)
      console.log(Base64.encode(this.bulletinconcent))
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (err) return;
        values['startDate'] = values['startDate'] ? values['startDate'].format('YYYY-MM-DD HH:mm:ss') : null
        values['endDate'] = values['endDate'] ? values['endDate'].format('YYYY-MM-DD HH:mm:ss') : null
      })
    },
    goBack(){
      this.$router.go(-1)
    },
    codeLoad(){
      getCodeList('service_type').then(res=>{
        this.serviceTypeList=res
      })
    }
  },
  created() {
    this.codeLoad()
  }
}