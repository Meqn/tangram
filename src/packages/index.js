// 内部包
import Icon from './icon'
import Card from './card'
import Wrapper from './wrapper'

// 通用
import Header, { headerConfig } from './header'
import Text, { textConfig } from './text'
import View, { viewConfig } from './view'

// 布局
// 一行两列、一行三列、 一行四列、一行五列、一行六列、 两行一列、三行一列、四行一列、五行一列
// grid: 四宫格、九宫格、六宫格
import PageContainer, { pageContainerConfig } from './pageContainer'
import Grid, { gridConfig } from './grid'
import temp323Config from './layout/temp323'

// 设备
import Environment, { environmentConfig } from './environment'
import Staff, { staffConfig } from './staff'
import TowerCrane, { towerCraneConfig } from './towerCrane'
import Elevator, { elevatorConfig } from './elevator'
import MonitorSlide, { monitorSlideConfig } from './monitorSlide'

// 图表

// 其他

/************************************************************************************
 * 组件部分
 */
const components = [
  Icon,
  Card,
  Wrapper,

  Header,
  Text,
  View,

  PageContainer,
  Grid,

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

/************************************************************************************
 * 组件包配置部分
 */
export const packages = [
  {
    title: '通用',
    name: 'common',
    icon: 'files',
    components: [
      headerConfig,
      textConfig
    ]
  },
  {
    title: '布局',
    name: 'layout',
    icon: 'news',
    components: [
      pageContainerConfig,
      viewConfig,
      gridConfig,
      temp323Config
    ]
  },
  {
    title: '设备',
    name: 'device',
    icon: 'cpu',
    components: [
      environmentConfig,
      staffConfig,
      towerCraneConfig,
      elevatorConfig,
      monitorSlideConfig
    ]
  },
  {
    title: '图表',
    name: 'chart',
    icon: 'pie-chart',
    components: []
  },
  {
    title: '其他',
    name: 'more',
    icon: 'set-up',
    components: []
  }
]

export default {
  install,
  ...components
}
