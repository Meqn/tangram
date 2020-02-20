<template>
  <Wrap class="ta-environment" :style="commStyle"><slot></slot></Wrap>
</template>

<script>
import { styleMixin } from '@/packages/utils'
import Wrap from '@/packages/wrap'

export default {
  name: 'ta-environment',
  mixins: [styleMixin],
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
