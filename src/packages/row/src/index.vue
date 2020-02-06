<template>
  <div class="ta-row">
    <slot></slot>
  </div>
</template>

<script>
// props: ['gutter', 'justify', 'align']
export default {
  name: 'ta-row'
}
</script>

<style lang="scss" scoped>
.ta-row{
  > div{
    display: flex;
  }
}
</style>
