import Flex from './src/flex'
import FlexItem from './src/item'

Flex.install = function (Vue) {
  Vue.component(Flex.name, Flex)
}

FlexItem.install = function (Vue) {
  Vue.component(FlexItem.name, FlexItem)
}

export const AppFlex = Flex
export const AppFlexItem = FlexItem
