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
    subTitle: 'Common',
    icon: 'files',
    components: []
  },
  {
    title: '布局',
    subTitle: 'Layout',
    icon: 'files',
    components: [
      Row,
      Col
    ]
  },
  {
    title: '设备',
    subTitle: 'Device',
    icon: 'files',
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
    subTitle: 'Chart',
    icon: 'files',
    components: []
  },
  {
    title: '其他',
    subTitle: 'More',
    icon: 'files',
    components: []
  }
]
