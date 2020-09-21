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
export function basicInfoSave (params) { // 提交
    return axios.post(`${baseBusiness}basic_info/save`,params)
}
export function basicInfoCommit (id , params) { // 提交
    return axios.post(`${baseBusiness}basic_info/commit/${id}`,params)
}
export function basicInfoApproval (params) { // 提交
    return axios.post(`${baseBusiness}basic_info/callback`,params)
}


// 教育经历
export function educationalExperienceSave (params) {// 新增
    return axios.post(`${baseBusiness}educational_experience/save`,params)
}
export function educationalExperiencePage (params) {// 列表
    return axios.post(`${baseBusiness}educational_experience/page`,params)
}
export function educationalExperienceEdit (id , params) {// 编辑
    return axios.post(`${baseBusiness}educational_experience/save/${id}`,params)
}

// 工作经历
export function workExperienceSave (params) {// 新增
    return axios.post(`${baseBusiness}work_experience/save`,params)
}
export function workExperiencePage (params) {// 列表
    return axios.post(`${baseBusiness}work_experience/page`,params)
}
export function workExperienceEdit (id , params) {// 编辑
    return axios.post(`${baseBusiness}work_experience/save/${id}`,params)
}
// 社会关系
export function socialRelationsSave (params) {// 新增
    return axios.post(`${baseBusiness}social_relations/save`,params)
}
export function socialRelationsPage (params) {// 列表
    return axios.post(`${baseBusiness}social_relations/page`,params)
}
export function socialRelationsEdit (id , params) {// 编辑
    return axios.post(`${baseBusiness}social_relations/save/${id}`,params)
}

// 更新简历状态 
export function resumeUpdateStatus (id , params) {// 编辑
    return axios.post(`${baseBusiness}resume/update/status/${id}`,params)
}