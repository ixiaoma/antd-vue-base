<template>
  <div class="fd-nav-content">
      <div class="save-btn">
        <a-button type="primary" class="btn1" @click="saveFlow">保存</a-button>
        <a-button type="primary" @click="release">发 布</a-button>
      </div>
			<section class="dingflow-design">
        <div class="zoom">
					<div :class="'zoom-out'+ (nowVal==50?' disabled':'')" @click="zoomSize(1)"></div>
					<span>{{nowVal}}%</span>
					<div :class="'zoom-in'+ (nowVal==300?' disabled':'')" @click="zoomSize(2)"></div>
				</div>
        <div class="box-scale" id="box-scale" :style="'transform: scale('+nowVal/100+'); transform-origin: 50% 0px 0px;'">
					<nodeWrap :nodeConfig.sync="nodeConfig" :flowPermission.sync="flowPermission"
						:isTried.sync="isTried" :directorMaxLevel="directorMaxLevel" :tableId="tableId"></nodeWrap>
					<div class="end-node">
						<div class="end-node-circle"></div>
						<div class="end-node-text">流程结束</div>
					</div>
				</div>
      </section>
		</div>
</template>

<script>
  import nodeWrap from './NodeWrap/nodeWrap.vue'
  import { getApprovalDate,saveApproval } from '@/api/approval'
  const returnData = {
    "tableId": 1,
    "workFlowVersionId": "",
    "workFlowDef": {
        "name": "合同审批",
        "publicFlag": 1,
        "sortNo": 5,
        "duplicateRemovelFlag": 1,
        "optionTip": "",
        "optionNotNull": 0,
        "status": 1
    },
    "directorMaxLevel": 4,
    "flowPermission": [],
    "nodeConfig": {
        "pkId": "sid-start-node",
        "nodeName": "发起人",
        "type": 0,
        "priorityLevel": "",
        "settype": "",
        "selectMode": "",
        "selectRange": "",
        "examineRoleId": "",
        "directorLevel": "",
        "replaceByUp": "",
        "examineMode": "",
        "noHanderAction": "",
        "examineEndType": "",
        "examineEndRoleId": "",
        "examineEndDirectorLevel": "",
        "ccSelfSelectFlag": "",
        "conditionList": [],
        "nodeUserList": [],
        "childNode": {
            "nodeName": "审核人",
            "error": false,
            "type": 1,
            "settype": 2,
            "selectMode": 0,
            "selectRange": 0,
            "directorLevel": 1,
            "replaceByUp": 0,
            "examineMode": 1,
            "noHanderAction": 2,
            "examineEndDirectorLevel": 0,
            "childNode": {
                "nodeName": "路由",
                "type": 4,
                "priorityLevel": 1,
                "settype": 1,
                "selectMode": 0,
                "selectRange": 0,
                "examineRoleId": 0,
                "directorLevel": 1,
                "replaceByUp": 0,
                "examineMode": 1,
                "noHanderAction": 2,
                "examineEndType": 0,
                "examineEndRoleId": 0,
                "examineEndDirectorLevel": 1,
                "ccSelfSelectFlag": 1,
                "conditionList": [],
                "nodeUserList": [],
                "childNode": {
                    "nodeName": "抄送人",
                    "type": 2,
                    "ccSelfSelectFlag": 1,
                    "childNode": null,
                    "nodeUserList": [],
                    "error": false
                },
                "conditionNodes": [{
                    "nodeName": "条件1",
                    "type": 3,
                    "priorityLevel": 1,
                    "settype": 1,
                    "selectMode": 0,
                    "selectRange": 0,
                    "examineRoleId": 0,
                    "directorLevel": 1,
                    "replaceByUp": 0,
                    "examineMode": 1,
                    "noHanderAction": 2,
                    "examineEndType": 0,
                    "examineEndRoleId": 0,
                    "examineEndDirectorLevel": 1,
                    "ccSelfSelectFlag": 1,
                    "conditionList": [{
                        "columnId": 0,
                        "type": 1,
                        "conditionEn": "",
                        "conditionCn": "",
                        "optType": "",
                        "zdy1": "",
                        "zdy2": "",
                        "opt1": "",
                        "opt2": "",
                        "columnDbname": "",
                        "columnType": "",
                        "showType": "",
                        "showName": "",
                        "fixedDownBoxValue": ""
                    }],
                    "nodeUserList": [{
                        "targetId": 85,
                        "type": 1,
                        "name": "天旭"
                    }],
                    "childNode": {
                        "nodeName": "审核人",
                        "type": 1,
                        "priorityLevel": 1,
                        "settype": 1,
                        "selectMode": 0,
                        "selectRange": 0,
                        "examineRoleId": 0,
                        "directorLevel": 1,
                        "replaceByUp": 0,
                        "examineMode": 1,
                        "noHanderAction": 2,
                        "examineEndType": 0,
                        "examineEndRoleId": 0,
                        "examineEndDirectorLevel": 1,
                        "ccSelfSelectFlag": 1,
                        "conditionList": [],
                        "nodeUserList": [{
                            "targetId": 2515744,
                            "type": 1,
                            "name": "哈哈哈哈"
                        }],
                        "childNode": null,
                        "conditionNodes": [],
                        "error": false
                    },
                    "conditionNodes": [],
                    "error": false
                  },{
                    "nodeName": "条件2",
                    "type": 3,
                    "priorityLevel": 2,
                    "settype": 1,
                    "selectMode": 0,
                    "selectRange": 0,
                    "examineRoleId": 0,
                    "directorLevel": 1,
                    "replaceByUp": 0,
                    "examineMode": 1,
                    "noHanderAction": 2,
                    "examineEndType": 0,
                    "examineEndRoleId": 0,
                    "examineEndDirectorLevel": 1,
                    "ccSelfSelectFlag": 1,
                    "conditionList": [],
                    "nodeUserList": [],
                    "childNode": null,
                    "conditionNodes": [],
                    "error": false
                }]
            },
            "nodeUserList": []
        },
        "conditionNodes": []
    }
  }
  export default {
    data() {
      return {
        isTried: false,
        tipList: [],
        tipVisible: false,
        nowVal: 100,
        processConfig: null,
        nodeConfig: {},
        workFlowDef: {},
        flowPermission: [],
        directorMaxLevel: 0,
        dialogVisible: true,
        tableId: ""
      }
    },
    components:{
      nodeWrap
    },
    methods: {
      toReturn() {
        this.$router.go(-1)
      },
      reErr(data) {
        if (data.childNode) {
          if (data.childNode.type == 'APPROVE') {//审批人
            if (data.childNode.error) {
              this.tipList.push({ name: data.childNode.nodeName, type: "审核人" })
            }
            this.reErr(data.childNode)
          } else if (data.childNode.type == 'CC') {
            if (data.childNode.error) {
              this.tipList.push({ name: data.childNode.nodeName, type: "抄送人" })
            }
            this.reErr(data.childNode)
          } else if (data.childNode.type == 'CONDITION') {
            this.reErr(data.childNode.childNode)
          } else if (data.childNode.type == 'EXCLUSIVE') {
            this.reErr(data.childNode)
            for (var i = 0; i < data.childNode.conditionNodes.length; i++) {
              if (data.childNode.conditionNodes[i].error) {
                this.tipList.push({ name: data.childNode.conditionNodes[i].nodeName, type: "条件" })
              }
              this.reErr(data.childNode.conditionNodes[i])
            }
          }
        } else {
          data.childNode = null
        }
      },
      saveFlow() {
        this.isTried = true;
        this.tipList = [];
        // this.reErr(this.nodeConfig);
        if (this.tipList.length != 0) {
          this.tipVisible = true;
          return;
        }
        // this.processConfig.flowPermission = this.flowPermission
        // console.log(this.processConfig)
        const { id } = this.$route.query
        const parameter = {
          id,
          params:this.processConfig.nodeConfig
        }
        saveApproval(parameter)
        // console.log(JSON.stringify(this.processConfig))
        // this.$axios.post("", this.processConfig).then(res => {
        //     if (res.code == 200) {
        //         this.$message.success("设置成功");
        //         setTimeout(function () {
        //             window.location.href = ""
        //         }, 200)
        //     }
        // })
      },
      release(){

      },
      zoomSize(type) {
        if (type == 1) {
          if (this.nowVal == 50) {
            return;
          }
          this.nowVal -= 10;
        } else {
          if (this.nowVal == 300) {
            return;
          }
          this.nowVal += 10;
        }
      },
      async getInitDate(){
        const { id } = this.$route.query
        const res = await getApprovalDate({id})
        const approvalData = {
          "tableId": 1,
          "workFlowVersionId": "",
          "workFlowDef": {
              "name": "合同审批",
              "publicFlag": 1,
              "sortNo": 5,
              "duplicateRemovelFlag": 1,
              "optionTip": "",
              "optionNotNull": 0,
              "status": 1
          },
          "directorMaxLevel": 4,
          "flowPermission": [],
          "nodeConfig": {...res}
        }
        this.processConfig = approvalData
        this.nodeConfig = this.processConfig.nodeConfig;
        this.flowPermission = this.processConfig.flowPermission;
        this.directorMaxLevel = this.processConfig.directorMaxLevel;
        this.workFlowDef = this.processConfig.workFlowDef
        this.tableId = this.processConfig.tableId
      }
    },
    created(){
        this.getInitDate()
    }
  }
</script>
<style lang="less" scoped>
  .save-btn{
    position: absolute;
    right: 20px;
    z-index: 999;
    .btn1{
      margin-right: 20px;
    }
  }
</style>