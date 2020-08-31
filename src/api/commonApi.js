import { axios } from '@/utils/axios'

const baseBusiness = 'business/'
const baseFrame = 'frame/'

export function getBasePage ({pageCode,params}) {//获取列表接口
  return axios.post(`${baseBusiness}${pageCode}/page`,params)
}

export function getTableSearch ({pageCode}) {//获取列表查询接口
  return axios.post(`${baseFrame}field-define/list/search/${pageCode}`)
}

export function getTableHeader ({pageCode}) {//获取列表表头接口
  return axios.post(`${baseFrame}field-define/list/tablehead/${pageCode}`)
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

export function saveLayout ({pageCode,params}) {//保存新增布局接口
  return axios.post(`${baseBusiness}${pageCode}/save`,params)
}

export function saveEditLayout ({pageCode,id,params}) {//保存编辑布局接口
  return axios.post(`${baseBusiness}${pageCode}/save/${id}`,params)
}