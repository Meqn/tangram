<template>
<div>
  <AttributeItem v-if="currentComponent && currentComponent.info" :label="currentComponent.info.name">
    <el-input v-model="currentComponent.info.id" size="small" disabled></el-input>
  </AttributeItem>

  <div v-if="propsKey.length > 0">
    <template v-for="prop in propsKey">
      <PropItem
        v-if="settings[prop].configurable !== false"
        :key="prop"
        :prop="prop"
        :data="settings[prop]"
        :value="propsValue[prop]"
        :list="settings">
      </PropItem>
    </template>
  </div>
  
  <el-divider v-else content-position="left">无配置项</el-divider>
</div>
</template>

<script>
import PropItem from './propItem'
import { AttributeItem } from '../components'

export default {
  name: 'component-attr',
  components: {
    AttributeItem,
    PropItem
  },
  computed: {
    currentComponent () {
      return this.$store.state.page.currentComponent
    },
    settings () {
      return (this.currentComponent && this.currentComponent.setting) || {}
    },
    propsKey () {
      return Object.keys(this.settings)
    },
    propsValue () {
      return (this.currentComponent && this.currentComponent.props) || {}
    }
  }
}
</script>

<style lang="scss" scoped>
.attr-grid{
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &-drag{
    color: #999;
    font-size: 22px;
    cursor: move;
  }
  &-remove{
    color: #fa9a9a;
    font-size: 22px;
    cursor: pointer;
    &:hover{
      color: #F56C6C;
      opacity: 1;
    }
  }
  &-add{
    margin-left: 30px;
  }
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>
