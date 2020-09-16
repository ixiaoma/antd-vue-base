export const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const routerObj = {
  Analysis : () => import('@/views/dashboard/Analysis'),
  Workplace : () => import('@/views/dashboard/Workplace'),
  approvalManagement: () => import('@/views/approvalManagement/index.vue')
}



export const navRouterArr = {
    // 'dashboard':{
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     redirect: '/dashboard/workplace',
    //     component: RouteView,
    //     meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
    // },
    'Analysis':{
        path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
        name: 'Analysis',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: [ 'dashboard' ] }
    },
    'Workplace':{
        path: '/dashboard/workplace',
        name: 'Workplace',
        component: () => import('@/views/dashboard/Workplace'),
        meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: [ 'dashboard' ] }
    },
    'settingList':{
        path: '/settinglist',
        name: 'settingList',
        component: () => import('@/views/fieldSetting/list/index.vue'),
        meta: { title: '字段配置', icon: 'table' }
    },
    'approvalManagement':{
        path: '/approvalManagement',
        name: 'approvalManagement',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/approvalManagement/index.vue'),
        meta: { title: '审批设置', icon: 'table' }
    },
    // 'systemManagement':{
    //     path: '/systemManagement',
    //     name: 'systemManagement',
    //     component: RouteView,
    //     redirect: '/systemManagement/organizational',
    //     meta: { title: '系统管理', icon: 'table', permission: [ 'table' ] }
    // },
    'organizational':{
        path: '/systemManagement/organizational/:pageNo([1-9]\\d*)?',
        name: 'organizational',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/systemManagement/organizational/index.vue'),
        meta: { title: '组织架构', keepAlive: true, permission: ['table'] }
    },
    'role':{
        path: '/systemManagement/role/:pageNo([1-9]\\d*)?',
        name: 'role',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/systemManagement/role/index.vue'),
        meta: { title: '角色管理', keepAlive: true, permission: ['table'] }
    },
    'menu':{
        path: '/systemManagement/menu/:pageNo([1-9]\\d*)?',
        name: 'menu',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/systemManagement/menu/index.vue'),
        meta: { title: '系统菜单', keepAlive: true, permission: ['table'] }
    },
    'codeTable':{
        path: '/systemManagement/codeTable/:pageNo([1-9]\\d*)?',
        name: 'codeTable',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/systemManagement/codeTable/index.vue'),
        meta: { title: '码表管理', keepAlive: true, permission: ['table'] }
    },
    'systemNotice':{
        path: '/systemManagement/systemNotice/:pageNo([1-9]\\d*)?',
        name: 'systemNotice',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/systemManagement/systemNotice/systemNotice.vue'),
        meta: { title: '系统公告', keepAlive: true, permission: ['table'] }
    },
    'rulesManage':{
        path: '/systemManagement/rulesManage/:pageNo([1-9]\\d*)?',
        name: 'rulesManage',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/systemManagement/rulesManage/rulesManage.vue'),
        meta: { title: '规章制度管理', keepAlive: true, permission: ['table'] }
    },
    // 'personnelFiles':{
    //     path: '/personnelFiles',
    //     name: 'personnelFiles',
    //     component: RouteView,
    //     redirect: '/personnelFiles/staffList',
    //     meta: { title: '人事档案', icon: 'table', permission: [ 'table' ] },
    // },
    'staffList':{
        path: '/personnelFiles/staffList/:pageNo([1-9]\\d*)?',
        name: 'staffList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelFiles/staffList/staffList.vue'),
        meta: { title: '员工档案', keepAlive: true, permission: [ 'table' ] }
    },
    'staffApprovalList':{
        path: '/personnelFiles/staffApprovalList/:pageNo([1-9]\\d*)?',
        name: 'staffApprovalList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelFiles/staffApprovalList/staffApprovalList.vue'),
        meta: { title: '员工档案审批', keepAlive: true, permission: [ 'table' ] }
    },
    // 'personnelDeployment':{
    //     path: '/personnelDeployment',
    //     name: 'personnelDeployment',
    //     component: RouteView,
    //     redirect: '/personnelDeployment/staffEditList',
    //     meta: { title: '人事调配', icon: 'table', permission: [ 'table' ] },
    // },
    'staffEditList':{
        path: '/personnelDeployment/staffEditList/:pageNo([1-9]\\d*)?',
        name: 'staffEditList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelDeployment/staffEditList/staffEditList.vue'),
        meta: { title: '员工调动列表', keepAlive: true, permission: [ 'table' ] }
      },
      'staffEditApproval':{
        path: '/personnelDeployment/staffEditApproval/:pageNo([1-9]\\d*)?',
        name: 'staffEditApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelDeployment/staffEditApproval/staffEditApproval.vue'),
        meta: { title: '员工调动审批', keepAlive: true, permission: [ 'table' ] }
      },
      'staffQuitList':{
        path: '/personnelDeployment/staffQuitList/:pageNo([1-9]\\d*)?',
        name: 'staffQuitList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelDeployment/staffQuitList/staffQuitList.vue'),
        meta: { title: '员工离职列表', keepAlive: true, permission: [ 'table' ] }
      },
      'staffQuitApproval':{
        path: '/personnelDeployment/staffQuitApproval/:pageNo([1-9]\\d*)?',
        name: 'staffQuitApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelDeployment/staffQuitApproval/staffQuitApproval.vue'),
        meta: { title: '员工离职审批', keepAlive: true, permission: [ 'table' ] }
      },
      'staffEntryList':{
        path: '/personnelDeployment/staffEntryList/:pageNo([1-9]\\d*)?',
        name: 'staffEntryList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelDeployment/staffEntryList/staffEntryList.vue'),
        meta: { title: '员工入职列表', keepAlive: true, permission: [ 'table' ] }
      },
      'staffEntryApproval':{
        path: '/personnelDeployment/staffEntryApproval/:pageNo([1-9]\\d*)?',
        name: 'staffEntryApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/personnelDeployment/staffEntryApproval/staffEntryApproval.vue'),
        meta: { title: '员工入职审批', keepAlive: true, permission: [ 'table' ] }
      },
      // 'myPersonnel':{
      //   path: '/myPersonnel',
      //   name: 'myPersonnel',
      //   component: RouteView,
      //   redirect: '/myPersonnel/licenceList',
      //   meta: { title: '我的人事', icon: 'table', permission: [ 'table' ] },
      // },
      'licenceList':{
        path: '/myPersonnel/licenceList/:pageNo([1-9]\\d*)?',
        name: 'licenceList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/myPersonnel/licenceList/licenceList.vue'),
        meta: { title: '我的证照', keepAlive: true, permission: [ 'table' ] }
      },
      'agreeList':{
        path: '/myPersonnel/agreeList/:pageNo([1-9]\\d*)?',
        name: 'agreeList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/myPersonnel/agreeList/agreeList.vue'),
        meta: { title: '我的合同', keepAlive: true, permission: [ 'table' ] }
      },
      'transferList':{
        path: '/myPersonnel/transferList/:pageNo([1-9]\\d*)?',
        name: 'transferList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/myPersonnel/transferList/transferList.vue'),
        meta: { title: '我的调动', keepAlive: true, permission: [ 'table' ] }
      },
      'workTimeList':{
        path: '/myPersonnel/workTimeList/:pageNo([1-9]\\d*)?',
        name: 'workTimeList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/myPersonnel/workTimeList/workTimeList.vue'),
        meta: { title: '我的考勤', keepAlive: true, permission: [ 'table' ] }
      },
      'vacationManage2':{
        path: '/myPersonnel/vacationManage/:pageNo([1-9]\\d*)?',
        name: 'vacationManage2',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/myPersonnel/vacationManage/vacationManage.vue'),
        meta: { title: '休假管理', keepAlive: true, permission: [ 'table' ] }
      },
      'myAchievements':{
        path: '/myPersonnel/myAchievements/:pageNo([1-9]\\d*)?',
        name: 'myAchievements',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/myPersonnel/myAchievements/myAchievements.vue'),
        meta: { title: '我的绩效', keepAlive: true, permission: [ 'table' ] }
      },
      // 'licenceManagement':{
      //   path: '/licenceManagement',
      //   name: 'licenceManagement',
      //   component: RouteView,
      //   redirect: '/licenceManagement/licenceInfoList',
      //   meta: { title: '证照管理', icon: 'table', permission: [ 'table' ] },
      // },
      'licenceInfoList':{
        path: '/licenceManagement/licenceInfoList/:pageNo([1-9]\\d*)?',
        name: 'licenceInfoList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/licenceManagement/licenceInfoList/licenceInfoList.vue'),
        meta: { title: '证照信息列表', keepAlive: true, permission: [ 'table' ] }
      },
      'agreeManagement':{
        path: '/agreeManagement',
        name: 'agreeManagement',
        component: () => import('@/views/agreeManagement/agreeList/agreeList.vue'),
            meta: { title: '合同管理', icon: 'table', keepAlive: true, permission: [ 'table' ] }
      },
      // 'recruitedManagement':{
      //   path: '/recruitedManagement',
      //   name: 'recruitedManagement',
      //   component: RouteView,
      //   redirect: '/recruitedManagement/staffApply',
      //   meta: { title: '招聘管理', icon: 'table', permission: [ 'table' ] },
      // },
      'mlrpApply':{
        path: '/recruitedManagement/mlrpApply/:pageNo([1-9]\\d*)?',
        name: 'mlrpApply',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/recruitedManagement/mlrpApply/mlrpApply.vue'),
        meta: { title: '招聘计划申请', keepAlive: true, permission: [ 'table' ] }
      },
      'resumeList':{
        path: '/recruitedManagement/resumeList/:pageNo([1-9]\\d*)?',
        name: 'resumeList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/recruitedManagement/resumeList/resumeList.vue'),
        meta: { title: '简历管理', keepAlive: true, permission: [ 'table' ] }
      },
      // 'kpi':{
      //   path: '/kpi',
      //   name: 'kpi',
      //   component: RouteView,
      //   redirect: '/kpi/staffAchievements',
      //   meta: { title: 'KPI考核', icon: 'table', permission: [ 'table' ] },
      // },
      'staffAchievements':{
        path: '/kpi/staffAchievements/:pageNo([1-9]\\d*)?',
        name: 'staffAchievements',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/KPI/staffAchievements/staffAchievements.vue'),
        meta: { title: '员工绩效', keepAlive: true, permission: [ 'table' ] }
      },
      'templateManagement':{
        path: '/kpi/templateManagement/:pageNo([1-9]\\d*)?',
        name: 'templateManagement',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/KPI/templateManagement/templateManagement.vue'),
        meta: { title: '绩效考核设置管理', keepAlive: true, permission: [ 'table' ] }
      },
      'rewardsPunishments':{
        path: '/kpi/rewardsPunishments/:pageNo([1-9]\\d*)?',
        name: 'rewardsPunishments',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/KPI/rewardsPunishments/rewardsPunishments.vue'),
        meta: { title: '奖惩管理', keepAlive: true, permission: [ 'table' ] }
      },
      // 'staffAttendance':{
      //   path: '/staffAttendance',
      //   name: 'staffAttendance',
      //   component: RouteView,
      //   redirect: '/staffAttendance/attendanceList',
      //   meta: { title: '员工考勤', icon: 'table', permission: [ 'table' ] },
      // },
      'attendanceList':{
        path: '/staffAttendance/attendanceList/:pageNo([1-9]\\d*)?',
        name: 'attendanceList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/attendanceList/attendanceList.vue'),
        meta: { title: '考勤记录', keepAlive: true, permission: [ 'table' ] }
      },
      'attendanceDetailList':{
        path: '/staffAttendance/attendanceDetailList/:pageNo([1-9]\\d*)?',
        name: 'attendanceDetailList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/attendanceDetailList/attendanceDetailList.vue'),
        meta: { title: '考勤明细', keepAlive: true, permission: [ 'table' ] }
      },
      'workTraveling':{
        path: '/staffAttendance/workTraveling/:pageNo([1-9]\\d*)?',
        name: 'workTraveling',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/workTraveling/workTraveling.vue'),
        meta: { title: '出差管理', keepAlive: true, permission: [ 'table' ] }
      },
      'workTravelingApproval':{
        path: '/staffAttendance/workTravelingApproval/:pageNo([1-9]\\d*)?',
        name: 'workTravelingApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/workTravelingApproval/workTravelingApproval.vue'),
        meta: { title: '出差审批', keepAlive: true, permission: [ 'table' ] }
      },
      'vacationManage':{
        path: '/staffAttendance/vacationManage/:pageNo([1-9]\\d*)?',
        name: 'vacationManage',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/vacationManage/vacationManage.vue'),
        meta: { title: '休假管理', keepAlive: true, permission: [ 'table' ] }
      },
      'vacationApproval':{
        path: '/staffAttendance/vacationApproval/:pageNo([1-9]\\d*)?',
        name: 'vacationApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/vacationApproval/vacationApproval.vue'),
        meta: { title: '休假审批', keepAlive: true, permission: [ 'table' ] }
      },
      'workOvertimeManage':{
        path: '/staffAttendance/workOvertimeManage/:pageNo([1-9]\\d*)?',
        name: 'workOvertimeManage',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/workOvertimeManage/workOvertimeManage.vue'),
        meta: { title: '加班管理', keepAlive: true, permission: [ 'table' ] }
      },
      'workTravelingApproval2':{
        path: '/staffAttendance/workTravelingApproval2/:pageNo([1-9]\\d*)?',
        name: 'workTravelingApproval2',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/workTravelingApproval/workTravelingApproval.vue'),
        meta: { title: '加班审批', keepAlive: true, permission: [ 'table' ] }
      },
      'rosterList':{
        path: '/staffAttendance/rosterList/:pageNo([1-9]\\d*)?',
        name: 'rosterList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/rosterList/rosterList.vue'),
        meta: { title: '排班列表', keepAlive: true, permission: [ 'table' ] }
      },
      'rosterDetail':{
        path: '/staffAttendance/rosterDetail/:pageNo([1-9]\\d*)?',
        name: 'rosterDetail',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/staffAttendance/rosterDetail/rosterDetail.vue'),
        meta: { title: '排班明细', keepAlive: true, permission: [ 'table' ] }
      },
      // 'costManagement':{
      //   path: '/costManagement',
      //   name: 'costManagement',
      //   component: RouteView,
      //   redirect: '/costManagement/budgetList',
      //   meta: { title: '费用管理', icon: 'table', permission: [ 'table' ] },
      // },
      'budgetList':{
        path: '/costManagement/budgetList/:pageNo([1-9]\\d*)?',
        name: 'budgetList',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/costManagement/budgetList/budgetList.vue'),
        meta: { title: '预算管理列表', keepAlive: true, permission: [ 'table' ] }
      },
      'budgetApproval':{
        path: '/costManagement/budgetApproval/:pageNo([1-9]\\d*)?',
        name: 'budgetApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/costManagement/budgetApproval/budgetApproval.vue'),
        meta: { title: '预算审批', keepAlive: true, permission: [ 'table' ] }
      },
      'reimbursement':{
        path: '/costManagement/reimbursement/:pageNo([1-9]\\d*)?',
        name: 'reimbursement',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/costManagement/reimbursement/reimbursement.vue'),
        meta: { title: '报销列表', keepAlive: true, permission: [ 'table' ] }
      },
      'reimbursementApproval':{
        path: '/costManagement/reimbursementApproval/:pageNo([1-9]\\d*)?',
        name: 'reimbursementApproval',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/costManagement/reimbursementApproval/reimbursementApproval.vue'),
        meta: { title: '报销审批', keepAlive: true, permission: [ 'table' ] }
      },
      'reimbursementAdjust':{
        path: '/costManagement/reimbursementAdjust/:pageNo([1-9]\\d*)?',
        name: 'reimbursementAdjust',
        hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
        component: () => import('@/views/costManagement/reimbursementAdjust/reimbursementAdjust.vue'),
        meta: { title: '报销调整', keepAlive: true, permission: [ 'table' ] }
      }
    }


// export const navRouterArr = [
//     {
//         path: '/dashboard',
//         name: 'dashboard',
//         redirect: '/dashboard/workplace',
//         component: RouteView,
//         meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
//     },
//     {
//         path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
//         name: 'Analysis',
//         component: () => import('@/views/dashboard/Analysis'),
//         meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: [ 'dashboard' ] }
//     },
//     {
//         path: '/dashboard/workplace',
//         name: 'Workplace',
//         component: () => import('@/views/dashboard/Workplace'),
//         meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: [ 'dashboard' ] }
//     },
//     {
//         path: '/settinglist',
//         name: 'settingList',
//         component: () => import('@/views/fieldSetting/list/index.vue'),
//         meta: { title: '字段配置', icon: 'table' }
//     },
//     {
//         path: '/approvalManagement',
//         name: 'approvalManagement',
//         component: () => import(/* webpackChunkName: "fail" */ '@/views/approvalManagement/index.vue'),
//         meta: { title: '审批设置', icon: 'table' }
//     },
//     {
//         path: '/systemManagement',
//         name: 'systemManagement',
//         component: RouteView,
//         redirect: '/systemManagement/organizational',
//         meta: { title: '系统管理', icon: 'table', permission: [ 'table' ] }
//     },
//     {
//         path: '/systemManagement/organizational/:pageNo([1-9]\\d*)?',
//         name: 'organizational',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/systemManagement/organizational/index.vue'),
//         meta: { title: '组织架构', keepAlive: true, permission: ['table'] }
//     },
//     {
//         path: '/systemManagement/role/:pageNo([1-9]\\d*)?',
//         name: 'role',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/systemManagement/role/index.vue'),
//         meta: { title: '角色管理', keepAlive: true, permission: ['table'] }
//     },
//     {
//         path: '/systemManagement/menu/:pageNo([1-9]\\d*)?',
//         name: 'menu',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/systemManagement/menu/index.vue'),
//         meta: { title: '系统菜单', keepAlive: true, permission: ['table'] }
//     },
//     {
//         path: '/systemManagement/codeTable/:pageNo([1-9]\\d*)?',
//         name: 'codeTable',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/systemManagement/codeTable/index.vue'),
//         meta: { title: '码表管理', keepAlive: true, permission: ['table'] }
//     },
//     {
//         path: '/systemManagement/systemNotice/:pageNo([1-9]\\d*)?',
//         name: 'systemNotice',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/systemManagement/systemNotice/systemNotice.vue'),
//         meta: { title: '系统公告', keepAlive: true, permission: ['table'] }
//     },
//     {
//         path: '/systemManagement/rulesManage/:pageNo([1-9]\\d*)?',
//         name: 'rulesManage',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/systemManagement/rulesManage/rulesManage.vue'),
//         meta: { title: '规章制度管理', keepAlive: true, permission: ['table'] }
//     },
//     {
//         path: '/personnelFiles',
//         name: 'personnelFiles',
//         component: RouteView,
//         redirect: '/personnelFiles/staffList',
//         meta: { title: '人事档案', icon: 'table', permission: [ 'table' ] },
//     },
//     {
//         path: '/personnelFiles/staffList/:pageNo([1-9]\\d*)?',
//         name: 'staffList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelFiles/staffList/staffList.vue'),
//         meta: { title: '员工档案', keepAlive: true, permission: [ 'table' ] }
//     },
//     {
//         path: '/personnelFiles/staffApprovalList/:pageNo([1-9]\\d*)?',
//         name: 'staffApprovalList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelFiles/staffApprovalList/staffApprovalList.vue'),
//         meta: { title: '员工档案审批', keepAlive: true, permission: [ 'table' ] }
//     },
//     {
//         path: '/personnelDeployment',
//         name: 'personnelDeployment',
//         component: RouteView,
//         redirect: '/personnelDeployment/staffEditList',
//         meta: { title: '人事调配', icon: 'table', permission: [ 'table' ] },
//     },
//     {
//         path: '/personnelDeployment/staffEditList/:pageNo([1-9]\\d*)?',
//         name: 'staffEditList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelDeployment/staffEditList/staffEditList.vue'),
//         meta: { title: '员工调动列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/personnelDeployment/staffEditApproval/:pageNo([1-9]\\d*)?',
//         name: 'staffEditApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelDeployment/staffEditApproval/staffEditApproval.vue'),
//         meta: { title: '员工调动审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/personnelDeployment/staffQuitList/:pageNo([1-9]\\d*)?',
//         name: 'staffQuitList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelDeployment/staffQuitList/staffQuitList.vue'),
//         meta: { title: '员工离职列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/personnelDeployment/staffQuitApproval/:pageNo([1-9]\\d*)?',
//         name: 'staffQuitApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelDeployment/staffQuitApproval/staffQuitApproval.vue'),
//         meta: { title: '员工离职审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/personnelDeployment/staffEntryList/:pageNo([1-9]\\d*)?',
//         name: 'staffEntryList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelDeployment/staffEntryList/staffEntryList.vue'),
//         meta: { title: '员工入职列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/personnelDeployment/staffEntryApproval/:pageNo([1-9]\\d*)?',
//         name: 'staffEntryApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/personnelDeployment/staffEntryApproval/staffEntryApproval.vue'),
//         meta: { title: '员工入职审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/myPersonnel',
//         name: 'myPersonnel',
//         component: RouteView,
//         redirect: '/myPersonnel/licenceList',
//         meta: { title: '我的人事', icon: 'table', permission: [ 'table' ] },
//       },
//       {
//         path: '/myPersonnel/licenceList/:pageNo([1-9]\\d*)?',
//         name: 'licenceList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/myPersonnel/licenceList/licenceList.vue'),
//         meta: { title: '我的证照', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/myPersonnel/agreeList/:pageNo([1-9]\\d*)?',
//         name: 'agreeList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/myPersonnel/agreeList/agreeList.vue'),
//         meta: { title: '我的合同', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/myPersonnel/transferList/:pageNo([1-9]\\d*)?',
//         name: 'transferList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/myPersonnel/transferList/transferList.vue'),
//         meta: { title: '我的调动', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/myPersonnel/workTimeList/:pageNo([1-9]\\d*)?',
//         name: 'workTimeList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/myPersonnel/workTimeList/workTimeList.vue'),
//         meta: { title: '我的考勤', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/myPersonnel/vacationManage/:pageNo([1-9]\\d*)?',
//         name: 'vacationManage2',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/myPersonnel/vacationManage/vacationManage.vue'),
//         meta: { title: '休假管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/myPersonnel/myAchievements/:pageNo([1-9]\\d*)?',
//         name: 'myAchievements',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/myPersonnel/myAchievements/myAchievements.vue'),
//         meta: { title: '我的绩效', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/licenceManagement',
//         name: 'licenceManagement',
//         component: RouteView,
//         redirect: '/licenceManagement/licenceInfoList',
//         meta: { title: '证照管理', icon: 'table', permission: [ 'table' ] },
//       },
//       {
//         path: '/licenceManagement/licenceInfoList/:pageNo([1-9]\\d*)?',
//         name: 'licenceInfoList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/licenceManagement/licenceInfoList/licenceInfoList.vue'),
//         meta: { title: '证照信息列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/agreeManagement',
//         name: 'agreeManagement',
//         component: () => import('@/views/agreeManagement/agreeList/agreeList.vue'),
//             meta: { title: '合同管理', icon: 'table', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/recruitedManagement',
//         name: 'recruitedManagement',
//         component: RouteView,
//         redirect: '/recruitedManagement/staffApply',
//         meta: { title: '招聘管理', icon: 'table', permission: [ 'table' ] },
//       },
//       {
//         path: '/recruitedManagement/mlrpApply/:pageNo([1-9]\\d*)?',
//         name: 'mlrpApply',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/recruitedManagement/mlrpApply/mlrpApply.vue'),
//         meta: { title: '招聘计划申请', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/recruitedManagement/resumeList/:pageNo([1-9]\\d*)?',
//         name: 'resumeList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/recruitedManagement/resumeList/resumeList.vue'),
//         meta: { title: '简历管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/kpi',
//         name: 'kpi',
//         component: RouteView,
//         redirect: '/kpi/staffAchievements',
//         meta: { title: 'KPI考核', icon: 'table', permission: [ 'table' ] },
//       },
//       {
//         path: '/kpi/staffAchievements/:pageNo([1-9]\\d*)?',
//         name: 'staffAchievements',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/KPI/staffAchievements/staffAchievements.vue'),
//         meta: { title: '员工绩效', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/kpi/templateManagement/:pageNo([1-9]\\d*)?',
//         name: 'templateManagement',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/KPI/templateManagement/templateManagement.vue'),
//         meta: { title: '绩效考核设置管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/kpi/rewardsPunishments/:pageNo([1-9]\\d*)?',
//         name: 'rewardsPunishments',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/KPI/rewardsPunishments/rewardsPunishments.vue'),
//         meta: { title: '奖惩管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance',
//         name: 'staffAttendance',
//         component: RouteView,
//         redirect: '/staffAttendance/attendanceList',
//         meta: { title: '员工考勤', icon: 'table', permission: [ 'table' ] },
//       },
//       {
//         path: '/staffAttendance/attendanceList/:pageNo([1-9]\\d*)?',
//         name: 'attendanceList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/attendanceList/attendanceList.vue'),
//         meta: { title: '考勤记录', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/attendanceDetailList/:pageNo([1-9]\\d*)?',
//         name: 'attendanceDetailList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/attendanceDetailList/attendanceDetailList.vue'),
//         meta: { title: '考勤明细', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/workTraveling/:pageNo([1-9]\\d*)?',
//         name: 'workTraveling',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/workTraveling/workTraveling.vue'),
//         meta: { title: '出差管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/workTravelingApproval/:pageNo([1-9]\\d*)?',
//         name: 'workTravelingApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/workTravelingApproval/workTravelingApproval.vue'),
//         meta: { title: '出差审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/vacationManage/:pageNo([1-9]\\d*)?',
//         name: 'vacationManage',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/vacationManage/vacationManage.vue'),
//         meta: { title: '休假管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/vacationApproval/:pageNo([1-9]\\d*)?',
//         name: 'vacationApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/vacationApproval/vacationApproval.vue'),
//         meta: { title: '休假审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/workOvertimeManage/:pageNo([1-9]\\d*)?',
//         name: 'workOvertimeManage',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/workOvertimeManage/workOvertimeManage.vue'),
//         meta: { title: '加班管理', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/workTravelingApproval2/:pageNo([1-9]\\d*)?',
//         name: 'workTravelingApproval2',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/workTravelingApproval/workTravelingApproval.vue'),
//         meta: { title: '加班审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/rosterList/:pageNo([1-9]\\d*)?',
//         name: 'rosterList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/rosterList/rosterList.vue'),
//         meta: { title: '排班列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/staffAttendance/rosterDetail/:pageNo([1-9]\\d*)?',
//         name: 'rosterDetail',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/staffAttendance/rosterDetail/rosterDetail.vue'),
//         meta: { title: '排班明细', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/costManagement',
//         name: 'costManagement',
//         component: RouteView,
//         redirect: '/costManagement/budgetList',
//         meta: { title: '费用管理', icon: 'table', permission: [ 'table' ] },
//       },
//       {
//         path: '/costManagement/budgetList/:pageNo([1-9]\\d*)?',
//         name: 'budgetList',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/costManagement/budgetList/budgetList.vue'),
//         meta: { title: '预算管理列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/costManagement/budgetApproval/:pageNo([1-9]\\d*)?',
//         name: 'budgetApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/costManagement/budgetApproval/budgetApproval.vue'),
//         meta: { title: '预算审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/costManagement/reimbursement/:pageNo([1-9]\\d*)?',
//         name: 'reimbursement',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/costManagement/reimbursement/reimbursement.vue'),
//         meta: { title: '报销列表', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/costManagement/reimbursementApproval/:pageNo([1-9]\\d*)?',
//         name: 'reimbursementApproval',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/costManagement/reimbursementApproval/reimbursementApproval.vue'),
//         meta: { title: '报销审批', keepAlive: true, permission: [ 'table' ] }
//       },
//       {
//         path: '/costManagement/reimbursementAdjust/:pageNo([1-9]\\d*)?',
//         name: 'reimbursementAdjust',
//         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//         component: () => import('@/views/costManagement/reimbursementAdjust/reimbursementAdjust.vue'),
//         meta: { title: '报销调整', keepAlive: true, permission: [ 'table' ] }
//       }
// ]