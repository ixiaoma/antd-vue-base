<template>
  <div class="field-setting">
    <a-collapse default-active-key="1" :bordered="false" class="spacial-collape">
      <a-collapse-panel v-for="(item,index) in collapseList" :key="index+1" :header="item.name">
          <a-dropdown slot="extra">
          <a @click="e => e.preventDefault()">
              <a-icon slot="extra" type="setting" />
          </a>
          <a-menu slot="overlay">
              <a-menu-item>
              <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
          </a-menu>
          </a-dropdown>
          <div>
              
          </div>
      </a-collapse-panel>
    </a-collapse>
    <a-button type="primary" @click="addModel">添加模块</a-button>
    <a-modal
      title="添加模块"
      :visible="visible"
      :confirm-loading="confirmLoading"
    >
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="模块名称">
          <a-input
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
      </a-form>
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" html-type="submit" :loading="loading">
          提交
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script src='./index.js'></script>