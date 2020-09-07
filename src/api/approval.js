import { axios } from '@/utils/axios'

const baseFrame = 'process/'

const settingApi = {
  approvalApi: baseFrame + '/process-define/node/detail/',//审批数据
}

export function getApprovalDate ({id}) {
    return axios.get(settingApi.approvalApi+id)
}