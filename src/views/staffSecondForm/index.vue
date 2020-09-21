<template>
  <div>
    <div style="text-align:right">
      <a-button type="primary" @click="submit" v-if="!readonly">提交</a-button>
    </div>
    <a-tabs 
     @change="changeTabs"
     size='small' class="tabs-style">
      <a-tab-pane key="1">
        <span slot="tab">
          <span style="color:red">*</span>
          员工信息
        </span>
          <base-form 
            ref='baseForm' 
            @next='nextStep' 
            :showBottom='false'
            :currentForm="basicForm"
          />
          <a-form :form="formField" style="padding:0 20px" v-if="readonly&&$route.query.title=='员工档案审批详情'&&$route.query.approvalResult=='待审批'">
            <a-collapse v-model="activeKey" :bordered="false" class="spacial-collape" expand-icon-position='right'>
                <a-collapse-panel key="1" header="审批">
                <a-col :sm='24' :md ='18' :lg="12">
                    <a-form-item label="审批结果" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                        <a-select :getPopupContainer='triggerNode => triggerNode.parentNode' mode="default" v-decorator="['approvalResult',validates.approvalResult]" :placeholder="'请选择审批结果'">
                            <a-select-option v-for="k in approvalStatusList" :key="k.codeKey" :value="k.codeKey">
                            {{ k.codeValue }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :sm='24' :md ='18' :lg="12">
                    <a-form-item label="审批备注" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
                        <a-textarea  v-decorator="['approvalRemark',validates.approvalRemark]" :placeholder="'请填写审批备注'" :auto-size="{ minRows: 2, maxRows: 6 }"/>
                    </a-form-item>
                </a-col>
                </a-collapse-panel>
              </a-collapse>
            </a-form>
           <footer-tool-bar>
              <a-button @click="goBack">返回</a-button>
              <!-- <a-button  style="margin-left: 8px" @click="clickStorage">暂存</a-button> -->
              <a-button v-if="!readonly" type="primary" style="margin-left: 8px"  @click="save">保存</a-button>
              <a-button v-if="readonly&&$route.query.title=='员工档案审批详情'&&$route.query.approvalResult=='待审批'" type="primary" style="margin-left: 8px"  @click="approvalSave">审批</a-button>
          </footer-tool-bar>
      </a-tab-pane>
      <a-tab-pane 
      :disabled="!basicInfoId"
      v-for="(item,index) in tabLists" 
      :key="`${index+2}`" 
      force-render>
        <span slot="tab">
          <span v-if='item.nullAble' style="color:red">*</span>
          {{item.tabName}}
        </span>
        <a-card v-if='activeKey == index+2'>
          <table-filter v-if='item.filterList' :filterList='item.filterList'/>
          <div class="table-operator" v-if='item.tabName != "合同管理"'>
            <a-button type="primary" icon="plus" @click="handleAdd(item)">新建</a-button>
            <a-button type="default" icon="download" v-if='item.tabName == "员工离职" || item.tabName == "奖惩管理"'>批量导出</a-button>
          </div>
          <s-table
            ref="table"
            rowKey="key"
            :columns="item.columns"
            :rowSelection="item.tabName == '员工离职' || item.tabName == '奖惩管理' ? rowSelection : null"
            :data="loadData"
            showPagination="auto">
            <span slot="serial" slot-scope="text, record, index">
              {{ index + 1 }}
            </span>
            <span slot="action" slot-scope="text, record">
              <template>
                <a @click="handleFind(record , item)">查看</a>
                <a-divider type="vertical" />
                <a @click="handleEdit(record , item)" >修改</a>
                <a-divider type="vertical"/>
                <a @click="handleSub(record,item)" >删除</a>
              </template>
            </span>
          </s-table>
          <!-- <search-table :pageCode='item.pageCode'/> -->
        </a-card>
      </a-tab-pane>
    </a-tabs>
    <a-modal 
      @ok="onOk"
      v-model="visible" 
      :title="modalTitle" 
      width='70%' 
      :bodyStyle='{padding:0}'>
      <base-form 
      v-if='visible' 
      ref='modalForm' 
      :currentForm='currentForm' 
      @next='nextStep' 
      :showBottom='false'/>
    </a-modal>
   

  </div>
</template>

<script src='./index.js'></script>
<style lang="less" scoped>
  @import './index.less';
</style>