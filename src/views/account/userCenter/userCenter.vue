<template>
  <div class="userCenter">
    <a-card style="width:100%">
      <a-form :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-row>
            <a-col span="12">
                <a-form-item label="姓名">{{formItem.realName}}</a-form-item>
            </a-col>
             <a-col span="12">
                 <a-form-item label="昵称">{{formItem.username}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="工号">{{formItem.code}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="手机号">{{formItem.cellphone}}</a-form-item>
            </a-col>
             <a-col span="12">
                 <a-form-item label="邮箱">{{formItem.email}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="办公地址">{{formItem.workCity}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="岗位">{{formItem.position}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="电话额度">{{formItem.totalCredit}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="员工状态">{{formItem.status}}</a-form-item>
            </a-col>
             <a-col span="12">
                 <a-form-item label="身份证号">{{formItem.idCard}}</a-form-item>
            </a-col>
             <a-col span="12">
                <a-form-item label="性别">{{formItem.sex}}</a-form-item>
            </a-col>
            <a-col span="12">
                <a-form-item label="出生日期">{{formItem.birthday}}</a-form-item>
            </a-col>
            <a-col span="12">
                <a-form-item label="入职日期">{{formItem.employmentDate}}</a-form-item>
            </a-col>
        </a-row>  
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { homeUserCenter } from '@/api/user.js'
export default {
    name:'个人中心',
    tiele:'个人中心',
  components: {
   
  },
  data () {
    return {
     formItem:{}
    }
  },
  methods: {
    userLoad () {
      homeUserCenter().then(res=>{
          this.formItem=res
      })
    }
  },
  created(){
      this.userLoad()
  }
}
</script>

<style lang="less" scoped>
.userCenter {

}
</style>
