import { axios } from '@/utils/axios'

const baseFrame = 'frame/'

const settingApi = {
  objectList: baseFrame + 'object-define/page',//对象列表
  fieldDefinedSave: baseFrame + 'field-define/save/',//字段保存+字段编辑
  fieldDefinedList: baseFrame + 'field-define/list/',
  fieldDefinedDelete: baseFrame + 'field-define/delete/',//字段删除
  saveGroupField: baseFrame + 'field-layout/group-field/save',//分割线保存
  deleteGroupField: baseFrame + 'field-layout/group-field/delete',//分割线删除
  listLayout: baseFrame + 'field-layout/list/',//布局接口
  listDisplayLayout: baseFrame + 'field-layout/list/display/',//布局接口（暂时没有用到）
  saveFieldLayout: baseFrame + 'field-layout/save/'//布局保存
}

export function getObjectList (parameter) {
    return axios.post(settingApi.objectList,parameter)
}
export function fieldDefinedSave (objectDefineCode,parameter) {
    return axios.post(settingApi.fieldDefinedSave+objectDefineCode,parameter)
}
export function fieldDefinedList (objectDefineCode) {
    return axios.post(settingApi.fieldDefinedList+objectDefineCode)
}
export function fieldDefinedDelete ({objectDefineCode,fieldCode}) {
    return axios.post(settingApi.fieldDefinedDelete+objectDefineCode+'/'+fieldCode)
}
export function saveGroupField (parameter) {
    return axios.post(settingApi.saveGroupField,parameter)
}
export function deleteGroupField (parameter) {
    return axios.post(settingApi.deleteGroupField,parameter)
}
export function listLayout ({objectDefineCode,layoutType}) {
    return axios.post(settingApi.listLayout+objectDefineCode+'/'+layoutType)
}
export function listDisplayLayout ({objectDefineCode,layoutType}) {
    return axios.post(settingApi.listDisplayLayout+objectDefineCode+'/'+layoutType)
}
export function saveFieldLayout ({objectDefineCode,layoutType,parameter}) {
    return axios.post(settingApi.saveFieldLayout+objectDefineCode+'/'+layoutType,parameter)
}