import api from '../../api'

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$api', { value: api })
    Object.defineProperty(Vue, '$api', { value: api })
  }
}