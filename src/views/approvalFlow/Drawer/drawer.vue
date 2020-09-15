<template>
  <div>
    <a-drawer
      :title="drawerTitle"
      :width="560"
      :visible="visible"
      @close="onClose"
    >
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="审批人设置">
          <a-form :form="form" layout="vertical" v-if="nodeType == 'APPROVE'">
            <a-form-item>
              <a-radio-group>
                <a-radio v-for="item in valueTypeList" :value="item.value" :key='item.value'>
                  {{item.label}}
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-divider />
              <div class="title-style"><h3>指定标签</h3><span>将由此标签中所有成员进行审批</span></div>
              <a-button type="dashed" ghost style="color:#1890ff;border-color:#1890ff" icon="plus" @click="showModel">添加</a-button>
              <role-model/>
            <!-- <a-divider />
            <a-radio-group name="radioGroup" :default-value="1">
              <a-radio :style="radioStyle" :value="1">或签(一名成员统一即可)</a-radio>
              <a-radio :style="radioStyle" :value="2">会签(须所有成员同意)</a-radio>
            </a-radio-group> -->
          </a-form>
          <a-form :form="form" layout="vertical" v-if="nodeType == 'CC'">
              <div class="title-style"><h3>指定范围</h3><span>可抄送成员或标签</span></div>
              <a-button type="dashed" ghost style="color:#1890ff;border-color:#1890ff" icon="plus" @click="showModel">添加</a-button>
              <a-divider />
              <div class="title-style"><h3>指定上级</h3><span>可抄送指定层级上级</span></div>
              <a-divider />
              <div class="title-style"><h3>申请人本人</h3></div>
              <a-checkbox>抄送给申请人本人</a-checkbox>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="权限设置">
          <div class="table-style">
            <div class="table-row table-header">
              <div class="component-style">控件</div>
              <div class="radio-style">
                <a-checkbox>隐藏</a-checkbox>
              </div>
              <div class="radio-style">
                <a-checkbox>仅查看</a-checkbox>
              </div>
              <div class="radio-style">
                <a-checkbox>可编辑</a-checkbox>
              </div>
            </div>
            <div class="table-row table-body">
              <div class="component-style">控件</div>
              <div class="radio-style">
                <a-checkbox/>
              </div>
              <div class="radio-style">
                <a-checkbox/>
              </div>
              <div class="radio-style">
                <a-checkbox/>
              </div>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          取消
        </a-button>
        <a-button type="primary" @click="onClose">
          确定
        </a-button>
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
        width: 90px;
        padding-left: 10px;
      }
    }
    .table-header{
      background-color: #e6f7ff;
      height: 36px;
      line-height: 36px;
      .radio-style{
        border-left: 1px solid #e8e8e8;
      }
    }
    .table-body{
      height: 46px;
      line-height: 46px;
    }
  }
</style>
