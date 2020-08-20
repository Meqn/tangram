<template>
  <div class="ta-row" :style="commStyle">
    <slot></slot>
  </div>
</template>

<script>
import { baseMixin } from '@/packages/utils'
// props: ['gutter', 'justify', 'align']
export default {
  name: 'ta-row',
  mixins: [baseMixin],
}
</script>

<style lang="scss" scoped>
.ta-row{
  > div{
    display: flex;
  }
}
</style>
