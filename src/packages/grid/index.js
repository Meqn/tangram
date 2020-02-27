import Grid from './src'

Grid.install = function(Vue) {
  Vue.component(Grid.name, Grid)
}

export { default as gridConfig } from './config'
export default Grid
