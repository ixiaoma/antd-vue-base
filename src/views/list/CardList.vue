<template>
  <a-card class="card-list">
    <a-tabs v-model="activeKey">
      <a-tab-pane v-for="item in tabList" :key="item.key" :tab="item.tab">
        <a class="right-icon">进行中绩效(3)</a>
        <a class="right-icon">未开始绩效(1)</a>
        <a class="right-icon">绩效填写中(0)</a>
        <a class="right-icon">绩效考评中(1)</a>
        <a class="right-icon">结果确认中(3)</a>
      </a-tab-pane>
      <div slot="tabBarExtraContent">
        <span class="right-icon"><a-icon type="setting" />设置</span>
        <span class="right-icon"><a-icon type="file-sync" />历史归档</span>
        <a-button type="primary">创建新绩效</a-button>
      </div>
    </a-tabs>
    <div>
      <basic-list/>
    </div>
  </a-card>
</template>

<script>

export default {
  name: 'CardList',
  data () {
    return {
      tabList: [
        {
          key: 'tab1',
          tab: '绩效考核'
        },
        {
          key: 'tab2',
          tab: '员工绩效'
        }
      ],
      activeKey: 'tab1'
    }
  },
  methods: {
    testFun () {
      this.$message.info('快速开始被点击！')
    }
  }
}
</script>
<style lang="less" scoped>
.card-list{
  .right-icon{
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
