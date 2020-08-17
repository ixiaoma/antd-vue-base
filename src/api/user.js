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
  getUserList:frameAPI+'user/condition/page',
  getDeptTreeData:frameAPI+'dept/depttree',
  addDeptTree:frameAPI+'dept/',
  editDeptTree:frameAPI+'dept/update',
  detailDeptTree:frameAPI+'dept/',
  delDeptTree:frameAPI+'dept/',
  rolesList:frameAPI+'roles/list'
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

