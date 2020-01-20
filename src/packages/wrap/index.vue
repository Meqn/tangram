<template>
  <div :class="`ta-component-wrap ${styleClass}`"></div>
</template>

<script>
export default {
  name: 'ta-component-wrap',
  props: {
    styleClass: String
  }
}
</script>

<style lang="scss" scoped>
.ta-component-wrap{
  width: 100%;
  height: 100%;
}
</style>
