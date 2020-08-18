import axios from 'axios'
// import config from '@/config'
import { Message } from 'ant-design-vue'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 60000 // 请求超时时间
})

// 请求拦截
service.interceptors.request.use(config => {
  config.headers = {
    ...config.headers
  }

  // const access_token = sessionStorage.getItem('access_token')||'7a2cb964-8eee-4b0b-8de2-418e3ee6b3b0'
  // if (access_token) {
  //   config.headers.Authorization = `Bearer ${access_token}`
  // }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
service.interceptors.response.use(res => {
  // const { data, code, message } = res.data
  // if (code === 200) {
  //   return data
  // } else {
  //   message && Message.error(message)
  //   return Promise.reject(data)
  // }
  return res.data
}, error => {
  if (error.response) {
    const { status } = error.response
    if (status === 401) {
      sessionStorage.removeItem('access_token')
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    }
    Message.error('接口请求失败')
  } else {
    Message.error('接口请求失败')
  }
  return Promise.reject(error.response)
})
export { service as axios }
