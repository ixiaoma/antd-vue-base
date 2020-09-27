import { getServiceList,getCodeList } from '@/api/user'
import { saveEditLayout_kpitodo } from '@/api/commonApi'
import moment from 'moment'


export default {
  name: 'StaffForm',
  data(){
    return{
      activeKey:'1',
      approvalStatusList:[
          {codeKey:'审批通过',codeValue:'审批通过'},
          {codeKey:'审批驳回',codeValue:'审批驳回'}
      ],
      formField : this.$form.createForm(this, { name: 'staff-approval' }),
      validates:{
        publishDate: { rules: [{ type: 'object', required: false, message: '请选择开始时间' }] },
        expiryDate: { rules: [{ type: 'object', required: false, message: '请选择结束时间' }] }
    },
    }
  },
  components:{
   
  },
  computed: {
   
  },
  methods: {
    moment,
    handleSubmit(e) {
        console.log(this.bulletinconcent)
        console.log(Base64.encode(this.bulletinconcent))
        e.preventDefault()
        this.form.validateFields((err, values) => {
            if (err) return;  
            values['publishDate']=values['publishDate']?values['publishDate'].format('YYYY-MM-DD HH:mm:ss'):null
            values['expiryDate']=values['expiryDate']?values['expiryDate'].format('YYYY-MM-DD HH:mm:ss'):null
        })
    },
    
  },
  created(){
    // this.codeLoad()
  }
}