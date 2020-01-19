<template>
  <el-tabs v-model="activeLeftTab" @tab-click="onTabChange" class="ta-edit-aside-tabs">
    <!-- 组件库 -->
    <el-tab-pane label="组件库" name="components">
      <ComponentStore />
    </el-tab-pane>
    <!-- 树状图 -->
    <el-tab-pane label="树状图" name="tree">
      <el-tree :data="componentsTree" default-expand-all @node-click="onNodeClick"></el-tree>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { componentsTree } from '../mock'
import ComponentStore from './componentStore'

export default {
  name: 'component-aside',
  components: {
    ComponentStore
  },
  data () {
    return {
      activeLeftTab: 'components',
      componentsTree
    }
  },
  methods: {
    onTabChange (tab, event) {
      console.log(tab, event)
    },
    onNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
