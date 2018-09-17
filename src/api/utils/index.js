import axios from 'axios'
import qs from 'qs'

import {
  BASE_URL
} from '../../config/constants'
/* 创建一个新的 AXIOS 对象，确保原有的对象不变 */
let axiosWrap = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic cm9vdDpqdGt3MzR6ag=='
  },
  // TODO 设置POST等请求 body 序列化
  transformRequest: [function (data, header) {
    /* 自定义请求参数解析方式（如果必要的话） */
    return qs.stringify(data)
  }],
  // TODO GET 请求 params 序列化
  paramsSerializer: function (params) {
    let data = params || {}
    data.userId = 'wangxirui'
    data.token = '19970209'
    /* 自定义链接参数解析方式（如果必要的话） */
    return qs.stringify(data)
  }
})
console.log(axiosWrap)
/* 过滤请求 */
// axiosWrap.interceptors.request.use((config) => {
//   return config
// })
// TODO 设置统一请求拦截
/* 过滤响应 */
// axiosWrap.interceptors.response.use((result) => {
//   /* 假设当code为0时代表响应成功 */
//   if (result.data.code != 0) {
//     return Promise.reject(result)
//   }
//   return result.data.data
// }, result => {
//   return Promise.reject(result)
// })
/**
 * @description 统一 GET 请求
 * @param url
 * @param params --> GET 请求参数（***?name=walid&age=25）
 */
function get(url, params) {
  return axiosWrap.get(url, {
    params
  })
}

/**
 * @description 统一 POST 请求
 * @param url
 * @param body --> POST 请求 data
 */
function post(url, body) {
  return axiosWrap.post(url, body)
}

export default {
  get,
  post
}