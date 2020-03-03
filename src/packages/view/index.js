import View from './src'

View.install = function(Vue) {
  Vue.component(View.name, View)
}

export { default as viewConfig } from './config'
export default View
