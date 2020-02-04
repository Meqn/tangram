<template>
  <Wrap class="ta-environment"><slot></slot></Wrap>
</template>

<script>
import Wrap from '@/packages/wrap'
export default {
  name: 'ta-environment',
  components: {
    Wrap
  }
}
</script>

<style lang="scss" scoped>
.ta-environment{
  min-height: 120px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
