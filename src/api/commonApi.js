import { axios } from '@/utils/axios'

const baseBusiness = 'business/'
const baseFrame = 'frame/'



export function getTableSearch ({pageCode}) {//获取列表查询接口
  return axios.post(`${baseFrame}field-define/list/search/${pageCode}`)
}

export function getTableHeader ({pageCode}) {//获取列表表头接口
  return axios.post(`${baseFrame}field-define/list/tablehead/${pageCode}`)
}

export function getCascaderList ({parentCode}) {//获取联动接口
  return axios.post(`${baseFrame}/code-item/parent/${parentCode}`)
}


export function getBasePage ({pageCode,params}) {//获取列表接口
  return axios.post(`${baseBusiness}${pageCode}/page`,params)
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

export function getToken(){
  return axios.post('https://api-dev-tfd.lenovo.com/user/oauth/token?grant_type=client_credentials',{},{headers:{Authorization:'Basic aHJvYWRtaW46YWRtaW4='}})
}

export async function getWorkOrderData(){
  const res = await getToken()
  const params = {
    "end_date": "2020-10-01T07:31:11.397Z",
    "id": "2c9380826f115b40016f11f14e6e0099",
    "start_date": "2019-09-01T07:31:11.397Z"
  }
  return axios.post('https://dev-tfd.lenovo.com/api/callCenter/historyOnsite/search',params,{headers:{Authorization:res.access_token}})
}