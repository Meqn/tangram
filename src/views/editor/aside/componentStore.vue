<template>
  <el-collapse v-model="activeComponent" accordion>
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
  </el-collapse>
</template>

<script>
import ComponentItem from './componentItem'
export default {
  name: 'component-store',
  components: {
    ComponentItem
  },
  data () {
    return {
      activeComponent: '1'
    }
  }
}
</script>
