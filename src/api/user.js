import { axios } from '@/utils/axios'
let frameAPI='api/frame/v1/'
let configAPI='api/config/v1/'
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
  getUserLike: frameAPI+'user/getUsersByNickname',//用户模糊查询
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
  menusList:frameAPI+'resource/menu',//'menus/menu',//菜单管理树
  menusListChild:frameAPI+'resource/menu/',//'menus/menu/',//菜单管理树
  menusDetail:frameAPI+'resource/',//菜单详情
  menusAdd:frameAPI+'resource',//菜单新增
  objectTypeList:configAPI+'objectdefine/list/objectType',//object
  noticePage: frameAPI+'notice/queryPage',//系统公告列表
  noticeAdd: frameAPI+'notice/add',//系统公告新增
  noticeEdit: frameAPI+'notice/edit',//系统公告编辑
  noticeTop: frameAPI+'notice/stick',//系统公告置顶
  noticeDetail: frameAPI+'notice/getById',//系统公告详情
  noticeDel: frameAPI+'notice/deletebyids',//系统公告删除
  noticeRead: frameAPI+'notice/read/',//系统公告已读
  noticeHome: frameAPI+'notice/getByItcode',//系统公告首页
  fileUpload:frameAPI+'file/upload',//文件上传
  codeTableList:frameAPI+'category/page',//码表管理列表
  addCategory:frameAPI+'category/save',//码表管理列表新增
  editCategory:frameAPI+'category/edit',//码表管理列表编辑
  delCategory:frameAPI+'category/deleted/',//码表管理列表删除
  getCategoryList:frameAPI+'category/list',//获取所有类别
  getCateValuePage:frameAPI+'codes/page',//码表值管理
  delCodeValue:frameAPI+'codes/deleted/',//码表值删除  
  queryParentList: 'codes/save/query/',//多级联动码表值加载上级节点的下拉值
  loadNextData: 'codes/categorycode/parentcodekey',//多级联动查询
  addCodeValue: 'codes/value/save',//码表值保存
  editCodeValue: 'codes/edit',//码表值编辑保存
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
export function menusList() {
  return axios.get(api.menusList)
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
export function objectTypeList() {
  return axios.get(api.objectTypeList)
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
  return axios.get(api.noticeDetail,{params:params})
}
export function noticeDel(params) {
  return axios.post(api.noticeDel,params)
}
export function noticeRead(params) {
  return axios.post(api.noticeRead+params)
}
export const fileUpload=process.env.VUE_APP_API_BASE_URL+api.fileUpload
// noticeTop: 'notice/stick',//系统公告置顶
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
  return axios.post(api.delCategory+params)
}
export function getCategoryList(params) {
  return axios.get(api.getCategoryList,params)
}
export function getCateValuePage(params) {
  return axios.post(api.getCateValuePage,params)
}
export function delCodeValue(params) {
  return axios.post(api.delCodeValue+params)
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







