<template>
  <div :class="prefixCls" :style="{ transition: '0.3s all' }">
    <div style="float: left">
      <slot name="extra">{{ extra }}</slot>
    </div>
    <div style="text-align: center;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterToolBar',
  props: {
    prefixCls: {
      type: String,
      default: 'ant-pro-footer-toolbar'
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    siderWidth: {
      type: Number,
      default: undefined
    },
    extra: {
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    barWidth () {
      return this.isMobile ? undefined : `calc(100% - ${this.collapsed ? 80 : this.siderWidth || 241}px)`
    }
  }
}
</script>
