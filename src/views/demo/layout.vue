<template>
<div class="demo-wrap">
  <nav class="demo-nav">
    <el-link
      v-for="item in menus"
      :key="item.path"
      @click="$router.push(item.path)">
      {{ item.title }}
    </el-link>
    <el-link @click="$router.push('/editor')">编辑器</el-link>
  </nav>
  <router-view />
</div>
</template>

<script>
import routes from './routes'

export default {
  name: 'demo-layout',
  data () {
    return {
      menus: routes.children.map(v => ({ path: `/demo/${v.path}`, title: v.meta.title }))
    }
  }
}
</script>
<style lang="scss" scoped>
.demo-wrap{
  padding: 24px;
}
.demo-nav{
  background-color: #409EFF;
  color: rgba(255, 255, 255, .8);

  .el-link{
    padding: 12px;
    font-size: 16px;
    color: rgba(255, 255, 255, .8);
    &:hover{
      color: #fff;
    }
  }
}
</style>
