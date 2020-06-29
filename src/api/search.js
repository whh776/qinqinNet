import {apiSearch} from './index';
import request from '../utils/request';

export const getSearch = () => request({
    url: apiSearch,
    // data: {
    //   cid
    // }
    fetchType: 'json',
  })