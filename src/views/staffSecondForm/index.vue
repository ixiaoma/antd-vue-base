<template>
  <div>
    <div style="text-align:right">
      <a-button type="primary" @click="submit">提交</a-button>
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
           <footer-tool-bar>
        <a-button @click="goBack">返回</a-button>
        <!-- <a-button  style="margin-left: 8px" @click="clickStorage">暂存</a-button> -->
        <a-button type="primary" style="margin-left: 8px"  @click="save">保存</a-button>
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
                <a @click="handleSub(record)" >删除</a>
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