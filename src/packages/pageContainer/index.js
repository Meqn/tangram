import Container from './src'

Container.install = function(Vue) {
  Vue.component(Container.name, Container)
}

export { default as pageContainerConfig } from './config'
export default Container
