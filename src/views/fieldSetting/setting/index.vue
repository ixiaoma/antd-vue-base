<template>
  <div class="field-setting">
    <a-row :gutter='56'>
      <a-col span='18'>
        <draggable v-if='layoutData && layoutData.display' tag='a-collapse' :list='layoutData.display' :component-data="componentData" class="spacial-collape">
          <a-collapse-panel v-for="(item,i) in layoutData.display" :key="`${i}`" :header="item.groupName">
              <a slot="extra" @click="e=>e.stopPropagation()">
                <a-icon type="plus" style="font-size:16px;margin-right:10px" @click="oprationField(item.groupName)"/>
                <a-icon type="delete" style="font-size:16px" @click="deleteBlock(item)"/>
              </a>
              <a-row :gutter='56'>
                <draggable v-model="item.layoutList" :options="{group:'filed1'}">
                  <a-col :span='12' v-for="(childItem,childIndex) in item.layoutList" :key='childIndex'>
                    <div class="pre-field">
                      <span>{{childItem.name}}</span>
                      <div>
                        <a @click="oprationField(item.groupName,childItem)">
                          <a-icon type="edit" style="font-size:16px;margin-right:10px"/>
                        </a>
                        <a @click="deleteField(childItem.code)"> 
                          <a-icon type="delete" style="font-size:16px"/>
                        </a>
                      </div>
                    </div>
                  </a-col>
                </draggable>
              </a-row>
          </a-collapse-panel>
        </draggable>
        <a-row type='flex' justify='space-between' style="margin-top:10px">
          <a-button type="primary" @click="addModel">添加模块</a-button>
          <a-button type="primary" @click="saveModel">保存布局</a-button>
        </a-row>
      </a-col>
      <a-col span='6'>
        <a-card title="回收站" :bordered="false" :bodyStyle="{padding:'10px 0'}" :headStyle="{borderBottom:'3px solid #52c41a'}">
          <draggable style="height:300px" v-if='layoutData && layoutData.trash' v-model="layoutData.trash" :options="{group:'filed1'}">
              <a-col v-for="(trashItem,trashIndex) in layoutData.trash" :key='trashIndex'>
                <div class="pre-field">{{trashItem.name}}</div>
              </a-col>
          </draggable>
        </a-card>
      </a-col>
    </a-row>
    
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
          <a-radio-group v-decorator="['valueType', { initialValue: fieldData ? fieldData.valueType : 'TEXT_SINGLE' ,rules: [{ required: true, whitespace:true,message: '请选择字段类型' }] }]">
            <a-radio v-for="item in valueTypeList" :value="item.label" :key='item.label'>
              {{item.value}}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="字段名称" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-input v-decorator="['name', { initialValue: fieldData ? fieldData.name : '',rules: [{ required: true, whitespace:true,message: '请填写字段名称' }] }]"/>
        </a-form-item>
        <a-form-item label="是否列表查询" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-switch v-decorator="['search',{ initialValue: fieldData ? fieldData.search : true, valuePropName: 'checked' }]"/>
        </a-form-item>
        <a-form-item label="是否表头展示" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-switch v-decorator="['tableHead',{ initialValue: fieldData ? fieldData.tableHead : true, valuePropName: 'checked' }]"/>
        </a-form-item>
      </a-form>
      <template slot="footer">
        <a-button key="back" @click="handleFieldCancel">
          取消
        </a-button>
        <a-button key="submit" type="primary" @click="handleFieldSubmit" :loading="fieldLoading">
          提交
        </a-button>
      </template>
    </a-modal>
  </div>
</template>
<script src='./index.js'></script>
<style lang="less">
.field-setting{
  .pre-field{
    width: 100%;
    padding: 6px 10px;
    border: 1px solid #e9e8e8;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .ant-card-head-title{
    padding: 10px 0!important;
  }
}
</style>