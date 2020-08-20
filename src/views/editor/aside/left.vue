<template>
  <el-tabs v-model="activeLeftTab" @tab-click="onTabChange" class="ta-edit-aside-tabs">
    <!-- 组件库 -->
    <el-tab-pane label="组件库" name="components">
      <ComponentStore />
    </el-tab-pane>
    <!-- 树状图 -->
    <el-tab-pane label="树状图" name="tree">
      <PageTree :list="components" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { componentsTree } from '../mock'
import ComponentStore from './componentStore'
import PageTree from '../components/pageTree'

export default {
  name: 'component-aside',
  components: {
    ComponentStore,
    PageTree
  },
  data () {
    return {
      activeLeftTab: 'components',
      componentsTree
    }
  },
  computed: {
    components() {
      return this.$store.state.page.components
    }
  },
  methods: {
    onTabChange (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
