<style lang="less">
  @import './addDepartment.less';
</style>
<template>
  <div class="addDepartment">
    <a-modal class="addDepartmentModal" :title="modaltitle" :visible="addDepvisible" :width="500" @cancel="addDepvisible=false" :maskClosable="false">
      <a-form>
        <a-row type="flex">
          <a-col :span="24">
            <a-form-item v-if="modaltitle=='新建下级'" label="上级部门：" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" :required='true'>
              <a-input v-model="parentsname"  placeholder="请输入" disabled/>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="部门名称" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" :required='true'>
              <a-input v-model="addfrom.name"  placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="部门简称" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" :required='true'>
              <a-input v-model="addfrom.nameShort"  placeholder="请输入" />
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="部门负责人" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-select
                show-search
                :value="addfrom.manager"
                placeholder="模糊搜索选择"
                style="width: 100%"
                :default-active-first-option="false"
                :show-arrow="false"
                :filter-option="false"
                :not-found-content="null"
                @search="ObserverDataload1"
                @change="managerChange"
            >
                <a-select-option v-for="(item, index) in tableDataUser1" :value="item.id" :key="item.id+'_'+index">
                {{item.nickname}}
                </a-select-option>
            </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24">
            <a-form-item label="部门工作观察者" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-select
                mode="multiple"
                :value="addfrom.userIds"
                placeholder="模糊搜索选择"
                style="width: 100%"
                :filter-option="false"
                :not-found-content="loading2 ? undefined : null"
                @search="ObserverDataload2"    
                @change="userIdsChange"    
            >
                <a-spin v-if="loading2" slot="notFoundContent" size="small" />
                <a-select-option v-for="(item, index) in tableDataUser2" :value="item.id" :key="item.id+'_'+index">
                {{ item.nickname }}
                </a-select-option>
            </a-select>
            </a-form-item>
          </a-col>
           <a-col :span="24">
            <a-form-item label="部门负责人数据权限" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" :required='true'>
              <a-select v-model="addfrom.dataAuthority" placeholder="模糊搜索选择" @change="dataAuthorityChange">
                <a-select-option  value="0" >本人</a-select-option>
                <a-select-option  value="1" >本人及下属</a-select-option>
            </a-select>
            </a-form-item>
          </a-col>
           <a-col :span="24">
            <a-form-item label="部门员工角色权限" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
              <a-select v-model="addfrom.roleIds" placeholder="请选择" mode="multiple" @change="roleIdsChange">
                <a-select-option v-for="item in roleData" :value="item.id" :key="item.id">
                    {{ item.name }}
                </a-select-option>
            </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>  
      <template slot="footer">
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button type="primary" :loading="confirmLoading" @click="handleOk">保存</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script src="./addDepartment.js"></script>

