<template>
  <div class="fd-nav">
    <div class="fd-nav-right">
				<!-- <button type="button" class="ant-btn button-preview"><span>预 览</span></button> -->
      <a-button type="primary" class="button-publish" @click="saveSet"><span>发 布</span></a-button>
    </div>
    <div class="fd-nav-content">
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
  </div>
</template>
<style scoped>
@import "./workflow.css";
.error-modal-list {
	width: 455px;
}
</style>
<script>
import nodeWrap from '@/components/Approval/NodeWrap/nodeWrap.vue'
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
                    }, {
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
        processConfig: returnData,
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
			//window.location.href = ""
		},
		reErr(data) {
			if (data.childNode) {
				if (data.childNode.type == 1) {//审批人
					if (data.childNode.error) {
						this.tipList.push({ name: data.childNode.nodeName, type: "审核人" })
					}
					this.reErr(data.childNode)
				} else if (data.childNode.type == 2) {
					if (data.childNode.error) {
						this.tipList.push({ name: data.childNode.nodeName, type: "抄送人" })
					}
					this.reErr(data.childNode)
				} else if (data.childNode.type == 3) {
					this.reErr(data.childNode.childNode)
				} else if (data.childNode.type == 4) {
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
		saveSet() {
			this.isTried = true;
			this.tipList = [];
			this.reErr(this.nodeConfig);
			if (this.tipList.length != 0) {
				this.tipVisible = true;
				return;
			}
      this.processConfig.flowPermission = this.flowPermission
      console.log(this.processConfig)
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
		}
	},
  created(){
			this.nodeConfig = this.processConfig.nodeConfig;
			this.flowPermission = this.processConfig.flowPermission;
			this.directorMaxLevel = this.processConfig.directorMaxLevel;
			this.workFlowDef = this.processConfig.workFlowDef
			this.tableId = this.processConfig.tableId
  }
}
</script>