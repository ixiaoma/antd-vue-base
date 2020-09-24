<template>
    <a-form :form="formField" style="padding:0 20px">
    <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
        <a-collapse-panel key="1" header="审批">
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="审批结果" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['approvalStatus',validates.approvalStatus]" :placeholder="'请选择审批结果'">
                    <a-select-option v-for="k in approvalStatusList" :key="k.codeKey" :value="k.codeKey">
                    {{ k.codeValue }}
                    </a-select-option>
                </a-select>
            </a-form-item>
        </a-col>
        <a-col :sm='24' :md ='18' :lg="12">
            <a-form-item label="审批备注" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                <a-textarea  v-decorator="['approvalRemark',validates.approvalRemark]" :placeholder="'请填写审批备注'" :auto-size="{ minRows: 2, maxRows: 6 }"/>
            </a-form-item>
        </a-col>
        </a-collapse-panel>
        </a-collapse>
    </a-form>
</template>
<script>
import { getServiceList,getCodeList } from '@/api/user'
import { saveEditLayout_kpitodo } from '@/api/commonApi'


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
        approvalStatus:{rules: [{ required: true, message: '请输入审批结果' }]},
        approvalRemark:{rules: [{ required: true, message: '请输入审批备注' }]}
    },
    }
  },
  components:{
   
  },
  computed: {
   
  },
  methods: {
    approvalSave(){
      this.formField.validateFields((err, values) => {  
        if (err) return;
        let params={
          approvalStatus:values['approvalStatus'],
          approvalRemark:values['approvalRemark']
        }
        saveEditLayout_kpitodo(this.$route.query.id,params).then(res=>{
          this.$message.success('审批成功')
          this.$router.go(-1)
        })
      })
    }
    
  },
  created(){
    // this.codeLoad()
  }
}
</script>