// 通用组件
import Header from './header'

// 布局组件
import Row from './row'
import Col from './col'

// 设备组件
import Environment from './environment'
import Staff from './staff'
import TowerCrane from './towerCrane'
import Elevator from './elevator'
import MonitorSlide from './monitorSlide'

const components = [
  Header,
  Row,
  Col,
  Environment,
  Staff,
  TowerCrane,
  Elevator,
  MonitorSlide
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
