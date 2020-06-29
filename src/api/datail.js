import request from '../utils/request';
import {apiDatail} from './index'

export const getDetail=()=>request({
    url:apiDatail,
    method:'get',
    // headers:{
    //     token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IueOi-Wuj-i-ieeOi-Wuj-i-iSIsInBhc3N3b3JkIjoiODg4ODg4IiwiY3RpbWUiOjE1OTIxMTI3MDA3MzIsImlhdCI6MTU5MjExMjcwMH0.PTG6RcLSiR5oFfzixAkug6zvNuagb3UBF_lfCXwawiM'
    // }
})