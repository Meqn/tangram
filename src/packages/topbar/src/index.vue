<template>
  <header class="ta-topbar">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'ta-topbar',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.ta-topbar{
  height: 64px;
  color: #fff;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  background-color: #409EFF;
}
</style>
