import { axios } from '@/utils/axios'

const baseBusiness = 'business/'

export function getRosterDetails (id) {//获取列表接口
  return axios.post(`${baseBusiness}roster_details/id/query/${id}`)
}