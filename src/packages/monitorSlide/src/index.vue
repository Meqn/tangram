<template>
  <ta-component-wrapper class="ta-monitor-slide" :style="commStyle"><slot></slot></ta-component-wrapper>
</template>

<script>
import { styleMixin } from '@/packages/utils'
import Wrap from '@/packages/wrapper'

export default {
  name: 'ta-monitor-slide',
  mixins: [styleMixin]
}
</script>

<style lang="scss" scoped>
.ta-monitor-slide{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
