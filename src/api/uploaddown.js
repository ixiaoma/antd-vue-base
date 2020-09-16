import { axios } from '@/utils/axios'

const baseBusiness = 'business/'

//提交排班计划
export const rosterImport=process.env.VUE_APP_API_BASE_URL+baseBusiness+'roster/import'
//考勤上传
export const attendanceImport=process.env.VUE_APP_API_BASE_URL+baseBusiness+'recording/import'
// 提交排班模板下载
export const rosterDown=process.env.VUE_APP_API_BASE_URL+baseBusiness+'roster/downloadTpl'
// 考勤模板下载
export const attendanceDown=process.env.VUE_APP_API_BASE_URL+baseBusiness+'recording/downloadTpl'

export function uploadLoad(url,file,obj) {
    let formData = new FormData();   
    formData.append('file', file)
    if(obj){
        for(var key in obj){  
            formData.append(key,obj[key])  
        } 
    }
    return axios.post(url, formData, { contentType: false, processData: false })
    // const access_token = sessionStorage.getItem('ACCESS_TOKEN')||'2812f6c6-7d2c-44b6-a89f-255dade37e04'
    // return axios.post(url, formData, { contentType: false, processData: false, headers: { 'Content-Type': 'application/x-www-form-urlencoded',Authorization: `Bearer ${access_token}` } })
  }