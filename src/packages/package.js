// 通用
import Header from './header/config'
import Text from './text/config'

// 布局
// 一行两列、一行三列、 一行四列、一行五列、一行六列、 两行一列、三行一列、四行一列、五行一列
// grid: 四宫格、九宫格、六宫格
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
    components: [
      Header,
      Text
    ]
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
