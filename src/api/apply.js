import { axios } from '@/utils/axios'

const baseFrame = 'process/'

const settingApi = {
  applyList: baseFrame + 'business/execution/page',//申请列表
  applyListAdmin: baseFrame + 'business/execution/page/admin',//申请列表
}



export function applyList (params) {
  return axios.post(settingApi.applyList,params)
}
export function applyListAdmin (params) {
    return axios.post(settingApi.applyList,params)
  }
