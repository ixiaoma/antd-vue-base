<template>
  <div :class="wrpCls">
    <div class="left-con">
      <!-- <span class="role-title">Admin</span>
      <p class="tag-style"><a-tag color="red">(未审核)</a-tag></p>
      <a-icon type="setting" class="icon-style"/> -->
    </div>
    <div class="right-con">
      <!-- <a-input-search style="width: 200px;" placeholder="姓名/手机号"/>
      <a-icon type="user-add" class="icon-style"/>
      <a-icon type="question-circle" class="icon-style"/>
      <a-icon type="mobile" class="icon-style"/>
      <a-icon type="bell" class="icon-style"/>
      <span class="feedback-style"><a-icon type="form" class="icon-style"/>反馈</span> -->
      <a-icon :type="fullScreen ? 'shrink' : 'arrows-alt'" @click="fullScreenClick" class="icon-style"/>
      <avatar-dropdown :menu="showMenu" :current-user="currentUser" :class="prefixCls" />
      <!-- <select-lang :class="prefixCls" /> -->
    </div>

  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown'
// import SelectLang from '@/components/SelectLang'

export default {
  name: 'RightContent',
  components: {
    AvatarDropdown,
    // SelectLang
  },
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-global-header-index-action'
    },
    isMobile: {
      type: Boolean,
      default: () => false
    },
    topMenu: {
      type: Boolean,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showMenu: true,
      currentUser: {},
      //设置当前全屏状态的初始值为 false
      fullScreen: false,
    }
  },
  computed: {
    wrpCls () {
      return {
        'ant-pro-global-header-index-right': true,
        [`ant-pro-global-header-index-${(this.isMobile || !this.topMenu) ? 'light' : this.theme}`]: true
      }
    }
  },
  methods:{
    //全屏按钮\退出全屏按钮点击事件
    fullScreenClick() {
      this.fullScreen = !this.fullScreen;
      if (this.fullScreen) {//当前要启动全屏
        //this.pageFullScreen();//执行全屏之后的一些操作
        this.setWindowFullScreen();
      } else {//当前要退出全屏
        //this.pageExitFullScreen();//执行退出全屏之后的一些操作
        this.windowExitFullScreen();
      }
    },
    //启动全屏
    setWindowFullScreen() {
      let docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      }else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      }
    },
    //退出全屏
    windowExitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    },
    //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
    checkFull() {
      //火狐浏览器
      let isFull = document.mozFullScreen ||
                      document.fullScreen ||
                      document.webkitIsFullScreen ||
                      document.webkitRequestFullScreen ||
                      document.mozRequestFullScreen ||
                      document.msFullscreenEnabled;
      if (isFull === undefined) isFull = false;
      return isFull;
    }
  },
  mounted () {
    setTimeout(() => {
      this.currentUser = {
        name: sessionStorage.getItem('username')
      }
    }, 1500)
    //由于 全屏状态下 ，按 "Esc" 键退出全屏，浏览器监听不到 "Esc" 键的事件，所以需要通过浏览器窗口大小改变的事件去触发退出全屏事件
    window.addEventListener("resize", function () {
      //增加 timer 定时器的原因是全屏和退出全屏的事件会触发两次窗口大小改变事件，做一次过滤
      if (this.timer) return;
      this.timer = setTimeout(() => {
        // 如果是按 "Esc" 键退出全屏，窗口状态已经是非全屏，但是之前记录的状态还是全屏的状态
        if (!this.checkFull() && this.fullScreen) {
          //退出全屏状态。。。
          this.fullScreen = false;
          this.pageExitFullScreen();
        }else{
          //进入全屏状态。。。
        }
        clearTimeout(this.timer);
        this.timer = null;
      }, 0);
    });
  }
}
</script>
