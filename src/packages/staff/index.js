import Staff from './src'

Staff.install = function(Vue) {
  Vue.component(Staff.name, Staff)
}

export default Staff
