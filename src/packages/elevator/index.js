import Elevator from './src'

Elevator.install = function(Vue) {
  Vue.component(Elevator.name, Elevator)
}

export { default as elevatorConfig } from './config'
export default Elevator
