<template>
  <div class="ta-row" :style="commStyle">
    <slot></slot>
  </div>
</template>

<script>
import { styleMixin } from '@/packages/utils'
// props: ['gutter', 'justify', 'align']
export default {
  name: 'ta-row',
  mixins: [styleMixin],
}
</script>

<style lang="scss" scoped>
.ta-row{
  > div{
    display: flex;
  }
}
</style>
