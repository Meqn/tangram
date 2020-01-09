<template>
  <div class="pe-main">
    <header class="pe-main-hd">
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="视图"></el-radio-button>
        <el-radio-button label="源码"></el-radio-button>
        <el-radio-button label="样式"></el-radio-button>
      </el-radio-group>
      <div class="handle-group">
        <el-link icon="el-icon-refresh-left">撤销</el-link>
        <el-link icon="el-icon-delete">清空</el-link>
        <el-link icon="el-icon-folder-checked">保存</el-link>
        <el-link icon="el-icon-view">预览</el-link>
        <el-link icon="el-icon-monitor">全屏</el-link>
      </div>
    </header>
    <div class="pe-main-bd">
      <!-- <div style="width: 3200px; height: 2000px; background-color: rgba(255, 0 , 0, .5)"></div> -->
    </div>
    <footer class="pe-main-ft"></footer>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data () {
    return {
      mode: '视图'
    }
  }
}
</script>
