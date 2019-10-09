import request from '@/utils/request'

export function getInitIsAlphaUser(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}
