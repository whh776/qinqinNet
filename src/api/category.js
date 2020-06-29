import {apiCategory} from './index'
import request from '../utils/request'

// 获取apiCategory接口数据
export const getCategory=()=>request({
    url:apiCategory,
    method:'get'
})