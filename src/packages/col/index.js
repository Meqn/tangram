import Col from './src'

Col.install = function(Vue) {
  Vue.component(Col.name, Col)
}

export { default as colConfig } from './config'
export default Col
