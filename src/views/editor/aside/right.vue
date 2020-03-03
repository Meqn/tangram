<template>
  <el-tabs v-model="attrTab" @tab-click="onTabChange" class="ta-edit-aside-tabs">
    <!-- 属性设置 -->
    <el-tab-pane label="属性" name="attribute" class="pt12">
      <ComponentProp class="pr8" />
    </el-tab-pane>
    <!-- 样式设置 -->
    <el-tab-pane label="样式" name="style" class="pt12">
      <ComponentStyle class="pr8" />
    </el-tab-pane>
    <!-- 组件结构 -->
    <el-tab-pane label="结构" name="tree">树状结构</el-tab-pane>
  </el-tabs>
</template>

<script>
import ComponentProp from './componentProp'
import ComponentStyle from './componentStyle'
export default {
  name: 'attribute-aside',
  components: {
    ComponentProp,
    ComponentStyle
  },
  data () {
    return {
      attrTab: 'attribute'
    }
  },
  methods: {
    onTabChange (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
