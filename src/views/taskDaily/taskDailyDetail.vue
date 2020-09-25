<template>
<div class="taskDailyDetail">
    <a-card :bordered="false">
        <a-table 
          ref="table"
          size="small"
          :bordered="true"
          :rowKey="(record) =>  record.taskId"
          :columns="columns" 
          :data-source="taskDailyData"      
          :showPagination="false"
          :loading="loading"
        >
        <template slot="action" slot-scope="text, record">         
          <a @click="handleSub(record,2)">查看明细</a>
        </template>
      </a-table>     
      <a-form :form="formField" style="padding:0 20px" v-if="$route.query.approvalStatus=='审批中'">
        <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
            <a-collapse-panel key="1" header="审批">
            <a-col :sm='24' :md ='18' :lg="12">
                <a-form-item label="审批结果" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                    <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['result',validates.result]" :placeholder="'请选择审批结果'">
                        <a-select-option v-for="k in approvalStatusList" :key="k.codeKey" :value="k.codeKey">
                        {{ k.codeValue }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </a-col>
            <a-col :sm='24' :md ='18' :lg="12">
                <a-form-item label="审批备注" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                    <a-textarea  v-decorator="['remark',validates.remark]" :placeholder="'请填写审批备注'" :auto-size="{ minRows: 2, maxRows: 6 }"/>
                </a-form-item>
            </a-col>
            </a-collapse-panel>
            </a-collapse>
        </a-form>
        <footer-tool-bar>
            <a-button @click="goBack">返回</a-button>
            <a-button type="primary" style="margin-left: 8px" v-if="$route.query.approvalStatus=='审批中'" @click="approvalSubmit">提交审批</a-button>
        </footer-tool-bar>

    </a-card>
    <a-modal v-model="visible" title="提交排班计划" :bodyStyle='{padding:10}'  :footer="null">
        <a-row>
          <a-form>  
              <a-form-item v-for="(item,index) in formItem" :key="index" :label="item.name" :label-col="{span:6}" :wrapper-col="{span:12}">
                  <span v-if="item.name=='附件'">
                    <a :href="fileDownLoad+item.value+access_token">附件</a>
                  </span>
                  <span v-else>{{item.value}}</span>
              </a-form-item>
          </a-form>
            <!-- <a-table 
              ref="table"
              size="small"
              :bordered="true"
              :rowKey="(record) =>  record.taskId"
              :columns="columns" 
              :data-source="taskDailyData"      
              :showPagination="false"
              :loading="loading"
            >
          </a-table>   -->
        </a-row>   
    </a-modal>
  </div>
</template>


<script>

import moment from 'moment'
import { taskDailyDetail,taskComplete } from '@/api/other'
import { columns } from './codeList.js'
import { fileUploadApi,fileDownLoad } from '@/api/uploaddown'
import FooterToolBar from '@/layouts/FooterToolbar'

export default {
  name: 'taskDailyDetail',
  title: '日常报销详情',
  components: {
    FooterToolBar
  },
  data() {
    this.columns = columns
    let access_token=sessionStorage.getItem('ACCESS_TOKEN')
    return {
      buttonList:[],
      loading: false,
      taskDailyData: [],
      visible:false,
      formItem:{},
      fileDownLoad:fileDownLoad,
      access_token:'?access_token='+access_token,
      activeKey:'1',
      approvalStatusList:[
          {codeKey:'APPROVE',codeValue:'审批通过'},
          {codeKey:'REJECT',codeValue:'审批驳回'}
      ],
      formField : this.$form.createForm(this, { name: 'staff-approval' }),
      validates:{
        result:{rules: [{ required: true, message: '请输入审批结果' }]},
        remark:{rules: [{ required: true, message: '请输入审批备注' }]}
    },
    }
  },
  filters: {

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
    dataLoad(){
        this.loading = true;
        taskDailyDetail(this.$route.query.id).then(res=>{
          this.taskDailyData=res
          this.loading = false;
        })
    },
    handleSub (record,flag) {
      this.visible=true
      this.formItem=record.list
    }, 
     approvalSubmit(){
      this.formField.validateFields((err, values) => {  
        if (err) return;
        let params={
          result:values['result'],
          remark:values['remark'],
          reimbursementDetailDTOList: this.taskDailyData
        }
        taskComplete(params).then(res=>{
          this.$message.success('审批提交成功')
          this.$router.go(-1)
        })
      })
    },
    goBack(){
      this.$router.go(-1)
    }  
  },
  created() {
    this.dataLoad()
    this.buttonList = this.$route.meta.buttonList?this.$route.meta.buttonList:[]
  }
}
</script>
