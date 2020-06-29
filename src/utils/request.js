/* eslint-disable no-case-declarations */
//! 数据请求封装
//! axios + fetch + jsonp
//! 跨域： CORS  /  JSONP
import axios from 'axios'
import jsonp from 'jsonp'
import env from '../api/env'
//import { getCookie } from 'lakes_frames/utils/cookie';
// import {Loading} from 'element-ui'
// let loading

//* axios选择自定义配置
//* ins就是自定义的数据请求实例
const ins = axios.create({
  baseURL: env.dev,
  timeout: 4000
})

//* 书写axios的拦截器
ins.interceptors.request.use(function (config) {
  //config就是数据请求的配置
  //const token = getCookie('token')
  //! token不是盲目加的，看接口文档，token是当参数传递，还是在请求头里面
  //config.headers.token = token 


  //! 页面加载效果
  // loading = Loading.service({
  //   lock: true,
  //   text: 'Loading',
  //   spinner: 'el-icon-loading',
  //   background: 'rgba(0, 0, 0, 0.7)'
  // })

  return config
}, function (error) {
  Promise.resolve(error)
})

ins.interceptors.response.use(function (res) {
  // 判断是不是登录请求得到的结果
  // loading.close()
  return res
}, function (error) {
  Promise.reject(error)
})


// 封装数据请求
export default function (options) {
  const { url, method = 'get', headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }, data = {}, fetchType } = options
  // const newData = {...data}
  if (fetchType === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: `${JSON.stringify(data)}&callback`,
        timeout: 4000,
        name: `__jp-${Date.now()}`
      }, (err, data) => {
        if (err) reject(err)
        resolve(data)
      })
    })
  } else {
    // method  get  post 
    switch (method.toUpperCase()) {
      case 'GET':
        return ins.get(url, {
          params: data
        })
        break;
      case 'POST':
        switch (headers['Content-Type']) {
          case 'application/json':
            //json提交
            return ins.post(url, data, { headers })
            break;
          case 'multipart/form-data':
            // 文件提交
            break;
          default:
            // 表单提交
            // console.log('表单提交')
            const p = new URLSearchParams()
            for (let key in data) {
              p.append(key, data[key])
            }
            return ins.post(url, p, { headers })
            break;
        }
        break;
      case 'PUT':
        // PUT表示对数据修改
        return ins.put(url, data)
        break;
      case 'DELETE':
        // DELETE表示对数据的删除
        return ins.delete(url, { data })
        break;
      case 'PATCH':
        // PATCH 表示对数据推送
        return ins.patch(url, data)
        break;
      default:
        return ins(options)
        break;
    }
  }
}