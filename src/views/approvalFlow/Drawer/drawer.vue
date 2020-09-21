<template>
  <div>
    <a-drawer
      :maskClosable="false"
      :title="drawerTitle"
      :width="560"
      :visible="visible"
      @close="onClose"
    >
      <a-tabs default-active-key="1" v-if="nodeType == 'APPROVE'">
        <a-tab-pane key="1" tab="审批人设置">
          <a-form :form="form" layout="vertical">
            <a-form-item>
              <a-radio-group v-model="selectRadio">
                <a-radio v-for="item in valueTypeList" :value="item.value" :key='item.value'>
                  {{item.label}}
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <div v-if='selectRadio && selectRadio != "APPLICANT"'>
              <a-divider />
              <div v-show="selectRadio == 'ASSIGN' || selectRadio == 'ROLE'">
                <div class="title-style"><h3>{{selectRadio == 'ROLE' ? '指定标签' : '指定成员'}}</h3><span>{{selectRadio == 'ROLE' ? '将由此标签中所有成员进行审批' : '将由选中的所有成员进行审批'}}</span></div>
                <a-button type="dashed" ghost style="color:#1890ff;border-color:#1890ff" icon="plus" @click="showModel">添加</a-button>
                <div style="margin-top:10px">
                  <a-tag color="blue" v-for="(item,index) in roleList" :key='item.dataId' closable @close="deleteRole(index)">{{item.name}}</a-tag>
                </div>
              </div>
              <div v-show="selectRadio == 'LEADER'">
                <div class="title-style"><h3>指定层级</h3></div>
                <a-select v-model='levelData' style="width: 120px">
                  <a-select-option value="ASSIGN">选择层级</a-select-option>
                  <a-select-option value="BOTTOM">当前层级</a-select-option>
                </a-select>
                <a-select v-if="levelData == 'ASSIGN'" v-model='firstSelect' style="width: 160px;margin-left:10px">
                  <a-select-option :value="item.label" v-for='(item,index) in levelList' :key='index'>
                    {{item.title}}
                  </a-select-option>
                </a-select>
                <a-select v-model='levelSelect' style="width: 160px;margin-left:10px">
                  <a-select-option :value="item.label" v-for='(item,index) in levelList' :key='index' :disabled="selectDisable(item.label)">
                    {{item.title}}
                  </a-select-option>
                </a-select>
                <!-- <div class="title-style" style="margin-top:20px"><h3>当前层级无上级时</h3></div>
                <a-radio-group v-model="defaultValue">
                  <a-radio :style="radioStyle" :value="1">
                    当前层级无上级时，由上一级上级审批
                  </a-radio>
                  <a-radio :style="radioStyle" :value="2">
                    此审批节点为空时直接跳过，不视为异常
                  </a-radio>
                </a-radio-group> -->
              </div>
              <!-- <a-divider />
              <a-radio-group name="radioGroup" :default-value="1">
                <a-radio :style="radioStyle" :value="1">或签(一名成员统一即可)</a-radio>
                <a-radio :style="radioStyle" :value="2">会签(须所有成员同意)</a-radio>
              </a-radio-group> -->
            </div>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="权限设置">
          <div class="table-style">
            <div class="table-row table-header">
              <div class="component-style">控件</div>
              <a-radio-group v-model="slectAllData" @change="selectAll" class='radio-style'>
                  <a-radio value="display">隐藏</a-radio>
                  <a-radio value="onlyread">仅查看</a-radio>
                  <a-radio value="edit">可编辑</a-radio>
              </a-radio-group>
            </div>
            <div class="table-row table-body" v-for="(item,index) in fieldList" :key='index'>
              <div class="component-style">{{item.name}}</div>
              <a-radio-group v-model="item.selectData" @change="checkSelectAll" class='radio-style'>
                  <a-radio value="display">隐藏</a-radio>
                  <a-radio value="onlyread">仅查看</a-radio>
                  <a-radio value="edit">可编辑</a-radio>
              </a-radio-group>
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="回退类型">
          <a-radio-group v-model="backType">
            <a-radio value="FROM">FROM</a-radio>
            <a-radio value="TO">TO</a-radio>
          </a-radio-group>
          <a-button type="primary" @click="backType = null"> 取消 </a-button>
        </a-tab-pane>
      </a-tabs>
      <a-form :form="form" layout="vertical" v-if="nodeType == 'CC'">
          <div class="title-style"><h3>指定成员</h3><span>将由选中的所有成员进行审批</span></div>
          <a-button type="dashed" ghost style="color:#1890ff;border-color:#1890ff" icon="plus" @click="showModel">添加</a-button>
          <a-divider />
          <div class="title-style"><h3>指定标签</h3><span>将由此标签中所有成员进行审批</span></div>
          <a-button type="dashed" ghost style="color:#1890ff;border-color:#1890ff" icon="plus" @click="showModel">添加</a-button>
          <div style="margin-top:10px">
            <a-tag color="blue" v-for="(item,index) in roleList" :key='item.dataId' closable @close="deleteRole(index)">{{item.name}}</a-tag>
          </div>
          <a-divider />
          <div class="title-style"><h3>指定上级</h3><span>可抄送指定层级上级</span></div>
          <a-select mode="multiple" style="width: 360px">
            <a-select-option :value="item.label" v-for='(item,index) in levelList' :key='index'>
              {{item.title}}
            </a-select-option>
          </a-select>
          <a-divider />
          <div class="title-style"><h3>申请人本人</h3></div>
          <a-checkbox v-model="ownerChecked">抄送给申请人本人</a-checkbox>
      </a-form>
      <a-form :form="form" layout="vertical" v-if="nodeType == 'CONDITION'">
          <div class="title-style"><h3>同时满足以下条件</h3></div>
          <a-row :gutter='10' v-for="(item,index) in expressionList" :key='index' style="margin-top:20px">
            <a-col :span='8'>
              <a-select style="width: 100%" placeholder="请选择" v-model="item.code">
                <a-select-option :value="item.code" :disabled='disabledSelect(item.code)' v-for='(item,index) in fieldList' :key='index'>
                  {{item.name}}
                </a-select-option>
              </a-select>
            </a-col>
            <a-col :span='4'>=</a-col>
            <a-col :span='8'>
              <a-input v-model="item.value" style="width:100%"/>
            </a-col>
            <a-icon type="close-circle" style="font-size:20px;float:right;margin-top:6px" @click="deleteCondition(index)"/>
          </a-row>
          <a-button type="dashed" v-show='fieldList.length != expressionList.length' ghost style="color:#1890ff;border-color:#1890ff;margin-top:20px" icon="plus" @click="addCondition">添加条件</a-button>
      </a-form>
      <role-model ref='selectModel' @setRoleData='setRoleData'/>
      <div :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1}">
        <a-button :style="{ marginRight: '8px' }" @click="onClose"> 取消 </a-button>
        <a-button type="primary" @click="commitDrawer"> 确定 </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script src='./drawer.js'></script>
<style lang="less" scoped>
  .title-style{
    display: flex;
    span{
      color: #bfbfbf;
      margin-left: 10px;
      margin-top: 2px;
    }
  }
  .table-style{
    .table-row{
      display: flex;
      padding-left: 10px;
      border-bottom: 1px solid #e8e8e8;
      .component-style{
        width: 226px;
      }
      .radio-style{
        margin-top: 10px;
      }
    }
    .table-header{
      background-color: #e6f7ff;
      height: 36px;
      line-height: 36px;
      .radio-style{
        margin-top: 6px;
      }
    }
    .table-body{
      height: 46px;
      line-height: 46px;
    }
  }
</style>
