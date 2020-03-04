<template>
  <ta-component-wrapper class="ta-elevator" :style="commStyle"><slot></slot></ta-component-wrapper>
</template>

<script>
import { styleMixin } from '@/packages/utils'

export default {
  name: 'ta-elevator',
  mixins: [styleMixin]
}
</script>

<style lang="scss" scoped>
.ta-elevator{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
