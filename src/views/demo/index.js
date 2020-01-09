import Demo from './demo'
import Home from '@/views/demo/home.vue'
import CreateComponent from '@/views/demo/component.vue'

export default {
  path: '/demo',
  component: Demo,
  redirect: '/demo/home',
  children: [
    {
      path: 'home',
      name: 'demo-home',
      component: Home
    }, {
      path: 'component',
      name: 'demo-component',
      component: CreateComponent
    }
  ]
}
