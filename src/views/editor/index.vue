<template>
<el-container class="g-container">
  <!-- 头部 -->
  <el-header height="64px" class="ta-edit-header">
    <!-- <div class="ta-edit-logo" style="width: 190px">Tangram平台</div> -->
    <div class="ta-edit-logo" style="width: 190px">智慧工地大屏</div>
    <el-page-header content="创建页面" @back="$router.go(-1)"></el-page-header>
    <div class="flex-align-center ta-edit-header-right">
      <el-button type="text" icon="el-icon-s-tools">页面配置</el-button>
      <el-button type="text" icon="el-icon-s-shop" class="ml24">项目信息</el-button>
      <el-button type="text" icon="el-icon-question" class="ml24">帮助文档</el-button>
      <LogUser class="ml32" />
    </div>
  </el-header>
  <el-container class="ta-edit-container">
    <!-- 组件栏 -->
    <el-aside width="280px" class="ta-edit-aside-store">
      <AsideLeft />
    </el-aside>
    <!-- 主体编辑区域 -->
    <el-main class="ta-edit-main-container" style="padding: 0;">
      <PageEditor></PageEditor>
    </el-main>
    <!-- 属性栏 -->
    <el-aside width="340px" class="ta-edit-aside-attr">
      <AsideRight />
    </el-aside>
  </el-container>
</el-container>
</template>

<script>
import './styles/index.scss'
import AsideLeft from './aside/left'
import AsideRight from './aside/right'
import { LogUser, PageEditor } from './components'

export default {
  name: 'page-editor',
  components: {
    AsideLeft,
    AsideRight,
    LogUser,
    PageEditor
  }
}
</script>
