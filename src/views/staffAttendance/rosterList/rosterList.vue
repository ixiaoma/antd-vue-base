<style lang="less" scoped>
  @import "./rosterList.less";
</style>
<template>
  <div class="rosterList">
    <search-table pageCode='roster'>
      <a-button v-if="buttonList.includes('rosterUpload')" type="primary" icon="upload" @click="showModal">提交排班计划</a-button>
      <a-button v-if="buttonList.includes('rosterEditUpload')" type="primary" icon="upload" @click="showModal" style="margin-left:10px">更改排班计划</a-button>
    </search-table>
    <a-modal v-model="visible" title="提交排班计划" :bodyStyle='{padding:0}' @ok="handleUpload" ok-text="提交" cancel-text="取消">
          <a-form :form="form">
              <a-form-item label="月份" :label-col="{span:6}" :wrapper-col="{span:12}" required>
                  <a-month-picker v-decorator="['rosterDate',validates.rosterDate]" format="YYYY-MM" style="width:100%"/>
              </a-form-item>
              <a-form-item label="部门" :label-col="{span:6}" :wrapper-col="{span:12}" required>
                  <a-tree-select
                    :treeData="treeData"
                    labelInValue
                    style="width: 100%"
                    v-decorator="['deptName',validates.deptName]"   
                    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"  
                    :showSearch='true'
                    treeNodeFilterProp="title"
                    placeholder="请选择员部门" 
                    :getPopupContainer="triggerNode => triggerNode.parentElement"
                />         
              </a-form-item>
              <a-form-item label="模板下载" :label-col="{span:6}" :wrapper-col="{span:12}">
                  <a-button @click="downLoad"> <a-icon type="download"/> 下载模板 </a-button>
              </a-form-item>
              <a-form-item label="上传文件" :label-col="{span:6}" :wrapper-col="{span:12}" required>
                  <a-upload :file-list="fileList" :remove="handleRemove">
                    <a-button> <a-icon type="upload" /> 选择文件 </a-button>
                  </a-upload>
              </a-form-item>
          </a-form>
      </a-modal>
  </div>
</template>


<script src="./rosterList.js"></script>
