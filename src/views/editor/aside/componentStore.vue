<template>
  <el-collapse v-model="activeComponent" accordion>

    <el-collapse-item v-for="group in packages" :key="group.name" :name="group.name">
      <template slot="title">
        <i :class="`tab-icon el-icon-${group.icon}`"></i>
        <span class="tab-title">{{ group.title }}</span>
        <small class="tab-name">{{ group.name }}</small>
      </template>
      <ul class="components-list">
        <template v-if="group.components && group.components.length > 0">
        <ComponentItem v-for="component in group.components" :key="component.component" :data="component" />
        </template>
      </ul>
    </el-collapse-item>
    <!-- 
    <el-collapse-item name="1">
      <template slot="title">
        <i class="tab-icon el-icon-files"></i>
        <span class="tab-title">通用</span>
        <small>Common</small>
      </template>
      <ul class="components-list">
        <ComponentItem v-for="i in 9" :key="i" />
      </ul>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template slot="title">
        <i class="tab-icon el-icon-news"></i>
        <span class="tab-title">布局</span>
        <small>Layout</small>
      </template>
      <ul class="components-list">
        <ComponentItem v-for="i in 14" :key="i" />
      </ul>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template slot="title">
        <i class="tab-icon el-icon-cpu"></i>
        <span class="tab-title">设备</span>
        <small>Device</small>
      </template>
      <ul class="components-list">
        <ComponentItem v-for="i in 16" :key="i" />
      </ul>
    </el-collapse-item>
    <el-collapse-item name="4">
      <template slot="title">
        <i class="tab-icon el-icon-pie-chart"></i>
        <span class="tab-title">图表</span>
        <small>Chart</small>
      </template>
      <ul class="components-list">
        <ComponentItem v-for="i in 5" :key="i" />
      </ul>
    </el-collapse-item>
    <el-collapse-item name="5">
      <template slot="title">
        <i class="tab-icon el-icon-set-up"></i>
        <span class="tab-title">其他</span>
        <small>Other</small>
      </template>
      <ul class="components-list">
        <ComponentItem v-for="i in 24" :key="i" />
      </ul>
    </el-collapse-item>
     -->
  </el-collapse>
</template>

<script>
import ComponentItem from './componentItem'
import PackageList from '@/packages/package.js'
import { cloneComponent } from '@/utils'
// import Draggable from 'vuedraggable'

export default {
  name: 'component-store',
  components: {
    ComponentItem,
    // Draggable
  },
  data () {
    console.log('packages : ', cloneComponent(PackageList[1].components[1]))
    return {
      packages: PackageList,
      activeComponent: 'layout'
    }
  }
}
</script>
