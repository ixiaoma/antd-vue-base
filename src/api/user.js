import { axios } from '@/utils/axios'
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return axios.post(userApi.Login, parameter)
}

export function loginToken (params , headers){
  return axios.get(userApi.LoginToken , {params , headers} )
}

export function getDeptLeader(deptId){
  return axios.get(`${systemAPI}dept/${deptId}/manager`)
}

export function getInfo () {
  return axios.get(userApi.UserInfo)
}

export function logout () {
  return axios.post(userApi.Logout)
}

export function getStaffList () {
  return axios.get(userApi.GetStaffList)
}

export function navMenu (){
  
}

// /**
//  * get user 2step code open?
//  * @param parameter {*}
//  */
export function get2step (parameter) {
  return axios.post(userApi.twoStepCode, parameter)
}

export function getServiceList (parameter) {
  return axios.get(userApi.Service, { params: parameter })
}


export function resetPass(parameter) {
  return axios.post(api.resetPass, parameter)
}