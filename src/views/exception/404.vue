<template>
  <div id="approve" class="module-container">
    <div class="approveSet-wrap" style="width: 100%">
      <div class="stages-container">
        <div class="stage-wrapper">
          <div class="stage special">
            <p class="root-title">提交审批</p>
          </div>
          <end-line/>
        </div>
        <div v-for="(item,index) in treeList" :key='index'>
          <approval-tag v-if='item.type=="approval"' :content='item.content'/>
          <stage-wrapper v-else :content='item.content'/>
          <div v-if="item.children && item.children.length > 1">
            <branch-wrapper :parentItem='item.children'/>
          </div>
        </div>
        <div class="stage-wrapper">
          <div class="stage special">
            <p class="root-title">结束审批</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import approvalTag from './approvalTag'
import stageWrapper from './stageWrapper'
import branchWrapper from './branchWrapper'
import endLine from './endLine'
export default {
  components:{
    approvalTag,
    stageWrapper,
    branchWrapper,
    endLine
  },
  data(){
    return {
      treeList:[
        {
          type:'approval',
          content:'审批人：发起人所在部门负责人',
          children:[
            {
              type:'condition',
              content:'满足全部',
              contentList:[
                '请假时长 ≥ 12天',
                '现合同主体 = 111'
              ],
              children:[
                {
                  type:'approval',
                  content:'审批人：发起人所在部门负责人'
                }
              ]
            },{
              type:'condition',
              content:'满足全部',
              contentList:[
                '请假时长 ≥ 12天',
                '现合同主体 = 111'
              ],
              children:[
                {
                  type:'condition',
                  content:'满足全部',
                  contentList:[
                    '请假时长 ≥ 12天',
                    '现合同主体 = 111'
                  ]
                },{
                  type:'condition',
                  content:'满足全部',
                  contentList:[
                    '请假时长 ≥ 12天',
                    '现合同主体 = 111'
                  ]
                },{
                  type:'condition',
                  content:'满足全部',
                  contentList:[
                    '请假时长 ≥ 12天',
                    '现合同主体 = 111'
                  ]
                }
              ]
            },{
              type:'condition',
              content:'满足全部',
              contentList:[
                '请假时长 ≥ 12天',
                '现合同主体 = 111'
              ]
            },{
              type:'condition',
              content:'满足全部',
              contentList:[
                '请假时长 ≥ 12天',
                '现合同主体 = 111'
              ]
            }
          ]
        },{
          type:'approval',
          content:'审批人：发起人所在部门负责人'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
    @import './index.less';
</style>