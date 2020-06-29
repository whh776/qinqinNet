import {apiLogin} from './index';
import request from '../utils/request';

// 获取登入接口数据
export const getLogin=()=>request({
    url:apiLogin,
    method:'post',
    
})