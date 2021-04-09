<template>
  <div class="exampleList">
    <div class="table-page-search-wrapper">
      <a-form :form="form" layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="24">
            <a-form-item label="省份">
              <a-select  default-value="广东省" @change="handleChange">
                  <a-select-option value="广东省">
                      广东省
                  </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="城市">
              <a-select default-value="汕头市" @change="handleChange">
                  <a-select-option value="汕头市">
                      汕头市
                  </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="区县">
              <a-select default-value="龙湖区" @change="handleChange">
                  <a-select-option value="龙湖区">
                      龙湖区
                  </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <a-form-item label="门店">
              <a-select default-value="罗森" @change="handleChange">
                  <a-select-option value="罗森">
                      罗森
                  </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8" :style="{ textAlign: 'right' }" class="search-reset-btn">
            <a-button type="primary" icon="search" @click="handleSearch">查询</a-button>
            <a-button style="margin-left: 8px" icon="sync" @click="handleReset">重置</a-button>
            <!-- <a v-if="filterList.length > 2" :style="{ marginLeft: '8px', fontSize: '14px' }" @click="toggle">
              {{ expand ? '收起' : '展开全部' }} <a-icon :type="expand ? 'up' : 'down'" />
            </a> -->
          </a-col>
        </a-row>
      </a-form>
    </div>
    
    <a-table size='small' bordered :columns="columns" :data-source="data" @change="handleTableChange"></a-table>
  </div>
</template>

<script>
import { SearchTable } from '@/components'
export default {
  data () {
    return {
      form:this.$form.createForm(this),
      columns:[
        {
          title: '门店名称',
          dataIndex: 'storeName',
          sorter: true,
          key: 'storeName'
        },
        {
          title: '陈列容量',
          dataIndex: 'displayNum',
          sorter: true,
          key: 'displayNum'
        },
        {
          title: '上架数',
          dataIndex: 'shelveNum',
          sorter: true,
          key: 'shelveNum'
        },
        {
          title: '商家品牌数',
          dataIndex: 'brandNum',
          sorter: true,
          key: 'brandNum'
        },
        {
          title: '上架规格数',
          dataIndex: 'spceNum',
          sorter: true,
          key: 'spceNum'
        },
        {
          title: '上架厂商数',
          dataIndex: 'firmNum',
          sorter: true,
          key: 'firmNum'
        },
        {
          title: '空缺率',
          dataIndex: 'vacancyRate',
          sorter: true,
          key: 'vacancyRate'
        }
      ],
      data:[
        {
          storeName:'罗森',
          displayNum:'3000',
          shelveNum:'1500',
          brandNum:'5000',
          spceNum:'1000',
          firmNum:'300',
          vacancyRate:'50%'
        },{
          storeName:'沃尔玛',
          displayNum:'5000',
          shelveNum:'2000',
          brandNum:'4000',
          spceNum:'500',
          firmNum:'300',
          vacancyRate:'40%'
        },{
          storeName:'永辉',
          displayNum:'3000',
          shelveNum:'1500',
          brandNum:'5000',
          spceNum:'1000',
          firmNum:'900',
          vacancyRate:'45%'
        },{
          storeName:'全时',
          displayNum:'5000',
          shelveNum:'2000',
          brandNum:'4000',
          spceNum:'900',
          firmNum:'200',
          vacancyRate:'60%'
        },{
          storeName:'711',
          displayNum:'3000',
          shelveNum:'1500',
          brandNum:'5000',
          spceNum:'1000',
          firmNum:'150',
          vacancyRate:'50%'
        }
      ]
    }
  },
  components: {
    SearchTable
  },
  methods:{
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter)
    },
    handleChange(){

    },
    handleSearch(){

    },
    handleReset(){

    }
  }
}
</script>
<style lang="less" scoped>
.exampleList{
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
  .table-page-search-wrapper{
    margin-bottom: 6px;
    /deep/.ant-form-inline .ant-form-item > .ant-form-item-label{
      line-height: 40px;
    }
    /deep/.ant-form-item{
      margin-bottom: 6px;
    }
  }
}
</style>