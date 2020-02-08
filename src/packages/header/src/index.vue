<template>
  <div class="ta-header-comm">
    <div class="ta-header-comm-left">
      <slot name="left">左侧内容</slot>
    </div>
    <div class="ta-header-comm-main">
      <slot><h2>{{ title }}</h2></slot>
    </div>
    <div class="ta-header-comm-right">
      <slot name="right">右侧内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ta-header',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.ta-header-comm{
  display: flex;
  align-items: center;
  color: #fff;
  height: 64px;
  background-color: #40a9ff;

  &-main{
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}
</style>
