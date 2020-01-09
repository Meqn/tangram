<template>
<el-container class="g-container">
  <!-- 头部 -->
  <el-header height="64px" class="pe-header">
    <div class="pe-logo" style="width: 190px">Tangram平台</div>
    <el-page-header content="创建页面"></el-page-header>
    <div class="flex-align-center pe-header-right">
      <el-button type="text" icon="el-icon-s-tools">页面配置</el-button>
      <el-button type="text" icon="el-icon-s-shop" class="ml24">项目信息</el-button>
      <el-button type="text" icon="el-icon-question" class="ml24">帮助文档</el-button>
      <LogUser class="ml32" />
    </div>
  </el-header>
  <el-container class="pe-container">
    <!-- 组件栏 -->
    <el-aside width="280px" class="pe-aside-store">
      <ComponentAside />
    </el-aside>
    <!-- 主体编辑区域 -->
    <el-main class="pe-main-wrap" style="padding: 0 12px;">
      <PageEditor></PageEditor>
    </el-main>
    <!-- 属性栏 -->
    <el-aside width="340px" class="pe-aside-attr">
      <AttributeAside />
    </el-aside>
  </el-container>
</el-container>
</template>

<script>
import './styles/index.scss'
import { LogUser, ComponentAside, AttributeAside, PageEditor } from './components'

export default {
  name: 'page-editor',
  components: {
    LogUser,
    ComponentAside,
    AttributeAside,
    PageEditor
  },
  data () {
    return {
      activeLeftTab: 'components',
      activeComponent: '1'
    }
  },
  methods: {
    onLeftTabChange (tab, event) {
      console.log(tab, event)
    },
    onNodeClick (data) {
      console.log(data)
    }
  }
}
</script>
