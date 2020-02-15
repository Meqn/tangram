import Demo from './layout'
import Home from '@/views/demo/home'
import CreateComponent from '@/views/demo/component'
import Recurse from '@/views/demo/recurse'
import Draggable from '@/views/demo/draggable'
import NestDrag from './nestDrag'
import contextMenu from './contextMenu'

export default {
  path: '/demo',
  component: Demo,
  redirect: '/demo/home',
  children: [
    {
      path: 'home',
      name: 'demo-home',
      component: Home,
      meta: {
        title: '首页'
      }
    }, {
      path: 'component',
      name: 'demo-component',
      component: CreateComponent,
      meta: {
        title: '创建组件'
      }
    }, {
      path: 'recurse',
      name: 'demo-recurse',
      component: Recurse,
      meta: {
        title: '嵌套组件'
      }
    }, {
      path: 'drag',
      name: 'demo-draggable',
      component: Draggable,
      meta: {
        title: '拖拽组件'
      }
    }, {
      path: 'nestDrag',
      name: 'demo-nest-draggable',
      component: NestDrag,
      meta: {
        title: '嵌套拖拽组件'
      }
    }, {
      path: 'contextMenu',
      name: 'demo-context-menu',
      component: contextMenu,
      meta: {
        title: '右键菜单'
      }
    }
  ]
}
