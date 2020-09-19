<template>
  <a-card :bordered="false">
    <a-row type="flex" justify="center">
      <p style="margin:0 0 10px -100px;font-size:28px;">{{fromdata.title}}</p>
    </a-row>
    <a-row type="flex" style="border-bottom:1px dashed #efefef;margin-top:20px;">
      <a-col span="12" class="color_999">
        <span style="font-weight:700;">创建时间：</span>
        {{fromdata.createDate}}
      </a-col>
      <a-col span="12" class="color_999">
        <div style="float:right">
          <span style="font-weight:700">创建人：</span>
          {{fromdata.createName}}
        </div>
      </a-col>
    </a-row>
    <a-row>
      <a-col span="24" style="margin-top:12px">
        <p ref="bulletinContent"></p>
      </a-col>
    </a-row>
     <a-row type="flex" justify="center">
      <a-button @click="goBack">返回</a-button>
    </a-row>
  </a-card>
</template>
<script>
import { noticeDetail,noticeRead } from '@/api/user'
let Base64 = require('js-base64').Base64
export default {
  name: 'noticeDetail',
  data() {
    return {
      editid: '',
      fromdata: {
          title:'',
          createdDate:'',
          createdBy:''
      },
      bulletinconcent: ''
    }
  },
  components: {},
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    //编辑
    editbulletin() {
      noticeDetail(this.editid).then(res => {
        // if (res.code == 200) {
          this.fromdata = res
          this.$refs.bulletinContent.innerHTML = Base64.decode(res.content)
          this.noticeReadLoad(this.editid)
        // }
      })
    },
    //已读
    noticeReadLoad(id){
        noticeRead(id).then(res => {
        if (res.code == 200) {
          console.log('已读')
        }
      })
    }
  },
  created() {},
  mounted() {
    this.editid = this.$route.query.id
    if (this.editid != '' && this.editid != undefined) {   
        this.editbulletin()
    }
  }
}
</script>