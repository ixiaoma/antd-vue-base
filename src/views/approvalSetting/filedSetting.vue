<template>
  <div class="filedSetting">
      <div class="phone">

      </div>
      <div class="setting">

      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {}
}
</script>
<style lang="less" scoped>
.filedSetting{
    width: 800px;
    display: flex;
    flex-direction: row;
    .phone{
        flex:1; 
        background: #abcdef;
    }
    .setting{
        flex:1;
        background: #70ace9;
    }
}
</style>