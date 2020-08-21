import { axios } from '@/utils/axios'
let frameAPI='api/frame/v1/'
const userApi = {
  Login: '/auth/login',
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
  getUserList:frameAPI+'user/condition/page',//用户列表
  userEnable: frameAPI+'user/isenableduser/update',//用户禁用启用
  userSave: frameAPI+'user/save',//用户新增
  userUpdate: frameAPI+'user/update',//用户修改
  userDeatil: frameAPI+'user/',//用户id获取详情
  userDel: frameAPI+'user/deleteids',//用户删除
  userPassUpdate: frameAPI+'user/rest/user',//修改密码
  userExport: frameAPI+'user/export',
  getDeptTreeData:frameAPI+'dept/depttree',//部门tree
  addDeptTree:frameAPI+'dept/',//部门新增
  editDeptTree:frameAPI+'dept/update',//部门更新
  detailDeptTree:frameAPI+'dept/',//部门详情
  delDeptTree:frameAPI+'dept/',//部门删除
  rolesList:frameAPI+'roles/list',//用户分配角色
  rolesPage:frameAPI+'roles',//角色管理中的角色
  rolesUpdate:frameAPI+'roles/update',//角色编辑
  rolesCopy: frameAPI+'roles/copy/',//角色复制
  enabledRole:frameAPI+'roles/isenabledrole/update',//禁用启用
  rolesOperation:frameAPI+'roles/',
  rolesSwitchUser:frameAPI+'user/roleid',//角色下的用户
  rolesUserTransfer:frameAPI+'userrole',//用户权限穿梭框
  rolesUserTransferDel:frameAPI+'userrole/delete',//用户权限穿梭框删除
  
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

export function getUserList(parameter) {
  return axios.post(api.getUserList, parameter)
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



