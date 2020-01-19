<template>
  <div class="ta-edit-main">
    <header class="ta-edit-main-header">
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="edit">编辑(E)</el-radio-button>
        <el-radio-button label="view">视图(V)</el-radio-button>
        <el-radio-button label="code">源码(C)</el-radio-button>
        <el-radio-button label="style">样式(S)</el-radio-button>
      </el-radio-group>
      <div class="handle-group">
        <el-link icon="el-icon-refresh-left">撤销</el-link>
        <el-link icon="el-icon-delete">清空</el-link>
        <el-link icon="el-icon-folder-checked">保存</el-link>
        <el-link icon="el-icon-view">预览</el-link>
        <el-link icon="el-icon-monitor">全屏</el-link>
      </div>
    </header>
    <div class="ta-edit-main-body">
      <!-- <div style="width: 3200px; height: 2000px; background-color: rgba(255, 0 , 0, .5)"></div> -->
      <el-row type="flex" class="row-bg" :gutter="2" justify="space-between" align="middle">
        <el-col :span="8" class="grid-content">1</el-col>
        <el-col class="grid-content">2</el-col>
        <el-col class="grid-content">3</el-col>
      </el-row>
    </div>
    <footer class="ta-edit-main-footer"></footer>
  </div>
</template>

<script>
export default {
  name: 'editor',
  data () {
    return {
      mode: 'edit'
    }
  }
}
</script>

<style lang="scss" scoped>
.row-bg{
  background-color: #ccc;
  padding: 8px 0;
  height: 100px;
}
.grid-content{
  background-color: #eee;
}
</style>
