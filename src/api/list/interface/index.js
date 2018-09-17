import api from '../../utils/index'
export const project = (body) => {
  return api.get('/static/json/menu/list.json', body)
}