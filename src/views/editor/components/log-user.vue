<template>
  <el-dropdown>
    <div class="flex-align-center">
      <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      <!-- <span class="ml8">Sisy Chen</span> -->
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
      <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
      <el-dropdown-item icon="el-icon-switch-button" divided>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'logged-user'
}
</script>
