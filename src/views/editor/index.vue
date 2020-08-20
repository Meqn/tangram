<template>
<el-container class="g-container" v-loading="loading">
  <!-- 头部 -->
  <el-header height="64px" class="ta-edit-header">
    <div class="ta-edit-logo" style="width: 190px">Tangram平台</div>
    <el-page-header content="创建页面" @back="$router.go(-1)"></el-page-header>
    <div class="flex flex--middle ta-edit-header-right">
      <el-button type="text" icon="el-icon-s-tools" @click="projectDialogVisible = true">项目配置</el-button>
      <el-button type="text" icon="el-icon-position" class="ml24">发布页面</el-button>
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
      <Editor @save="onSave"></Editor>
    </el-main>
    <!-- 属性栏 -->
    <el-aside width="340px" class="ta-edit-aside-attr">
      <AsideRight />
    </el-aside>
  </el-container>

  <el-drawer
    :visible.sync="projectDialogVisible"
    direction="rtl"
    custom-class="project-dialog">
    <template #title>
      <h1>项目配置</h1>
    </template>

    <el-form :model="projectForm" status-icon ref="projectForm" label-width="100px" class="project-form">
      <el-form-item label="企业名称" prop="companyName">
        <el-input v-model="projectForm.companyName" disabled></el-input>
      </el-form-item>
      <el-form-item label="项目名称" prop="projectName">
        <el-input v-model="projectForm.projectName" disabled></el-input>
      </el-form-item>
      <el-form-item label="企业logo" prop="logo">
        <UploadInput placeholder="https://" accept=".png" fileType="image" v-model="projectForm.logo" />
      </el-form-item>
      <el-form-item label="大屏标题" prop="title" required>
        <el-input v-model.number="projectForm.title"></el-input>
      </el-form-item>
      <el-form-item label="大屏尺寸">
        <el-input v-model.number="projectForm.width" type="number" style="width: 40%"></el-input>
        <span style="margin:0 16px">x</span>
        <el-input v-model.number="projectForm.height" type="number" style="width: 40%"></el-input>
      </el-form-item>
      <el-form-item label="默认主题" prop="theme" v-if="0">
        <el-radio-group>
          <el-radio label="light">浅色模式</el-radio>
          <el-radio label="dark">深色模式</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button @click="projectDialogVisible = false">关闭</el-button>
      </el-form-item>
    </el-form>

  </el-drawer>
</el-container>
</template>

<script>
import './styles/index.scss'
import AsideLeft from './aside/left'
import AsideRight from './aside/right'
import Editor from './editor'
import { LogUser } from './components'
import { UploadInput } from '@/components'

export default {
  name: 'page-editor',
  components: {
    AsideLeft,
    AsideRight,
    LogUser,
    Editor,
    UploadInput
  },
  data() {
    return {
      loading: false,
      submitLoading: false,
      projectDialogVisible: false,
      projectForm: {
        companyName: '',
        projectName: '',
        logo: '',
        title: '',
        width: 1920,
        height: 1080
      }
    }
  },
  methods: {
    onSave() {
      console.log('save ...')
    }
  }
}
</script>
