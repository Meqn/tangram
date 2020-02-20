import Header from './src'

Header.install = function(Vue) {
  Vue.component(Header.name, Header)
}

export { default as headerConfig } from './config'
export default Header
