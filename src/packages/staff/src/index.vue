<template>
  <Wrap class="ta-staff"></Wrap>
</template>

<script>
import Wrap from '@/packages/wrap'
export default {
  name: 'ta-staff',
  components: {
    Wrap
  }
}
</script>

<style lang="scss" scoped>
.ta-staff{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
