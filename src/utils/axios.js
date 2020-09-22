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

  // const access_token = sessionStorage.getItem('ACCESS_TOKEN')||'2812f6c6-7d2c-44b6-a89f-255dade37e04'
  const access_token = sessionStorage.getItem('ACCESS_TOKEN')
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截
service.interceptors.response.use(res => {
  const { data, status } = res
  if (status === 200) {
    return data || true
  } else {
    const { message } = data
    message && Message.error(message)
    return Promise.reject(data)
  }
}, error => {
  if (error.response) {
    const { status,data } = error.response
    const { message } = data
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
    const errorMessage = message ? message : '接口请求失败'
    Message.error(errorMessage)
  } else {
    Message.error('接口请求失败')
  }
  return Promise.reject(error.response)
})
export { service as axios }
