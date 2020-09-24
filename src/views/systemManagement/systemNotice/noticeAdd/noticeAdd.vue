<template>
  <a-card :bordered="false">
    <a-form :form="form" @submit="handleSubmit" :label-width="120" class="ant-advanced-search-form">
      <a-row :gutter="56">
        <a-col :span="12">
          <a-form-item label="主题">
            <a-input v-decorator="['title',validates.title]" placeholder="请填写主题" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="类型:">
            <a-select :disabled="$route.query.title=='系统公告修改'" :getPopupContainer="triggerNode => triggerNode.parentNode" mode="default" v-decorator="['basicType',validates.basicType]" placeholder="请选择" @change="nextCodeList">
              <a-select-option v-for="k in typeList" :key="k.codeKey" :value="k.codeKey">{{ k.codeValue }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12" v-if="form.getFieldValue('basicType') == '规章制度'">
          <a-form-item label="规章制度类型:">
            <a-select :getPopupContainer="triggerNode => triggerNode.parentNode" mode="default" v-decorator="['type',validates.type]" placeholder="请选择">
              <a-select-option v-for="k in rulesList" :key="k.codeKey" :value="k.codeKey">{{ k.codeValue }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12" v-if="form.getFieldValue('basicType') == '规章制度'">
          <a-form-item label="所属公司:">
            <a-select :getPopupContainer="triggerNode => triggerNode.parentNode" mode="multiple" v-decorator="['company',validates.company]" placeholder="请选择">
              <a-select-option v-for="k in companyList" :key="k.codeKey" :value="k.codeKey">{{ k.codeValue }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12" v-if="form.getFieldValue('basicType') == '公告'">
          <a-form-item label="公告类型">
            <a-select :getPopupContainer="triggerNode => triggerNode.parentNode" mode="default" v-decorator="['type',validates.type]" placeholder="请选择">
              <a-select-option v-for="k in customerTypeList" :key="k.codeKey" :value="k.codeKey">{{ k.codeValue }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item :label="form.getFieldValue('basicType') == '公告'?'发布提及人':'可见范围'">
            <a-radio-group v-decorator="['bulletinperson',validates.bulletinperson]">
              <a-radio value="all">所有</a-radio>
              <a-radio value="role">角色</a-radio>
              <a-radio value="department">部门</a-radio>
              <a-radio value="people">发布人</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12" v-if="form.getFieldValue('bulletinperson') == 'role'">
          <a-form-item label="角色">
              <a-select :getPopupContainer="triggerNode => triggerNode.parentNode"  v-decorator="['roleIds',validates.roleIds]" placeholder="请选择" mode="multiple">
                <a-select-option v-for="item in roleData" :value="item.id" :key="item.id">
                    {{ item.name }}
                </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
         <a-col :span="12" v-if="form.getFieldValue('bulletinperson') == 'department'">
          <a-form-item label="部门">
                <a-tree-select
                    :treeData="treeData"
                    tree-checkable
                    :show-checked-strategy="SHOW_PARENT"
                    style="width: 100%"
                    v-decorator="['dept',validates.dept]"   
                    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"  
                    :showSearch='true'
                    treeNodeFilterProp="title"
                    placeholder="请选择员主属部门" 
                    :getPopupContainer="triggerNode => triggerNode.parentElement"
                />         
          </a-form-item>
        </a-col>
         <a-col :span="12" v-if="form.getFieldValue('bulletinperson') == 'people'">
          <a-form-item label="发布人">
              <a-select
                mode="multiple"
                v-decorator="['users',validates.users]"
                placeholder="请输入发布人模糊搜索"
                style="width: 100%"
                :filter-option="false"
                :not-found-content="fetching ? undefined : null"
                @search="fetchUser"
                @change="userChange"
            >
                <a-spin v-if="fetching" slot="notFoundContent" size="small" />
                <a-select-option v-for="d in userData" :key="d.id">
                {{ d.username }}
                </a-select-option>
            </a-select>
          </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="发布时间">
          <a-date-picker style="width:100%" v-decorator="['publishDate',validates.publishDate]" show-time format="YYYY-MM-DD HH:mm:ss"/>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="失效时间">
          <a-date-picker style="width:100%" v-decorator="['expiryDate',validates.expiryDate]" show-time format="YYYY-MM-DD HH:mm:ss"/>
        </a-form-item>
      </a-col>
      <a-col :span="24" >
          <a-form-item label="上传附件:">
            <a-upload
              :action="noticeUpload"
              :default-file-list="defaultFileList"
              :file-list="fileList" 
              :remove="handleRemove" 
              :headers="headers"
              @change="handleChange"
            >
              <a-button> <a-icon type="upload" /> 上传附件 </a-button>
            </a-upload>
          </a-form-item>
        </a-col>
      <a-col :span="24">
        <a-form-item label="发布内容">
         <div id="editor"></div>
        </a-form-item>
      </a-col>
      </a-row>
      <a-row type="flex" justify="center">
        <a-button @click="goBack">取消</a-button>
        <a-button type="primary" style="margin-left: 8px" html-type="submit">提交</a-button>
      </a-row>
    </a-form>
  </a-card>
</template>
<script src="./noticeAdd"></script>

<style lang="less">
    @import './noticeAdd.less';
</style>   