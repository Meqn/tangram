import Text from './src'

Text.install = function(Vue) {
  Vue.component(Text.name, Text)
}

export { default as textConfig } from './config'
export default Text
