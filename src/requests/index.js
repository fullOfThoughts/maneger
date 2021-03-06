import axios from 'axios'
import { message } from 'antd'
//  通过环境变量来判断当前模式是生产还是开发
const isDev = process.env.NODE_ENV === 'development'
//  对axios 进行一定的改造
const service = axios.create({
  baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/264051' : '', //  开发、生产 不同模式下baseurl不同
})
//  登录时的路径
const service1 = axios.create({
  baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/264051' : '', //  开发、生产 不同模式下baseurl不同
})
//  对请求数据进行拦截处理
service.interceptors.request.use((config) => {
  //  对请求体进行设置，进行请求合法性验证
  config.data = Object.assign({}, config.data, {
    // authToken: window.localStorage.getItem('authToken')
    authToken: 'q',
  })

  return config
})
//  对响应数据进行拦截处理
service.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data
  } else {
    //  全局处理错误
    message.error('加载失败')
  }
})
//  service1处理错误
service1.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data
  } else {
    //  全局处理错误
    message.error('加载失败')
  }
})
//  导出被处理后的axios 并请求api,并可传递两个参数，如果需要的话后端可以使用（分页）
export const getArticle = () => {
  return service.post('/api/v1/articlelist')
}
//  获取单个文章
export const getArticleById = (id) => {
  return service.post(`/api/v1/article/${id}`)
}
//  修改文章
export const modifyArticleById = (id, data) => {
  return service.post(`/lalla/${id}`, data)
}
//  请求通知
export const getnotification = () => {
  return service.post('/api/v1/notification')
}
//  登录请求
export const login = (username, password) => {
  return service1.post('/api/v1/login', {
    username,
    password,
  })
}
