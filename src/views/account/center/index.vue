<template>
  <div class="page-header-index-wide page-header-wrapper-grid-content-main">
    <a-card
      style="width:100%"
      :tab-list="tabList"
      :active-tab-key="activeKey"
      @tabChange="onTabChange"
    >
      <span slot="tabBarExtraContent" href="#"><icon-font type="icon-tuichu" />导入</span>
      <a-tabs default-active-key="1" class="block-tab" >
        <a-tab-pane v-for="i in 30" :key="i">
          <div slot="tab">
            <span>
              {{ i }}
            </span>
            <h2 class="number-style">{{ i+1 }}</h2>
          </div>
        </a-tab-pane>
      </a-tabs>
      <div>
        123
      </div>
    </a-card>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import { AppPage, ArticlePage, ProjectPage } from './page'

import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})
export default {
  components: {
    RouteView,
    PageView,
    AppPage,
    ArticlePage,
    ProjectPage,
    IconFont
  },
  data () {
    return {
      tabList: [
        {
          key: 'tab1',
          tab: '工作台'
        },
        {
          key: 'tab2',
          tab: '人事报表'
        },
        {
          key: 'tab3',
          tab: '员工设置'
        }
      ],
      activeKey: 'tab1'
    }
  },
  methods: {
    onTabChange (key) {
      this.activeKey = key
    }
  }
}
</script>

<style lang="less" scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;

  .block-tab{
    /deep/.ant-tabs-bar{
      border: 0;
    }
    /deep/.ant-tabs-tab-arrow-show{
      border: 1px solid #ccc;
    }
    /deep/.ant-tabs-nav-container{
      height: 60px;
    }
    /deep/.ant-tabs-tab{
      width: 100px;
      height: 56px;
      // border: 1px solid #ccc;
      // margin-right: 10px;
      margin: 1px 10px 3px 1px;
      padding: 3px;
      border-radius: 3px;
      box-shadow: 0px 1px  2px 2px rgb(84, 192, 235);
    }
    /deep/.ant-tabs-nav-wrap{
      margin-left: 10px;
      margin-bottom: 0;
    }
    .number-style{
      text-align: center;
    }
  }

  .account-center-avatarHolder {
    text-align: center;
    margin-bottom: 24px;

    & > .avatar {
      margin: 0 auto;
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }

    .username {
      color: rgba(0, 0, 0, 0.85);
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 4px;
    }
  }

  .account-center-detail {
    p {
      margin-bottom: 8px;
      padding-left: 26px;
      position: relative;
    }

    i {
      position: absolute;
      height: 14px;
      width: 14px;
      left: 0;
      top: 4px;
      background: url(https://gw.alipayobjects.com/zos/rmsportal/pBjWzVAHnOOtAUvZmZfy.svg);
    }

    .title {
      background-position: 0 0;
    }
    .group {
      background-position: 0 -22px;
    }
    .address {
      background-position: 0 -44px;
    }
  }

  .account-center-tags {
    .ant-tag {
      margin-bottom: 8px;
    }
  }

  .account-center-team {
    .members {
      a {
        display: block;
        margin: 12px 0;
        line-height: 24px;
        height: 24px;
        .member {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 24px;
          max-width: 100px;
          vertical-align: top;
          margin-left: 12px;
          transition: all 0.3s;
          display: inline-block;
        }
        &:hover {
          span {
            color: #1890ff;
          }
        }
      }
    }
  }

  .tagsTitle,
  .teamTitle {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 12px;
  }
}
</style>
