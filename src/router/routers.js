// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/workplace',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: [ 'dashboard' ] }
          },
          {
            path: '/dashboard/workplace',
            name: 'Workplace',
            component: () => import('@/views/dashboard/Workplace'),
            meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: [ 'dashboard' ] }
          }
        ]
      },

      // forms
      {
        path: '/form',
        redirect: '/form/step-form',
        component: RouteView,
        meta: { title: '表单页', icon: 'form', permission: [ 'form' ] },
        children: [
          {
            path: '/form/step-form',
            name: 'StepForm',
            component: () => import('@/views/form/stepForm/StepForm'),
            meta: { title: '分步表单', keepAlive: true, permission: [ 'form' ] }
          },
          {
            path: '/form/advanced-form',
            name: 'AdvanceForm',
            component: () => import('@/views/form/advancedForm/AdvancedForm'),
            meta: { title: '高级表单', keepAlive: true, permission: [ 'form' ] }
          }
        ]
      },

      // list
      {
        path: '/list',
        name: 'list',
        component: RouteView,
        redirect: '/list/table-list',
        meta: { title: '列表页', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/list/table-list/:pageNo([1-9]\\d*)?',
            name: 'TableListWrapper',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '查询表格', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/basic-list',
            name: 'BasicList',
            component: () => import('@/views/list/BasicList'),
            meta: { title: '标准列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/card',
            name: 'CardList',
            component: () => import('@/views/list/CardList'),
            meta: { title: '卡片列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/list/search',
            name: 'SearchList',
            component: () => import('@/views/list/search/SearchLayout'),
            redirect: '/list/search/article',
            meta: { title: '搜索列表', keepAlive: true, permission: [ 'table' ] },
            children: [
              {
                path: '/list/search/article',
                name: 'SearchArticles',
                component: () => import('../views/list/search/Article'),
                meta: { title: '搜索列表（文章）', permission: [ 'table' ] }
              },
              {
                path: '/list/search/project',
                name: 'SearchProjects',
                component: () => import('../views/list/search/Projects'),
                meta: { title: '搜索列表（项目）', permission: [ 'table' ] }
              },
              {
                path: '/list/search/application',
                name: 'SearchApplications',
                component: () => import('../views/list/search/Applications'),
                meta: { title: '搜索列表（应用）', permission: [ 'table' ] }
              }
            ]
          }
        ]
      },

      // profile
      {
        path: '/profile',
        name: 'profile',
        component: RouteView,
        redirect: '/profile/basic',
        meta: { title: '详情页', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/profile/basic',
            name: 'ProfileBasic',
            component: () => import('@/views/profile/basic'),
            meta: { title: '基础详情页', permission: [ 'profile' ] }
          },
          {
            path: '/profile/advanced',
            name: 'ProfileAdvanced',
            component: () => import('@/views/profile/advanced/Advanced'),
            meta: { title: '高级详情页', permission: [ 'profile' ] }
          }
        ]
      },

      // result
      {
        path: '/result',
        name: 'result',
        component: RouteView,
        redirect: '/result/success',
        meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
        children: [
          {
            path: '/result/success',
            name: 'ResultSuccess',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
            meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
          },
          {
            path: '/result/fail',
            name: 'ResultFail',
            component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
            meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
          }
        ]
      },

      // Exception
      {
        path: '/exception',
        name: 'exception',
        component: RouteView,
        redirect: '/exception/403',
        meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
        children: [
          {
            path: '/exception/403',
            name: 'Exception403',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
            meta: { title: '403', permission: [ 'exception' ] }
          },
          {
            path: '/exception/404',
            name: 'Exception404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
            meta: { title: '404', permission: [ 'exception' ] }
          },
          {
            path: '/exception/500',
            name: 'Exception500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
            meta: { title: '500', permission: [ 'exception' ] }
          }
        ]
      },

      // account
      {
        path: '/account',
        component: RouteView,
        redirect: '/account/center',
        name: 'account',
        meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
        children: [
          {
            path: '/account/center',
            name: 'center',
            component: () => import('@/views/account/center'),
            meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: () => import('@/views/account/settings/Index'),
            meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
            redirect: '/account/settings/base',
            hideChildrenInMenu: true,
            children: [
              {
                path: '/account/settings/base',
                name: 'BaseSettings',
                component: () => import('@/views/account/settings/BaseSetting'),
                meta: { title: '基本设置', hidden: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/security',
                name: 'SecuritySettings',
                component: () => import('@/views/account/settings/Security'),
                meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/custom',
                name: 'CustomSettings',
                component: () => import('@/views/account/settings/Custom'),
                meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/binding',
                name: 'BindingSettings',
                component: () => import('@/views/account/settings/Binding'),
                meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ] }
              },
              {
                path: '/account/settings/notification',
                name: 'NotificationSettings',
                component: () => import('@/views/account/settings/Notification'),
                meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ] }
              }
            ]
          }
        ]
      },

      // other
      {
        path: '/other',
        name: 'otherPage',
        component: RouteView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      },
      // 系统管理
      {
        path: '/systemManagement',
        name: 'systemManagement',
        component: RouteView,
        redirect: '/systemManagement/organizational',
        meta: { title: '系统管理', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/systemManagement/organizational/:pageNo([1-9]\\d*)?',
            name: 'organizational',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/systemManagement/organizational/index.vue'),
            meta: { title: '组织架构', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/systemManagement/role/:pageNo([1-9]\\d*)?',
            name: 'role',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/systemManagement/role/index.vue'),
            meta: { title: '角色管理', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/systemManagement/menu/:pageNo([1-9]\\d*)?',
            name: 'menu',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/systemManagement/menu/index.vue'),
            meta: { title: '系统菜单', keepAlive: true, permission: [ 'table' ] }
          },
        ]
      },
      //人事档案
      {
        path: '/personnelFiles',
        name: 'personnelFiles',
        component: RouteView,
        redirect: '/personnelFiles/staffList',
        meta: { title: '人事档案', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/personnelFiles/staffList/:pageNo([1-9]\\d*)?',
            name: 'staffList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelFiles/staffList/staffList.vue'),
            meta: { title: '员工档案列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/personnelFiles/staffApprovalList/:pageNo([1-9]\\d*)?',
            name: 'staffApprovalList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelFiles/staffApprovalList/staffApprovalList.vue'),
            meta: { title: '员工档案审批', keepAlive: true, permission: [ 'table' ] }
          },
        ]
      },
      //人事调配
      {
        path: '/personnelDeployment',
        name: 'personnelDeployment',
        component: RouteView,
        redirect: '/personnelDeployment/staffEditList',
        meta: { title: '人事调配', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/personnelDeployment/staffEditList/:pageNo([1-9]\\d*)?',
            name: 'staffEditList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelDeployment/staffEditList/staffEditList.vue'),
            meta: { title: '员工调动列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/personnelDeployment/staffEditApproval/:pageNo([1-9]\\d*)?',
            name: 'staffEditApproval',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelDeployment/staffEditApproval/staffEditApproval.vue'),
            meta: { title: '员工调动审批', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/personnelDeployment/staffQuitList/:pageNo([1-9]\\d*)?',
            name: 'staffQuitList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelDeployment/staffQuitList/staffQuitList.vue'),
            meta: { title: '员工离职列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/personnelDeployment/staffQuitApproval/:pageNo([1-9]\\d*)?',
            name: 'staffQuitApproval',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelDeployment/staffQuitApproval/staffQuitApproval.vue'),
            meta: { title: '员工离职审批', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/personnelDeployment/staffEntryList/:pageNo([1-9]\\d*)?',
            name: 'staffEntryList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelDeployment/staffEntryList/staffEntryList.vue'),
            meta: { title: '员工入职列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/personnelDeployment/staffEntryApproval/:pageNo([1-9]\\d*)?',
            name: 'staffEntryApproval',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/personnelDeployment/staffEntryApproval/staffEntryApproval.vue'),
            meta: { title: '员工入职审批', keepAlive: true, permission: [ 'table' ] }
          },
        ]
      },
      //我的人事
      {
        path: '/myPersonnel',
        name: 'myPersonnel',
        component: RouteView,
        redirect: '/myPersonnel/licenceList',
        meta: { title: '我的人事', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/myPersonnel/licenceList/:pageNo([1-9]\\d*)?',
            name: 'licenceList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/licenceList/licenceList.vue'),
            meta: { title: '我的证照', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/myPersonnel/agreeList/:pageNo([1-9]\\d*)?',
            name: 'agreeList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/agreeList/agreeList.vue'),
            meta: { title: '我的合同', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/myPersonnel/transferList/:pageNo([1-9]\\d*)?',
            name: 'transferList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/transferList/transferList.vue'),
            meta: { title: '我的调动', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/myPersonnel/workTimeList/:pageNo([1-9]\\d*)?',
            name: 'workTimeList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/workTimeList/workTimeList.vue'),
            meta: { title: '我的考勤', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/myPersonnel/vacationManage/:pageNo([1-9]\\d*)?',
            name: 'vacationManage',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/vacationManage/vacationManage.vue'),
            meta: { title: '休假管理', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/myPersonnel/abnormalWorkManage/:pageNo([1-9]\\d*)?',
            name: 'abnormalWorkManage',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/abnormalWorkManage/abnormalWorkManage.vue'),
            meta: { title: '考勤异常管理', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/myPersonnel/myAchievements/:pageNo([1-9]\\d*)?',
            name: 'myAchievements',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/myPersonnel/myAchievements/myAchievements.vue'),
            meta: { title: '我的绩效', keepAlive: true, permission: [ 'table' ] }
          }
        ]
      },
      //证照管理
      {
        path: '/licenceManagement',
        name: 'licenceManagement',
        component: RouteView,
        redirect: '/licenceManagement/licenceInfoList',
        meta: { title: '证照管理', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/licenceManagement/licenceInfoList/:pageNo([1-9]\\d*)?',
            name: 'licenceInfoList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/licenceManagement/licenceInfoList/licenceInfoList.vue'),
            meta: { title: '证照信息列表', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/licenceManagement/titleMaintenance/:pageNo([1-9]\\d*)?',
            name: 'titleMaintenance',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/licenceManagement/titleMaintenance/titleMaintenance.vue'),
            meta: { title: '职称维护', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/licenceManagement/titleEvaluation/:pageNo([1-9]\\d*)?',
            name: 'titleEvaluation',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/licenceManagement/titleEvaluation/titleEvaluation.vue'),
            meta: { title: '职称评定', keepAlive: true, permission: [ 'table' ] }
          }
        ]
      },
      //合同管理（外包人员）
      {
        path: '/agreeManagement',
        name: 'agreeManagement',
        component: RouteView,
        redirect: '/agreeManagement/agreeList',
        meta: { title: '合同管理（外包人员）', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/agreeManagement/agreeList/:pageNo([1-9]\\d*)?',
            name: 'agreeManagementList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/agreeManagement/agreeList/agreeList.vue'),
            meta: { title: '合同管理列表', keepAlive: true, permission: [ 'table' ] }
          },
        ]
      },
      //招聘管理
      {
        path: '/recruitedManagement',
        name: 'recruitedManagement',
        component: RouteView,
        redirect: '/recruitedManagement/staffApply',
        meta: { title: '招聘管理', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/recruitedManagement/staffApply/:pageNo([1-9]\\d*)?',
            name: 'staffApply',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/staffApply/staffApply.vue'),
            meta: { title: '人员申请', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/recruitedManagement/staffApproval/:pageNo([1-9]\\d*)?',
            name: 'staffApproval',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/staffApproval/staffApproval.vue'),
            meta: { title: '人员审批', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/recruitedManagement/mlrpApply/:pageNo([1-9]\\d*)?',
            name: 'mlrpApply',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/mlrpApply/mlrpApply.vue'),
            meta: { title: '招聘计划申请', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/recruitedManagement/resumeList/:pageNo([1-9]\\d*)?',
            name: 'resumeList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/resumeList/resumeList.vue'),
            meta: { title: '简历管理', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/recruitedManagement/interviewList/:pageNo([1-9]\\d*)?',
            name: 'interviewList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/interviewList/interviewList.vue'),
            meta: { title: '面试', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/recruitedManagement/entryApplyList/:pageNo([1-9]\\d*)?',
            name: 'entryApplyList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/entryApplyList/entryApplyList.vue'),
            meta: { title: '入职申请', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/recruitedManagement/entryApprovalList/:pageNo([1-9]\\d*)?',
            name: 'entryApprovalList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/recruitedManagement/entryApprovalList/entryApprovalList.vue'),
            meta: { title: '入职审批', keepAlive: true, permission: [ 'table' ] }
          },
        ]
      }, 
      //绩效管理
      {
        path: '/kpi',
        name: 'kpi',
        component: RouteView,
        redirect: '/kpi/staffAchievements',
        meta: { title: 'KPI考核', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/kpi/staffAchievements/:pageNo([1-9]\\d*)?',
            name: 'staffAchievements',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/KPI/staffAchievements/staffAchievements.vue'),
            meta: { title: '员工绩效', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/kpi/templateManagement/:pageNo([1-9]\\d*)?',
            name: 'templateManagement',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/KPI/templateManagement/templateManagement.vue'),
            meta: { title: '考核模板管理', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/kpi/rewardsPunishments/:pageNo([1-9]\\d*)?',
            name: 'rewardsPunishments',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/KPI/rewardsPunishments/rewardsPunishments.vue'),
            meta: { title: '奖惩管理', keepAlive: true, permission: [ 'table' ] }
          },
        ]
      }
    ]
}

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
}

export const hideInMenuRouterMap = {
  path: '/hidemenu',
  component:BlankLayout,
  redirect: '/hidemenu/baseForm',
  hidden: true,
  children:[
    {
      path: '/hidemenu/baseForm',
      name: 'baseForm',
      component: () => import('@/components/BaseForm/index.vue'),
      meta: { title: '基础表单', keepAlive: true, permission: [ 'form' ] }
    },{
      path: '/hidemenu/staff-form',
      name: 'staffForm',
      component: () => import('@/views/form/basicForm'),
      meta: { title: '档案录入', keepAlive: true, permission: [ 'form' ] }
    }
  ]
}
