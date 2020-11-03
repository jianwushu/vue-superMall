import {request,request2} from './request'

export function getHomeData() {
  return request({
    url:'/home/multidata'
  })
}

export function getGoodData(page,sort) {
  return request2({
    url:'/goods.json',
    params:{
      // page,
      // sort
    }
  })
}
