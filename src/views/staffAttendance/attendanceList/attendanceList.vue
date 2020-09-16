<style lang="less" scoped>
  @import "./attendanceList.less";
</style>
<template>
<div class="attendanceList">
    <search-table pageCode='recording'>
      <a-button type="primary" icon="upload" @click="showModal">考勤导入</a-button>
    </search-table>
    <a-modal v-model="visible" title="考勤导入" :bodyStyle='{padding:0}' @ok="handleUpload" ok-text="提交" cancel-text="取消">
          <a-form :form="form">
              <a-form-item label="月份" :label-col="{span:6}" :wrapper-col="{span:12}" required>
                  <a-month-picker v-decorator="['rosterDate',validates.rosterDate]" format="YYYY-MM" style="width:100%"/>
              </a-form-item>
              <a-form-item label="模板下载" :label-col="{span:6}" :wrapper-col="{span:12}">
                  <a-button @click="downLoad"> <a-icon type="download"/> 下载模板 </a-button>
              </a-form-item>
              <a-form-item label="上传文件" :label-col="{span:6}" :wrapper-col="{span:12}" required>
                  <a-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload">
                    <a-button> <a-icon type="upload" /> 选择文件 </a-button>
                  </a-upload>
              </a-form-item>
          </a-form>
      </a-modal>
  </div>
</template>


<script src="./attendanceList.js"></script>
