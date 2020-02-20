<template>
  <Wrap class="ta-elevator" :style="commStyle"><slot></slot></Wrap>
</template>

<script>
import { styleMixin } from '@/packages/utils'
import Wrap from '@/packages/wrap'

export default {
  name: 'ta-elevator',
  mixins: [styleMixin],
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
