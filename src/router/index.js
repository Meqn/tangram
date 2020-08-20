import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Editor from '../views/editor/index.vue'
import Preview from '../views/editor/preview.vue'

// Throw Error "NavigationDuplicated" #2872
// https://stackoverflow.com/questions/57837758/navigationduplicated-navigating-to-current-location-search-is-not-allowed
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  },
  {
    path: '/preview',
    name: 'preview',
    component: Preview
  }
]

const router = new VueRouter({
  routes
})

export default router
