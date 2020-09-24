<style lang="less" scoped>
  @import "./index.less";
</style>
<template>
<div class="codeTable">
    <!--码表管理-->
    <a-card :bordered="false">   
      <a-form class="ant-advanced-search-form" layout="inline">
            <a-row :gutter="24">
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表类别编码">
                        <a-input v-model="categoryCode"/>
                    </a-form-item>
                </a-col>
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表类别名称">
                        <a-input v-model="categoryName"/>
                    </a-form-item>
                </a-col>
                <a-col :lg='8' :md="12" :sm="24">
                    <a-form-item label="码表数据类型">
                        <a-select v-model="categoryType" mode="default" placeholder="请选择码表类别类型" allowClear>
                            <a-select-option v-for="k in categoryTypeList" :key="k.codeKey" :value="k.codeKey">
                            {{ k.codeValue }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                </a-row>
              <a-row type="flex" justify="end" :gutter="24">
                <a-col>
                    <a-button v-if="buttonList.includes('add')" type="primary" icon="plus" @click="handleAdd()">新建</a-button>
                    <a-button type="primary" style="margin:0 10px" icon="search" @click="noticeDataLoad()">查询</a-button>
                    <a-button icon="sync" class="middle-btn" @click="resetFn">重置</a-button>
                </a-col>
            </a-row>
        </a-form>
      <!-- <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd()">新建</a-button>
      </div> -->
      <a-table 
                  ref="table"
                  size="small"
                  :bordered="true"
                  :rowKey="(record) =>  record.id"
                  :columns="columns" 
                  :data-source="noticeData"      
                  :showPagination="true"
                  :pagination="pagination"
                  :loading="loading"
                  @change="handleTableChange"
                >
                <template slot="type" slot-scope="text, record">
                    <span>{{record.type==3?"单选/多选":"多级联动"}}</span>
                </template>
                <template slot="action" slot-scope="text, record">         
                  <a v-if="buttonList.includes('edit')" style="margin:0 3px" @click="handleEdit(record)">修改</a>
                  <a v-if="buttonList.includes('delete')" style="margin:0 3px" @click="handleDel(record)">删除</a>
                  <a v-if="buttonList.includes('codeManage')" style="margin:0 3px" @click="tableValueManage(record)">码表值管理</a>
                </template>
      </a-table>
    </a-card>
    <addTableCategories ref="addTableCategories" @refresh="noticeDataLoad()"></addTableCategories>
  </div>
</template>


<script src="./index.js"></script>
