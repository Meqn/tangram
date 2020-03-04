import Wrapper from './src'

Wrapper.install = function(Vue) {
  Vue.component(Wrapper.name, Wrapper)
}

export default Wrapper
