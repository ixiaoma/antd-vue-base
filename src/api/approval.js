import { axios } from '@/utils/axios'

const baseFrame = 'process/'

const settingApi = {
  approvalApi: baseFrame + '/process-define/node/detail/',//审批数据
  saveApproval: baseFrame + 'process-define/node/save/'//审批信息保存
}

export function getApprovalDate ({id}) {
    return axios.get(settingApi.approvalApi+id)
}

export function saveApproval ({id,params}) {
  return axios.post(settingApi.saveApproval+id,params)
}
