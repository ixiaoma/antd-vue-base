import { axios } from '@/utils/axios'

const baseBusiness = 'business/'

export function getBasePage (pageCode) {//获取列表接口
  return axios.post(`${baseBusiness}${pageCode}/page`)
}

export function deletePageList ({pageCode,id}) {//删除列表数据接口
  return axios.post(`${baseBusiness}${pageCode}/delete/${id}`)
}

export function getBaseLayout ({pageCode}) {//获取新增布局接口
    return axios.post(`${baseBusiness}${pageCode}/layout/create`)
}

export function getDetailLayout ({pageCode,id}) {//获取详情布局接口
  return axios.post(`${baseBusiness}${pageCode}/layout/detail/${id}`)
}

export function getEditLayout ({pageCode,id}) {//获取编辑布局接口
  return axios.post(`${baseBusiness}${pageCode}/layout/edit/${id}`)
}

export function saveLayout ({pageCode}) {//保存新增布局接口
  return axios.post(`${baseBusiness}${pageCode}/save`)
}

export function saveEditLayout ({pageCode,id}) {//保存编辑布局接口
  return axios.post(`${baseBusiness}${pageCode}/save/${id}`)
}