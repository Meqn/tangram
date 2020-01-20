<template>
  <Wrap class="ta-elevator"></Wrap>
</template>

<script>
import Wrap from '@/packages/wrap'
export default {
  name: 'ta-elevator',
  components: {
    Wrap
  }
}
</script>

<style lang="scss" scoped>
.ta-elevator{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
