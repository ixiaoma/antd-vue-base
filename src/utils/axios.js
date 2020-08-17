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

  // const access_token = sessionStorage.getItem('access_token')||'0b1ecda7-67a9-4b20-9c38-91889021d6d5'
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
