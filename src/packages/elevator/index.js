import Elevator from './src'

Elevator.install = function(Vue) {
  Vue.component(Elevator.name, Elevator)
}

export default Elevator
