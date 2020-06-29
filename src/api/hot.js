import {apiHot,
    apiLatest,
    apiPrice,
    apiSell} from './index';
import request from '../utils/request';

export const getHot = cid => request({
    url: apiHot,
    data: {
      cid
    }
  })
  export const getLatest = cid => request({
    url: apiLatest,
    data: {
      cid
    }
  })
  export const getSell = cid => request({
    url: apiSell,
    data: {
      cid
    }
  })
  export const getPrice = cid => request({
    url: apiPrice,
    data: {
      cid
    }
  })

