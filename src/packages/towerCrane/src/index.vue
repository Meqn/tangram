<template>
  <Wrap class="ta-tower-crane"></Wrap>
</template>

<script>
import Wrap from '@/packages/wrap'
export default {
  name: 'ta-tower-crane',
  components: {
    Wrap
  }
}
</script>

<style lang="scss" scoped>
.ta-tower-crane{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
