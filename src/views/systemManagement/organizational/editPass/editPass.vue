<template>
      <a-modal title="修改密码" :visible="showModal" @cancel="handleCancel">
            <a-form :form="formField">
                <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }">
                    <a-input type="password" v-decorator="['password',validates.password]" placeholder="请输入6-18位密码"/>
                </a-form-item>
                <a-form-item label="确认密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }">
                    <a-input type="password" v-decorator="['password2',validates.password2]" placeholder="确认密码"/>
                </a-form-item>
            </a-form>
             <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary"  @click="editSave">修改</a-button>
            </template>
        </a-modal>
</template>
<script>
import { userPassUpdate } from '@/api/user'
// import {Base64} from 'js-base64'
export default {
    name: 'editPass',
    components: {
       
    },
    data() {
        return {
            id:'',
            showModal:false,
            validates:{
                password:{rules: [{ required: true, message: '请输入密码' }]},
                password2:{rules: [{ required: true, message: '请再次输入密码' }]},
            },
            formField : this.$form.createForm(this, { name: 'edit-pass' }),
        }
    },
    methods: {
       editSave(){
            this.formField.validateFields((err, values) => {
                if (err) return;
                if(values['password'].length<6||values['password'].length>18){
                    this.$message.warning('请输入6-18位密码')
                    return false
                }
                if(values['password']!=values['password2']){
                    this.$message.warning('两次密码输入不一致')
                    return false
                }
                let params={
                    id:this.id,
                    password:values['password']//Base64.encode(this.password)
                }
                userPassUpdate(params).then(res=>{
                    
                        this.$message.success('修改成功')
                        this.showModal=false
                    
                })
            });
           
       },
       openModal(id){
           this.id = id//='1267272966872031234'
           this.showModal=true
       },
       handleCancel(){
           this.showModal=false
       }
    }
}
</script>