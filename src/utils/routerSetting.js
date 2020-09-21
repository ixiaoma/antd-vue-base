import { BasicLayout } from '@/layouts'

export const RouteView = {
    name: 'RouteView',
    render: (h) => h('router-view')
}
  
export const routerObj = {
    Analysis: () => import('@/views/dashboard/Analysis'),
    Workplace: () => import('@/views/dashboard/Workplace'),
    approvalManagement: () => import('@/views/approvalManagement/index.vue'),
    settingList: () => import('@/views/fieldSetting/list/index.vue'),
    organizational: () => import('@/views/systemManagement/organizational/index.vue'),
    role: () => import('@/views/systemManagement/role/index.vue'),
    menu: () => import('@/views/systemManagement/menu/index.vue'),
    codeTable: () => import('@/views/systemManagement/codeTable/index.vue'),
    systemNotice: () => import('@/views/systemManagement/systemNotice/systemNotice.vue'),
    rulesManage: () => import('@/views/systemManagement/rulesManage/rulesManage.vue'),
    vacationSet:() => import('@/views/systemManagement/vacationSet/vacationSet.vue'),
    staffList: () => import('@/views/personnelFiles/staffList/staffList.vue'),
    staffApprovalList: () => import('@/views/personnelFiles/staffApprovalList/staffApprovalList.vue'),
    staffEditList: () => import('@/views/personnelDeployment/staffEditList/staffEditList.vue'),
    staffEditApproval: () => import('@/views/personnelDeployment/staffEditApproval/staffEditApproval.vue'),
    staffQuitList: () => import('@/views/personnelDeployment/staffQuitList/staffQuitList.vue'),
    staffQuitApproval: () => import('@/views/personnelDeployment/staffQuitApproval/staffQuitApproval.vue'),
    staffEntryList: () => import('@/views/personnelDeployment/staffEntryList/staffEntryList.vue'),
    staffEntryApproval: () => import('@/views/personnelDeployment/staffEntryApproval/staffEntryApproval.vue'),
    licenceList: () => import('@/views/myPersonnel/licenceList/licenceList.vue'),
    agreeList: () => import('@/views/myPersonnel/agreeList/agreeList.vue'),
    transferList: () => import('@/views/myPersonnel/transferList/transferList.vue'),
    workTimeList: () => import('@/views/myPersonnel/workTimeList/workTimeList.vue'),
    vacationManageStaff: () => import('@/views/myPersonnel/vacationManage/vacationManage.vue'),
    myAchievements: () => import('@/views/myPersonnel/myAchievements/myAchievements.vue'),
    reminderList:() => import('@/views/myPersonnel/reminderList/reminderList.vue'),
    rulesList:() => import('@/views/myPersonnel/rulesList/rulesList.vue'),
    licenceInfoList: () => import('@/views/licenceManagement/licenceInfoList/licenceInfoList.vue'),
    agreeManagement: () => import('@/views/agreeManagement/agreeList/agreeList.vue'),
    mlrpApply: () => import('@/views/recruitedManagement/mlrpApply/mlrpApply.vue'),
    resumeList: () => import('@/views/recruitedManagement/resumeList/resumeList.vue'),
    staffAchievements: () => import('@/views/KPI/staffAchievements/staffAchievements.vue'),
    templateManagement: () => import('@/views/KPI/templateManagement/templateManagement.vue'),
    rewardsPunishments: () => import('@/views/KPI/rewardsPunishments/rewardsPunishments.vue'),
    attendanceList: () => import('@/views/staffAttendance/attendanceList/attendanceList.vue'),
    attendanceDetailList: () => import('@/views/staffAttendance/attendanceDetailList/attendanceDetailList.vue'),
    workTraveling: () => import('@/views/staffAttendance/workTraveling/workTraveling.vue'),
    workTravelingApproval: () => import('@/views/staffAttendance/workTravelingApproval/workTravelingApproval.vue'),
    vacationManage: () => import('@/views/staffAttendance/vacationManage/vacationManage.vue'),
    vacationApproval: () => import('@/views/staffAttendance/vacationApproval/vacationApproval.vue'),
    workOvertimeManage: () => import('@/views/staffAttendance/workOvertimeManage/workOvertimeManage.vue'),
    workOvertimeApproval: () => import('@/views/staffAttendance/workTravelingApproval/workTravelingApproval.vue'),
    rosterList: () => import('@/views/staffAttendance/rosterList/rosterList.vue'),
    rosterDetail: () => import('@/views/staffAttendance/rosterDetail/rosterDetail.vue'),
    budgetList: () => import('@/views/costManagement/budgetList/budgetList.vue'),
    budgetApproval: () => import('@/views/costManagement/budgetApproval/budgetApproval.vue'),
    reimbursement: () => import('@/views/costManagement/reimbursement/reimbursement.vue'),
    reimbursementApproval: () => import('@/views/costManagement/reimbursementApproval/reimbursementApproval.vue'),
    reimbursementAdjust: () => import('@/views/costManagement/reimbursementAdjust/reimbursementAdjust.vue'),
    budgetSetting: () => import('@/views/costManagement/budgetSetting/budgetSetting.vue')
}

export function getRouterData(list){
    const routerList = list.map(ele=>{
        const icon = ele.icon ? ele.icon : null 
        if(ele.childList && ele.childList.length){
            return {
              path:ele.url == 'index' ? '/' : '/'+ele.url,
              name:ele.url,
              component: ele.url == 'index' ? BasicLayout : RouteView,
              meta: { title: ele.name,icon:icon},
              redirect: '/'+ele.childList[0].url,
              children:getRouterData(ele.childList)
            }
        }else{
            let buttonList = []
            if(ele.buttonList && ele.buttonList.length){
                buttonList = ele.buttonList.map(ele=>ele.code)
            }
            return{
                path:'/'+ele.url,
                name:ele.url,
                component: routerObj[ele.url],
                meta: { title: ele.name,icon:icon,buttonList}
            }
        }
    })
    return routerList
}