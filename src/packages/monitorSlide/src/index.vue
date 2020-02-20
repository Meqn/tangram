<template>
  <Wrap class="ta-monitor-slide" :style="commStyle"><slot></slot></Wrap>
</template>

<script>
import { styleMixin } from '@/packages/utils'
import Wrap from '@/packages/wrap'

export default {
  name: 'ta-monitor-slide',
  mixins: [styleMixin],
  components: {
    Wrap
  }
}
</script>

<style lang="scss" scoped>
.ta-monitor-slide{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
