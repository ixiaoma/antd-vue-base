<template>
    <a-card :bordered="false">
        <div class="table-operator">
            <a-button type="primary" icon="plus" @click="handleAdd(null,1)">新建</a-button>
        </div>
        <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="rulesData"      
                  :loading="loading"  
                  :showPagination="false"
                >
                <template slot="file" slot-scope="text, record">
                    <a @click="seeFile(record)">{{record.file}}</a>
                </template>
                <template slot="action" slot-scope="text, record">         
                  <a @click="handleEdit(record)">修改</a>
                  <a-divider type="vertical" />
                  <a @click="handleDel(record)">删除</a>
                </template>
      </a-table>
      <a-modal :title="modaltitle" :visible="modalshow" :width="500" @cancel="modalshow=false" :maskClosable="false">
      <a-form>
        <a-row type="flex">
          <a-col :span="24">
            <a-form-item label="标题：" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }" :required='true'>
              <a-input v-model="title"  placeholder="请输入"/>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="附件" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }" :required='true'>
             <a-upload
                name="file"
                :multiple="true"
                :action="uploadUrl"
                :headers="headers"
                @change="handleChange"
            >
                <a-button> <a-icon type="upload" /> 选择上传文件 </a-button>
            </a-upload>
            </a-form-item>
          </a-col>
        
        </a-row>
      </a-form>  
      <template slot="footer">
        <a-button key="back" @click="modalshow=false">取消</a-button>
        <a-button type="primary" :loading="confirmLoading" @click="handleOk">保存</a-button>
      </template>
    </a-modal>
    </a-card>
</template>
<script src="./rulesDetail.js"></script>