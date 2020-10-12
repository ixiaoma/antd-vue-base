import { axios } from '@/utils/axios'

//下拉框值(码表)
export function lableData( params ){
    return axios.get('codes/selectList',{params})
}

// 级联
export function cascadeLabelData(params ){
    return axios.get('codes/categoryCode/parentCodeKey',{params})
}
//系统用户
export function getUserList(params){
    return axios.post('adminUser/page',params)
}
export function agentSave(params){
    return axios.post(`adminUser/${params.id ? 'edit' : 'save'}`,params)
}
export function agentDetail(id){
    return axios.get('adminUser/select/detail/'+id)
}
export function agentDelete(params){
    return axios.post('adminUser/delete',params)
}

export function agentEnable(id,params){
    return axios.get('adminUser/enable/'+id,{params})
}
export function agentPassword(params){//重置密码
    return axios.post('adminUser/reset/password',params)
}
export function companySearch (companyName) {//企业模糊搜索下拉框
    return axios.get('company/vague/list/'+companyName)
}

export function getAllUserData() {//获取所有的用户
    return axios.get('adminUser/list');
}

//菜单管理
export function menusList() {//获取菜单列表
    return axios.get('resource/treePage')
}

export function addMenus(params) {//添加菜单节点
    return axios.post('resource/save',params)
}

export function editMenus(params) {//编辑菜单节点
    return axios.post('resource/edit',params)
}

export function deleteMenus(params) {//删除菜单节点
    return axios.post('resource/delete',params)
}

//角色管理
export function getRoleListData() {//获取角色列表
    return axios.post('role/page')
}

export function addRole(params) {//添加角色节点
    return axios.post('role/save',params)
}

export function editRole(params) {//编辑角色节点
    return axios.post('role/edit',params)
}

export function deleteRole(params) {//删除角色节点
    return axios.post('role/delete',params)
}

export function copyRole(params) {//复制角色节点
    return axios.post('role/copy',params)
}

export function enabledRole(id,params) {//禁用启用角色
    return axios.get(`role/enable/${id}`,{params})
}

export function getRoleResource(id) {//获取角色已配置的资源数据
    return axios.get(`/role/select/${id}/resource`)
}

export function getRoleUser(id) {//获取角色已配置的用户数据
    return axios.get(`/role/select/${id}/user`)
}

export function saveRoleResource(params) {//保存角色配置的资源数据
    return axios.post('role/dispose/resource',params)
}

export function saveRoleUser(params) {//保存角色配置的用户数据
    return axios.post('role/dispose/user',params)
}

//码表类别管理
export function getCategoryPage(params) {//获取码表类别列表数据
    return axios.post('category/page',params)
}

export function getCategoryList() {//查询所有的类别
    return axios.get('category/list')
}

export function addCategory(params) {//新建码表类别
    return axios.post('category/save',params)
}

export function editCategory(params) {//编辑码表类别
    return axios.post('category/edit',params)
}

export function deleteCategory(id) {//删除码表类别
    return axios.post(`category/deleted/${id}`)
}

export function getCateValuePage(params) {//获取码表值列表数据
    return axios.post('codes/page',params)
}

export function addCodeValue(params) {//新建码表值
    return axios.post('codes/save',params)
}

export function editCodeValue(params) {//编辑码表值
    return axios.post('codes/edit',params)
}

export function delCodeValue(params) {//删除码表值
    return axios.post('codes/delete/batch',params)
}

export function queryParentList(id) {//多级联动码表值加载上级节点的下拉值
    return axios.get(`codes/save/query/${id}`)
}

export function loadNextData(categoryCode,parentCodeKey) {//多级联动加载下级数据
    return axios.get(`codes/categoryCode/parentCodeKey?categoryCode=${categoryCode}&parentCodeKey=${parentCodeKey}`)
}

//首页顶部数据统计接口
export function getTopTotalData() {
    return axios.get('homePage/count')
}

export function getEnterpriseList(params){
    return axios.post('company/page',params)
}