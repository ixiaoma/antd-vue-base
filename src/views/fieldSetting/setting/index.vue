<template>
  <div class="field-setting">
    <a-tabs v-model="activeKey" size='small' class="tabs-style" @change="getInitLayout">
        <a-tab-pane v-for="item in layoutList" :key="item.key" :tab="item.value"/>
    </a-tabs>
    <a-row :gutter='56'>
      <a-col span='18'>
        <!-- <draggable v-if='layoutData && layoutData.display' tag='a-collapse' :list='layoutData.display' :component-data="componentData" class="spacial-collape"> -->
          <a-collapse v-model="activePanel" :bordered='false' class="spacial-collape" v-if='layoutData && layoutData.display'>
            <a-collapse-panel v-for="(item,i) in layoutData.display" :key="`${i}`" :header="item.groupName">
                <a slot="extra" @click="e=>e.stopPropagation()" >
                  <a-icon type="plus" v-if='activeKey == "BASIC"' style="margin-right:10px;font-size:16px" title="添加字段" @click="oprationField(item.groupName)"/>
                  <a-icon type="delete" style="font-size:16px" title="删除模块" @click="deleteBlock(item)"/>
                </a>
                <a-row :gutter='56'>
                  <draggable v-model="item.layoutList" :options="{group:'filed1'}">
                    <a-col :sm='24' :md ='18' :lg='12' v-for="(childItem,childIndex) in item.layoutList" :key='childIndex'>
                      <div class="pre-field">
                        <span>{{childItem.name}}</span>
                        <div v-if='activeKey == "BASIC"'>
                          <a @click="oprationField(item.groupName,childItem)">
                            <a-icon type="edit" style="font-size:16px;margin-right:10px"/>
                          </a>
                          <a @click="deleteField(childItem.code)"> 
                            <a-icon type="delete" style="font-size:16px"/>
                          </a>
                        </div>
                        <div v-else>
                          <a-switch v-model="childItem.notNull" checked-children="必填"  un-checked-children="非必填" style="margin-right:10px"/>
                          <a-switch v-model="childItem.readOnly" checked-children="只读" un-checked-children="非只读" style="margin-right:10px"/>
                          <a-switch v-model="childItem.display" checked-children="展示" un-checked-children="隐藏"/>
                        </div>
                      </div>
                    </a-col>
                  </draggable>
                </a-row>
            </a-collapse-panel>
          </a-collapse>
        <!-- </draggable> -->
        <a-row type='flex' justify='space-between' style="margin-top:10px">
          <div>
            <a-button type="primary" @click="addModel">添加模块</a-button>
            <!-- <a-button type="primary" v-if='activeKey == "BASIC"' style="margin-left:10px" @click="oprationField(null)">添加字段</a-button> -->
          </div>
          <a-button type="primary" @click="saveModel">保存布局</a-button>
        </a-row>
      </a-col>
      <a-col span='6'>
        <a-card title="回收站" :bordered="false" :bodyStyle="{padding:'10px 0'}" :headStyle="{borderBottom:'3px solid #1890FF'}">
          <draggable style="min-height:300px;max-height:800px;overflow-y:scroll" v-if='layoutData && layoutData.trash' v-model="layoutData.trash" :options="{group:'filed1'}">
              <a-col v-for="(trashItem,trashIndex) in layoutData.trash" :key='trashIndex'>
                <div class="pre-field">{{trashItem.name}}</div>
              </a-col>
          </draggable>
        </a-card>
      </a-col>
    </a-row>
    <a-modal title="添加模块"  :visible="visible" @cancel="handleCancel">
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
    
    <a-modal title="字段配置" :visible="fieldVisible" 
    :width="700"
    @cancel="handleFieldCancel">
      <a-form :form="fieldForm" v-if="fieldVisible">
        <a-form-item v-show='noHidden'>
          <a-radio-group v-decorator="['valueType', { initialValue: fieldData ? fieldData.valueType : 'TEXT_SINGLE' ,rules: [{ required: true, whitespace:true,message: '请选择字段类型' }] }]"
            @change="changeValueType"
          >
            <a-radio v-for="item in valueTypeList" :value="item.label" :key='item.label'>
              {{item.value}}
            </a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="字段名称" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-input allowClear v-decorator="['name', { initialValue: fieldData ? fieldData.name : '',rules: [{ required: true, whitespace:true,message: '请填写字段名称' }] }]"/>
        </a-form-item>
        <a-form-item v-if="showCodeField" label="关联码表值" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-select
            allowClear
            v-decorator="[`categoryCodes[0]`, { initialValue: fieldData ? fieldData.categoryCodes[0] : undefined ,rules: [{ required: true, whitespace:true,message: '请选择码表值' }] }]"
            >
            <a-select-option v-for="item in codeList" :key="item.code" :value="item.code">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <!-- 多级联动 -->
        <div v-if="valueType == 'SELECT'" >
          <a-form-item 
            :label="'关联码表值' + (index + 1) " 
            :label-col="{span:6}" 
            :wrapper-col="{span:12}"
            v-for="(k, index) in selectLevel"
            :key=" 'select' + index " 
          >
            <a-row :gutter='10'>
              <a-col :span='22'>
                <a-select v-decorator="[`categoryCodes[${index}]`, { initialValue: fieldData ? fieldData.categoryCodes[index] : undefined , rules: [{ required: true, whitespace:true,message: '请选择码表值' }] }]">
                  <a-select-option v-for="item in codeList" :key="item.code" :value="item.code">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-col>
              <a-col :span='2'>
                <a-icon v-if="selectLevel.length - 1 ==  index" type="plus-circle" @click="addSelect" style="font-size:20px"/>
                <a-icon type="close-circle" v-else style="font-size:20px"/>
              </a-col>
            </a-row>
            <!-- <a-button 
              type="dashed" 
              style="width: 100%;" 
              @click="addSelect">
                <a-icon type="plus" />
            </a-button> -->
            <!-- <a-button 
              v-else
              type="dashed" 
              style="width: 100%;" 
              @click="minusSelect(index)">
                <a-icon type="minus" /> 
            </a-button> -->
          </a-form-item>
        </div>
        <a-form-item label="引用对象" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-select
            allowClear
            showSearch
            @change="changeObject"
            v-decorator="['referObjectCode', { initialValue: fieldData ? fieldData.referObjectCode : undefined  }]"
            >
            <a-select-option v-for="item in objectList" :key="item.code" :value="item.code">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="引用字段" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-select
            allowClear
            showSearch
            v-decorator="['referObjectField', { initialValue: fieldData ? fieldData.referObjectField : undefined  }]"
            >
            <a-select-option v-for="item in fieldList" :key="item.code" :value="item.code">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="引用对象赋值字段" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-select
            allowClear
            v-decorator="['referObjectSetField', { initialValue: fieldData ? fieldData.referObjectSetField : undefined  }]"
            >
            <a-select-option v-for="item in setFieldList" :key="item.code" :value="item.code">
              {{ item.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="字段描述" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-input allowClear v-decorator="['description', { initialValue: fieldData ? fieldData.description : '',rules: [] }]"/>
        </a-form-item>

        <a-form-item label="API" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-input allowClear v-decorator="['serverApi', { initialValue: fieldData ? fieldData.serverApi : '',rules: [] }]"/>
        </a-form-item>

        <a-form-item label="是否列表查询" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-switch v-decorator="['search',{ initialValue: fieldData ? fieldData.search : true, valuePropName: 'checked' }]"/>
        </a-form-item>
        <a-form-item label="是否表头展示" :label-col="{span:6}" :wrapper-col="{span:12}" v-show='noHidden'>
          <a-switch v-decorator="['tableHead',{ initialValue: fieldData ? fieldData.tableHead : true, valuePropName: 'checked' }]"/>
        </a-form-item>
        <a-form-item label="是否数据展示" :label-col="{span:6}" :wrapper-col="{span:12}">
          <a-switch v-decorator="['display',{ initialValue: fieldData ? fieldData.display : true, valuePropName: 'checked' }]"/>
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
    cursor: pointer;
  }
  .pre-field:hover{
      border-color: #1890ff;
      color: #1890ff;
    }
  .ant-card-head-title{
    padding: 10px 0!important;
  }
}
</style>