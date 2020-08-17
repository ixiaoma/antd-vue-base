import { axios } from '@/utils/axios'

const formApi = {
  staffFiles: '/staff/files'
}

export function getStaffInfo () {
    return axios.get(formApi.staffFiles)
}