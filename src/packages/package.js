// 通用

// 布局
import Row from './row/config'
import Col from './col/config'

// 设备
import Environment from './environment/config'
import Staff from './staff/config'
import TowerCrane from './towerCrane/config'
import Elevator from './elevator/config'
import MonitorSlide from './monitorSlide/config'

// 图表

// 其他

export default [
  {
    title: '通用',
    name: 'common',
    icon: 'files',
    components: []
  },
  {
    title: '布局',
    name: 'layout',
    icon: 'news',
    components: [
      Row,
      Col
    ]
  },
  {
    title: '设备',
    name: 'device',
    icon: 'cpu',
    components: [
      Environment,
      Staff,
      TowerCrane,
      Elevator,
      MonitorSlide
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
