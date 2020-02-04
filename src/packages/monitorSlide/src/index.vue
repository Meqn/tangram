<template>
  <Wrap class="ta-monitor-slide"><slot></slot></Wrap>
</template>

<script>
import Wrap from '@/packages/wrap'
export default {
  name: 'ta-monitor-slide',
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
