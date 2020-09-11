import { axios } from '@/utils/axios'

const baseFrame = 'process/'

const settingApi = {
  approvalApi: baseFrame + 'process-define/node/detail/',//审批数据
  saveApproval: baseFrame + 'process-define/node/save/',//审批信息保存
  saveForm: baseFrame + 'process-define/form/save/',//审批模板保存
  getFormDetail: baseFrame + 'process-define/form/detail/',//审批模板详情
  getFlowList: baseFrame + 'process-define/page',//获取审批列表
  saveFlow: baseFrame + 'process-define/save'//保存审批流
}

export function getApprovalDate ({id}) {
    return axios.get(settingApi.approvalApi+id)
}

export function saveApproval ({id,params}) {
  return axios.post(settingApi.saveApproval+id,params)
}

export function getFormDetail ({id}) {
  return axios.get(settingApi.getFormDetail+id)
}

export function saveForm ({id,params}) {
  return axios.post(settingApi.saveForm+id,params)
}

export function saveFlow ({params}) {
  return axios.post(settingApi.saveFlow,params)
}

export function getFlowList () {
  return axios.post(settingApi.getFlowList)
}