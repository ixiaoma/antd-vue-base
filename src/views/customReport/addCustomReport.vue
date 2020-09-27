<template>
  <a-card class="table-page-search-wrapper">
    <a-form class="ant-advanced-search-form" layout="inline">
      <a-row :gutter="24">
        <a-col :lg="8" :md="12" :sm="24">
          <a-form-item label="报表名称">
            <a-input v-model="name" allowClear />
          </a-form-item>
        </a-col>
        <a-col :lg="8" :md="12" :sm="24">
          <a-form-item label="报表模板">
            <a-select mode="default" v-model="template"  allowClear>
                <a-select-option v-for="k in templateList" :key="k.codeKey" :value="k.codeKey">
                {{ k.codeValue }}
                </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :lg="8" :md="12" :sm="24">
          <a-form-item label="报表排序">
            <a-input-number style="width:100%" v-model="sort" :min="0" :precision='0'/>
          </a-form-item>
        </a-col>
        <a-button type="primary" style="margin:0 10px">保存</a-button>
      </a-row>
    </a-form>
  </a-card>
</template>
<script>
export default {
  name: 'addCustomReport',
  title: 'addCustomReport',
  components: {
    
  },
  data() {
    return {
     name:'',
     template:'',
     sort:'',
     templateList:[]
    }
  },
  computed: {},
  methods: {
   
  }
}
</script>