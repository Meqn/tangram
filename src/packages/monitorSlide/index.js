import MonitorSlide from './src'

MonitorSlide.install = function(Vue) {
  Vue.component(MonitorSlide.name, MonitorSlide)
}

export { default as monitorSlideConfig } from './config'
export default MonitorSlide
