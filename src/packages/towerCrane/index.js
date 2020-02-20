import TowerCrane from './src'

TowerCrane.install = function(Vue) {
  Vue.component(TowerCrane.name, TowerCrane)
}

export { default as towerCraneConfig } from './config'
export default TowerCrane
