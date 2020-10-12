<template>
      <a-modal title="修改密码" :visible="showModal" @cancel="handleCancel">
            <a-form>
                <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }" :required="true">
                    <a-input type="password" v-model="password" placeholder="请输入6-18位密码"/>
                </a-form-item>
                <a-form-item label="确认密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }" :required="true">
                    <a-input type="password" v-model="password2" placeholder="确认密码"/>
                </a-form-item>
            </a-form>
             <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary"  @click="editSave">修改</a-button>
            </template>
        </a-modal>
</template>
<script>
import { agentPassword } from '@/api/systemManage'
import {Base64} from 'js-base64'
export default {
    name: 'editPass',
    components: {
       
    },
    data() {
        return {
            id:'',
            password:'',
            password2:'',
            showModal:false
        }
    },
    methods: {
       editSave(){
           if(!this.password){
               this.$message.warning('请填写密码')
               return false
           }
           if(this.password.length<6||this.password.length>18){
               this.$message.warning('请输入6-18位密码')
               return false
           }
           if(this.password!=this.password2){
               this.$message.warning('两次密码输入不一致')
               return false
           }
           let params={
               id:this.id,
               password:Base64.encode(this.password)
           }
           agentPassword(params).then(res=>{
               if(res.code == 200){
                   this.$message.success('修改成功')
                   this.showModal=false
               }
           })
       },
       openModal(id){
           this.id=id
           this.showModal=true
       },
       handleCancel(){
           this.showModal=false
       }
    }
}
</script>