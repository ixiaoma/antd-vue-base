<template>
  <div class="field-setting">
    <a-collapse default-active-key="0" :bordered="false" class="spacial-collape">
        <a-collapse-panel v-for="(item,index) in collapseList" :key="`${index}`" :header="item.fieldCode">
            <a slot="extra" @click="e=>e.stopPropagation()">
              <a-icon type="plus" style="font-size:16px;margin-right:10px" @click="addField(item)"/>
              <a-icon type="delete" style="font-size:16px" @click="deleteBlock(item)"/>
            </a>
            <div>
              <a-row :gutter='56'>
                <draggable>
                  <a-col :span='12'>
                    <div class="pre-field">
                      <span>{{123}}</span>
                      <div>
                        <a @click="editField">
                          <a-icon type="edit" style="font-size:16px;margin-right:10px"/>
                        </a>
                        <a @click="deleteField"> 
                          <a-icon type="delete" style="font-size:16px"/>
                        </a>
                      </div>
                    </div>
                  </a-col>
                </draggable>
              </a-row>
            </div>
        </a-collapse-panel>
    </a-collapse>
    <a-button type="primary" @click="addModel" style="margin-top:10px">添加模块</a-button>
    <a-modal title="添加模块" :visible="visible" @cancel="handleCancel">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="模块名称">
          <a-input v-decorator="['fieldName', { rules: [{ required: true, whitespace:true,message: '请填写模块名称' }] }]"/>
        </a-form-item>
      </a-form>
      <template slot="footer">
        <a-button key="back" @click="handleCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="handleSubmit" :loading="loading">
          提交
        </a-button>
      </template>
    </a-modal>
    <a-modal title="添加字段" :visible="fieldVisible" @cancel="handleFieldCancel">
      <a-form :form="fieldForm">
        <a-form-item>
          <a-radio-group v-decorator="['valueType', { initialValue: 'TEXT_SINGLE' ,rules: [{ required: true, whitespace:true,message: '请选择字段类型' }] }]">
            <a-radio v-for="item in valueTypeList" :value="item.label" :key='item.label'>
              {{item.value}}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="字段名称" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-input v-decorator="['name', { rules: [{ required: true, whitespace:true,message: '请填写字段名称' }] }]"/>
        </a-form-item>
        <a-form-item label="是否列表查询" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-switch v-decorator="['search',{ initialValue: true, valuePropName: 'checked' }]"/>
        </a-form-item>
        <a-form-item label="是否表头展示" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-switch v-decorator="['tableHead',{ initialValue: true, valuePropName: 'checked' }]"/>
        </a-form-item>
      </a-form>
      <template slot="footer">
        <a-button key="back" @click="handleFieldCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="handleFieldSubmit" :loading="loading">
          提交
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script src='./index.js'></script>
<style lang="less" scoped>
.field-setting{
  .pre-field{
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #e9e8e8;
    display: flex;
    justify-content: space-between;
  }
}
</style>