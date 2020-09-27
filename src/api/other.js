import { axios } from '@/utils/axios'

const baseBusiness = 'business/'

export function getRosterDetails (id) {//获取列表接口
  return axios.post(`${baseBusiness}roster_details/id/query/${id}`)
}
// 考核待办列表
export function assessTodoLIst (params) {//获取列表接口
  return axios.post(`${baseBusiness}performance_assessment_detail/page/todo`,params)
}
// 日常报销待办
export function taskDailyDetail (params) {//获取列表接口
  return axios.get(`${baseBusiness}reimbursement_daily/daily/detail/${params}`)
}
// 日常报销待办 审批
export function taskComplete (params) {//获取列表接口
  return axios.post(`${baseBusiness}reimbursement_daily/task/complete`,params)
}
// 加班 判断加班类型方法
export function overtimeJudgmentType (params) {//获取列表接口
  return axios.post(`${baseBusiness}overtime/judgmentType`,params)
}