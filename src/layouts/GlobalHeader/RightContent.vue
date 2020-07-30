<template>
  <div :class="wrpCls">
    <div class="left-con">
      <span class="role-title">Admin</span>
      <p class="tag-style"><a-tag color="red">(未审核)</a-tag></p>
      <a-icon type="setting" class="icon-style"/>
    </div>
    <div class="right-con">
      <a-input-search style="width: 200px;" placeholder="姓名/手机号"/>
      <a-icon type="user-add" class="icon-style"/>
      <a-icon type="question-circle" class="icon-style"/>
      <a-icon type="mobile" class="icon-style"/>
      <a-icon type="bell" class="icon-style"/>
      <span class="feedback-style"><a-icon type="form" class="icon-style"/>反馈</span>
      <avatar-dropdown :menu="showMenu" :current-user="currentUser" :class="prefixCls" />
      <select-lang :class="prefixCls" />
    </div>

  </div>
</template>

<script>
import AvatarDropdown from './AvatarDropdown'
import SelectLang from '@/components/SelectLang'

export default {
  name: 'RightContent',
  components: {
    AvatarDropdown,
    SelectLang
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
      currentUser: {}
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
  mounted () {
    setTimeout(() => {
      this.currentUser = {
        name: 'Serati Ma'
      }
    }, 1500)
  }
}
</script>
