import { axios } from '@/utils/axios'

const baseBusiness = 'business/'

// 报销
export function reimbursementApproval (params) {// 报销申请
    return axios.post(`${baseBusiness}reimbursement/approval`,params)
}
export function reimbursementPage (params) {// 报销列表
    return axios.post(`${baseBusiness}reimbursement/page`,params)
}


// 员工档案

export function basicInfoStorage (params) {// 暂存
    return axios.post(`${baseBusiness}basic_info/storage`,params)
}





