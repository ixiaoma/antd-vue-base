import { axios } from '@/utils/axios'
let frameAPI='frame/'//'api/frame/v1/'
let authAPI='auth/'
let baseBusiness = 'business/'
let systemAPI='auth/system/'
let configAPI='api/config/v1/'
const userApi = {
  Login: '/auth/login',
  LoginToken: `/auth/oauth/token`,
  Logout: '/auth/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/user/info',
  UserMenu: '/user/nav',
  Service: '/service'
}
const api={
  resetPass:systemAPI+'user/update_pw',//重置密码
  homeUserCenter:systemAPI+'user/home',//个人中心
  getUserList:systemAPI+'user/condition/page',//用户列表
  getUserLike: systemAPI+'user/getUsersByNickname',//用户模糊查询
  userEnable: systemAPI+'user/isenableduser/update',//用户禁用启用
  userSave: systemAPI+'user/save',//用户新增
  userUpdate: systemAPI+'user/update',//用户修改
  userDeatil: systemAPI+'user/',//用户id获取详情
  userDel: systemAPI+'user/deleteids',//用户删除
  userPassUpdate: systemAPI+'user/rest/user',//修改密码
  userExport: systemAPI+'user/export',
  getDeptTreeData:systemAPI+'dept/depttree',//部门tree
  addDeptTree:systemAPI+'dept/',//部门新增
  editDeptTree:systemAPI+'dept/update',//部门更新
  detailDeptTree:systemAPI+'dept/',//部门详情
  delDeptTree:systemAPI+'dept/',//部门删除
  rolesList:systemAPI+'role/list',//用户分配角色
  rolesPage:systemAPI+'role',//角色管理中的角色
  rolesUpdate:systemAPI+'role/update',//角色编辑
  rolesCopy: systemAPI+'role/copy/',//角色复制
  enabledRole:systemAPI+'role/isenabledrole/update',//禁用启用
  rolesOperation:systemAPI+'role/',
  rolesSwitchUser:systemAPI+'user/roleid',//角色下的用户
  rolesUserTransfer:systemAPI+'userRole',//用户权限穿梭框
  rolesUserTransferDel:systemAPI+'userRole/delete',//用户权限穿梭框删除
  saveRoleResource:systemAPI+'role/',//角色对应的菜单保存
  roleResource:systemAPI+'roleResource/',//角色对应的菜单选中的id
  menusList:systemAPI+'resource/menu',//'menus/menu',//菜单管理树
  navMenu:systemAPI+'userRole/menu',//菜单导航
  menusListChild:systemAPI+'resource/menu/',//'menus/menu/',//菜单管理树
  menusDetail:systemAPI+'resource/',//菜单详情
  menusAdd:systemAPI+'resource',//菜单新增
  objectTypeList:frameAPI+'object-define/page',//object
  noticePage: systemAPI+'sys-notice/page',//系统公告列表
  noticeAdd: systemAPI+'sys-notice/save',//系统公告新增
  noticeEdit: systemAPI+'sys-notice/edit',//系统公告编辑
  noticeTop: systemAPI+'sys-notice/stick',//系统公告置顶
  noticeDetail: systemAPI+'sys-notice/show',//系统公告详情
  noticeDel: systemAPI+'sys-notice/delete',//系统公告删除
  noticeRead: systemAPI+'notice/read/',//系统公告已读
  noticeHome: systemAPI+'notice/getByItcode',//系统公告首页
  fileUpload:frameAPI+'file/upload',//文件上传
  codeTableList:frameAPI+'code-category/page',//码表管理列表
  addCategory:frameAPI+'code-category/save',//码表管理列表新增
  editCategory:frameAPI+'category/edit',//码表管理列表编辑
  delCategory:frameAPI+'code-category/delete',//码表管理列表删除
  // getCategoryList:frameAPI+'category/list',//获取所有类别
  getCategoryList:frameAPI+'code-category/parent',//获取所有类别
  getCateValuePage:frameAPI+'code-item/list/',//码表值管理
  delCodeValue:frameAPI+'code-item/delete',//码表值删除  
  queryParentList: frameAPI+'codes/save/query/',//多级联动码表值加载上级节点的下拉值
  loadNextData: frameAPI+'codes/categorycode/parentcodekey',//多级联动查询
  addCodeValue: frameAPI+'code-item/save',//码表值保存
  editCodeValue: frameAPI+'code-item/edit',//码表值编辑保存
  tableCateDefault:frameAPI+'code-item/default/',//是否默认
  getCodeList:frameAPI+'/code-item/listAll/',//获取码表下拉框
  codeCategoryItems:frameAPI+'code-category/items/',//二级三级新建码表值调用的接口
  vacationTypePage:authAPI+'vacationType/page',//假期设置-请假类型
  vacationTypeSave:authAPI+'vacationType/save',//假期设置-请假类型新增编辑
  vacationTypeDel:authAPI+'vacationType/delete/',//假期设置-请假类型删除
  userVacationColumn:authAPI+'userVacation/page/tablehead',//假期设置-假期余额表头
  userVacationPage:authAPI+'userVacation/page',////假期设置-假期余额分页
  userVacationDetail:authAPI+'userVacation/',////假期设置-假期余额分页
  userVacationEdit:authAPI+'userVacation/edit',////假期设置-假期余额分页
  userVacationImport:authAPI+'userVacation/importExcel',//假期设置-假期余额导入
  userVacationExport:authAPI+'userVacation/exportExcel',//假期设置-假期余额导入
  userVacationDown:authAPI+'userVacation/download/template',//假期设置-假期余额导入
  budgetGetAmount:baseBusiness+'budget/get/config/amount', //费用管理-预算设置-查看预算金额
  budgetEditAmount:baseBusiness+'budget/edit/config/amount', //费用管理-预算设置-修改预算金额
  budgetEditLatitude:baseBusiness+'budget/edit/config/latitude', //费用管理-预算设置-修改预算范围
  budgetGetLatitude:baseBusiness+'budget/get/config/latitude', //费用管理-预算设置-查看预算范围
}



/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return axios.post(userApi.Login, parameter)
}

export function loginToken (params , headers){
  return axios.get(userApi.LoginToken , {params , headers} )
}

// export function getSmsCaptcha (parameter) {
//   return request({
//     url: userApi.SendSms,
//     method: 'post',
//     data: parameter
//   })
// }

export function getInfo () {
  return axios.get(userApi.UserInfo)
}

// export function getCurrentUserNav () {
//   return request({
//     url: userApi.UserMenu,
//     method: 'get'
//   })
// }

export function logout () {
  return axios.post(userApi.Logout)
}

// /**
//  * get user 2step code open?
//  * @param parameter {*}
//  */
export function get2step (parameter) {
  return axios.post(userApi.twoStepCode, parameter)
}

export function getServiceList (parameter) {
  return axios.get(userApi.Service, { params: parameter })
}


export function resetPass(parameter) {
  return axios.post(api.resetPass, parameter)
}
export function homeUserCenter(parameter) {
  return axios.get(api.homeUserCenter, parameter)
}
export function getUserList(parameter) {
  return axios.post(api.getUserList, parameter)
}
export function getUserLike(parameter) {
  return axios.get(api.getUserLike,{params:parameter})
}
export function userEnable(parameter) {
  return axios.post(api.userEnable, parameter)
}
export function userSave(parameter) {
  return axios.post(api.userSave, parameter)
}
export function userUpdate(parameter) {
  return axios.post(api.userUpdate, parameter)
}
export function userDeatil(parameter) {
  return axios.get(api.userDeatil+parameter)
}
export function userDel(parameter) {
  return axios.post(api.userDel, parameter)
}
export function userPassUpdate(parameter) {
  return axios.post(api.userPassUpdate, parameter)
}
export const userExport=process.env.VUE_APP_API_BASE_URL+api.userExport
export function getDeptTreeData(parameter) {
  return axios.post(api.getDeptTreeData, parameter)
}
export function addDeptTree(parameter) {
  return axios.post(api.addDeptTree, parameter)
}
export function editDeptTree(parameter) {
  return axios.post(api.editDeptTree, parameter)
}
export function detailDeptTree(parameter) {
  return axios.post(api.detailDeptTree+parameter)
}
export function delDeptTree(parameter) {
  return axios.post(api.delDeptTree+parameter)
}
export function rolesList(parameter) {
  return axios.get(api.rolesList,{params:parameter})
}
export function rolesAssignUser(parameter,params) {
  return axios.post(api.userDeatil+parameter,params)
}
export function rolesPage(parameter) {
  return axios.get(api.rolesPage,{params:parameter})
}
export function addRole(parameter) {
  return axios.post(api.rolesPage,parameter)
}
export function editRole(parameter) {
  return axios.post(api.rolesUpdate,parameter)
}
export function copyRole(id,parameter) {
  return axios.post(api.rolesCopy+id,parameter)
}
export function enabledRole(parameter) {
  return axios.post(api.enabledRole,parameter)
}
export function deleteRole(id) {
  return axios.post(api.rolesOperation+id+'/delete')
}

export function rolesMenu(parameter) {
  return axios.get(api.rolesOperation+parameter)
}
export function rolesSwitchUser(parameter) {
  return  axios.get(api.rolesSwitchUser,{params:parameter})
}

export function rolesUserTransfer(parameter) {
  return axios.post(api.rolesUserTransfer,parameter)
}
export function rolesUserTransferDel(parameter) {
  return axios.post(api.rolesUserTransferDel,parameter)
}
export function saveRoleResource(id,parameter) {
  return axios.post(api.saveRoleResource+id+'/resource/update',parameter)
}
export function roleResource(id) {
  return axios.get(api.roleResource+id)
}
export function menusList() {
  return axios.get(api.menusList)
}
export function navMenu() {
  return axios.get(api.navMenu)
}
export function menusListChild(id) {
  return axios.get(api.menusListChild+id)
}
export function menusDetail(id) {
  return axios.get(api.menusDetail+id)
}
export function menusAdd(params) {
  return axios.post(api.menusAdd,params)
}
export function menusEdit(id,params) {
  return axios.post(api.menusAdd+'/'+id+'/update',params)
}
export function menusDel(id) {
  return axios.post(api.menusAdd+'/'+id+'/delete')
}
export function objectTypeList(params) {
  return axios.post(api.objectTypeList,params)
}
export function noticePage(params) {
  return axios.post(api.noticePage,params)
}
export function noticeAdd(params) {
  return axios.post(api.noticeAdd,params)
}
export function noticeEdit(params) {
  return axios.post(api.noticeEdit,params)
}
export function noticeDetail(params) {
  return axios.get(api.noticeDetail+params)
}
export function noticeDel(params) {
  return axios.post(api.noticeDel,params)
}
export function noticeRead(params) {
  return axios.post(api.noticeRead+params)
}
export function noticeTop(params) {
  return axios.get(api.noticeTop+params)
}
export const fileUpload=process.env.VUE_APP_API_BASE_URL+api.fileUpload
// noticeHome: 'notice/getByItcode',//系统公告首页
export function codeTableList(params) {
  return axios.post(api.codeTableList,params)
}
export function addCategory(params) {
  return axios.post(api.addCategory,params)
}
export function editCategory(params) {
  return axios.post(api.editCategory,params)
}
export function delCategory(params) {
  return axios.post(api.delCategory,params)
}
export function getCategoryList(params) {
  return axios.get(api.getCategoryList,params)
}
export function getCateValuePage(code,params) {
  return axios.post(api.getCateValuePage+code,params)
}
export function getCodeList(code) {
  return axios.post(api.getCodeList+code)
}
export function codeCategoryItems(code) {
  return axios.post(api.codeCategoryItems+code)
}
export function delCodeValue(params) {
  return axios.post(api.delCodeValue,params)
}
export function queryParentList(params) {
  return axios.get(api.queryParentList+params)
}
export function loadNextData(params) {
  return axios.get(api.loadNextData,{params:params})
}
export function addCodeValue(params) {
  return axios.post(api.addCodeValue,params)
}
export function editCodeValue(params) {
  return axios.post(api.editCodeValue,params)
}
export function tableCateDefault(id,params) {
  return axios.post(api.tableCateDefault+id,params)
}
export function vacationTypePage(params) {
  return axios.post(api.vacationTypePage,params)
}
export function vacationTypeSave(params) {
  return axios.post(api.vacationTypeSave,params)
}
export function vacationTypeDel(params) {
  return axios.post(api.vacationTypeDel+params)
}
export function userVacationColumn(params) {
  return axios.get(api.userVacationColumn,params)
}
export function userVacationPage(params) {
  return axios.post(api.userVacationPage,params)
}
export function userVacationDetail(params) {
  return axios.get(api.userVacationDetail+params)
}
export function userVacationEdit(params) {
  return axios.post(api.userVacationEdit,params)
}
export function userVacationExport(params) {
  return axios.post(api.userVacationExport,params,{responseType: 'arraybuffer'})
}
export function budgetEditAmount(params) {
  return axios.post(api.budgetEditAmount,params)
}
export function budgetGetAmount(params) {
  return axios.post(api.budgetGetAmount,params)
}
export function budgetEditLatitude(params) {
  return axios.post(api.budgetEditLatitude,params)
}
export function budgetGetLatitude(params) {
  return axios.post(api.budgetGetLatitude,params)
}










