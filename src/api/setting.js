import { axios } from '@/utils/axios'

const baseFrame = 'frame/'

const settingApi = {
  objectList: baseFrame + 'object-define/page',
  fieldDefinedSave: baseFrame + 'field-define/save/',
  fieldDefinedList: baseFrame + 'field-define/list/',
  fieldDefinedDelete: baseFrame + 'field-define/delete/',
  saveGroupField: baseFrame + 'field-layout/group-field/save',
  deleteGroupField: baseFrame + 'field-layout/group-field/delete',
  listLayout: baseFrame + 'field-layout/list/',
  listDisplayLayout: baseFrame + 'field-layout/list/display/',
  saveFieldLayout: baseFrame + 'field-layout/save/'
}

export function getObjectList (parameter) {
    return axios.post(settingApi.objectList,parameter)
}
export function fieldDefinedSave (objectDefineCode) {
    return axios.post(settingApi.fieldDefinedSave+objectDefineCode)
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
export function saveFieldLayout ({objectDefineCode,layoutType}) {
    return axios.post(settingApi.saveFieldLayout+objectDefineCode+'/'+layoutType)
}