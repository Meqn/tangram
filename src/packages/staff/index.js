import Staff from './src'

Staff.install = function(Vue) {
  Vue.component(Staff.name, Staff)
}

export { default as staffConfig } from './config'
export default Staff
