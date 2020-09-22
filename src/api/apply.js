import { axios } from '@/utils/axios'

const baseFrame = 'process/'
let baseBusiness = 'business/'

const settingApi = {
  applyList: baseFrame + 'business/execution/page',//申请列表
  applyListAdmin: baseFrame + 'business/execution/page/admin',//申请列表
  applyReolaceCard:baseBusiness+'replace-card/insertBatch'//申请补卡
}



export function applyList (params) {
  return axios.post(settingApi.applyList,params)
}
export function applyListAdmin (params) {
    return axios.post(settingApi.applyList,params)
}
export function applyReolaceCard (params) {
  return axios.post(settingApi.applyReolaceCard,params)
}

