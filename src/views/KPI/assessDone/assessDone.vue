
<template>
<a-card class="table-page-search-wrapper">
    <div style="margin-bottom:20px">
        <a-col span="12">
          操作类型：
          <a-select v-model="operationType" placeholder="请选择操作类型" style="width:40%">
                <a-select-option v-for="(item,index) in operationTypeList" :value="item" :key="index">
                    {{ item }}
                </a-select-option>
              </a-select>
            <a-button type="primary" icon="upload" @click="exportLoad" v-if="buttonList.includes('export')" style="margin:0 20px">导出</a-button>
        </a-col>  
        <a-button icon="download" v-if="buttonList.includes('upload')" @click="uploadLoad">导入</a-button>
        </div>
      <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="todoData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :scroll="{ x: 1600}"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <template slot="action" slot-scope="text, record">         
                  <a v-if="buttonList.includes('detail')" @click="handleSub(record,3)">查看</a>
                </template>
      </a-table>
      <a-modal v-model="visible" title="上传" :bodyStyle='{padding:10}' @ok="handleUpload" ok-text="提交" cancel-text="取消">
          <a-form>
              <a-form-item label="上传文件" :label-col="{span:6}" :wrapper-col="{span:12}" :required='true'>
                  <a-upload
                    :action="fileUploadApi"
                    :file-list="fileList" 
                    :headers="headers"
                    @change="handleChange"
                    :remove="handleRemove"
                  >
                    <a-button> <a-icon type="upload" /> 选择文件 </a-button>
                  </a-upload>
              </a-form-item>
          </a-form>
      </a-modal>


    </a-card>
</template>


<script src="./assessDone.js"></script>
