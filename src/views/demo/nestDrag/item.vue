<template>
  <div class="component-item">{{ data.info.name }}</div>
</template>

<script>
export default {
  name: 'component-item',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.component-item{
  height: 80px;
  margin: 8px;
  padding-left: 24px;
  color: #fff;
  font-size: 16px;
  line-height: 80px;
  background-color: #999;
}
</style>
