import { axios } from '@/utils/axios'
import { getLastMonthDays } from '@/utils/commonCode'
import { homeUserCenter } from './user'

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

export function getDetailLayout_kpitodo ({pageCode,id}) {//获取考核待办详情布局接口
  return axios.post(`${baseBusiness}${pageCode}/detail/${id}`)
}

export function getEditLayout ({pageCode,id}) {//获取编辑布局接口
  return axios.post(`${baseBusiness}${pageCode}/layout/edit/${id}`)
}

export function getEditLayout_kpitodo  ({pageCode,id}) {//获取考核待办编辑布局接口
  return axios.post(`${baseBusiness}${pageCode}/${id}`)
}

export function saveLayout ({pageCode,params}) {//保存新增布局接口
  return axios.post(`${baseBusiness}${pageCode}/save`,params)
}

export function saveEditLayout ({pageCode,id,params}) {//保存编辑布局接口
  return axios.post(`${baseBusiness}${pageCode}/save/${id}`,params)
}

export function saveEditLayout_kpitodo (id,params) {// //考核待办 经理审批 保存编辑布局接口
  return axios.post(`${baseBusiness}performance_assessment_detail/save/pass/${id}`,params)
}

export function getToken(){
  return axios.post('https://api-dev-tfd.lenovo.com/user/oauth/token?grant_type=client_credentials',{},{headers:{Authorization:'Basic aHJvYWRtaW46YWRtaW4='}})
}

export async function getWorkOrderData(){
  const date = getLastMonthDays()
  const res = await getToken()
  const userInfo = await homeUserCenter()
  const params = {
    id:userInfo.id,
    "start_date": date[0],
    "end_date": date[1]
  }
  return axios.post('https://dev-tfd.lenovo.com/api/callCenter/historyOnsite/search',params,{headers:{Authorization:'bearer '+res.access_token}})
}