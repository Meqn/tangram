import Row from './src'

Row.install = function(Vue) {
  Vue.component(Row.name, Row)
}

export { default as rowConfig } from './config'
export default Row
