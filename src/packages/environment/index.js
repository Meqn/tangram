import Environment from './src'

Environment.install = function(Vue) {
  Vue.component(Environment.name, Environment)
}

export { default as environmentConfig } from './config'
export default Environment
