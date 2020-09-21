<template>
  <div class="resumeList">
      <search-table 
        ref="searchTable" 
        :pageCode='pageCode' 
        :showSelect="true"
      >
        <a-button @click="updateStatus">更新简历状态</a-button>
      </search-table>
       <a-modal
        title="更新简历状态"
        :visible="updateVisible"
        @ok="handleOk"
        @cancel="handleCancel"
      >
       <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-form-item label="简历状态"> 
            <a-select 
              style="width: 100%" 
              v-model="status"
              placeholder="选择简历状态"
            >
                <a-select-option 
                :value="item.codeKey" 
                v-for="(item,index) in updateList" 
                :key="item.codeKey">
                  {{item.codeValue}}
                </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="原因">
              <a-textarea v-model="reason" placeholder="请填写原因" :rows="4" />
          </a-form-item>
       </a-form>
    </a-modal>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
import { resumeUpdateStatus } from "@/api/reimbursement"
import { getCodeList } from "@/api/user"
import { status } from 'nprogress'
let updateList = [
  {value : 1 , name : '待定'},
  {value : 2 , name : '推荐'},
  {value : 3 , name : '不推荐'},
  {value : 4 , name : '通过'},
  {value : 5 , name : '驳回'},
]
export default {
  name:'resumeList',
  data () {
    return {
      pageCode:'resume',
      updateVisible: false , // 更新简历弹窗
      updateList:[],
      reason:'' , // 原因
      status: undefined , // 状态
      codeList1: [] ,  // 待定
      codeList2: [] ,  // 推荐
      codeList3:[]
    }
  },
  computed:{
    
  },
  components: {
    SearchTable
  },
  created(){
    // resume_status_update_one resume_status_update_two
    getCodeList('resume_status_update_one').then(res=>{
      this.codeList1 = res ; 
    })
    getCodeList('resume_status_update_two').then(res=>{
      this.codeList2 = res ; 
    })
    getCodeList('resume_status_update_three').then(res=>{
      this.codeList3 = res ; 
    })
    
  },
  methods:{
    handleOk(){
      let { status , reason } = this ; 
      let { selectedRows , selectedRowKeys } = this.$refs.searchTable ; 
      if(!this.status) return this.$message.warning('请选择简历状态')
      let params = {
        resumeStatus : status  ,
        reason
      }
      resumeUpdateStatus(selectedRowKeys[0], params).then(res=>{
        this.$message.success('更新简历成功');
        this.$refs.searchTable.$refs.table.refresh()
        this.updateVisible = false ; 
      })
    },
    handleCancel(){
      this.updateVisible = false ; 
    },
    // 更新简历状态
    updateStatus(){
      // id params 
      let { selectedRows , selectedRowKeys } = this.$refs.searchTable ; 
      if(selectedRows.length!=1) return this.$message.warning('只能选择一条数据更新简历')
      this.reason = '' ; 
      this.status = selectedRows[0].resumeStatus
      if(this.status == '待定'){
        this.updateList = this.codeList1; 
      }else if(this.status == '推荐' ){
        this.updateList = this.codeList2; 
      }else if(this.status == '未读' ){
        this.updateList = this.codeList3; 
      }else{
        return  this.$message.warning(`${selectedRows[0].resumeStatus}状态不能修改`)
      }
      this.updateVisible = true ; 
    },
  }
}
</script>
