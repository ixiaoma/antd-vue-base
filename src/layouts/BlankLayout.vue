<template>
  <div class="hide-menu">
    <div class='header'>
      <a-icon type="left" class="icon-style" @click="goBack"/>
        <div class="center-text">{{title}}</div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlankLayout',
  computed:{
    title(){
      return this.$route.query.title
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
  .hide-menu{
    background-color: #f8f8f8;
    height: 100%;
    .header{
      background-color: #fff;
      position: fixed;
      width: 100%;
      top: 0;
      height: 56px;
      line-height: 56px;
      box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      z-index: 2;
      .icon-style{
        font-size: 24px;
        color: #999;
      }
      .center-text{
        font-size: 18px;
        color: #666;
        text-align: center;
        flex: 1;
      }
    }
    .content{
      padding: 66px 5%;
      height: 100%;
      overflow: scroll;
    }
  }
</style>
