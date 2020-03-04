<template>
  <ta-component-wrapper class="ta-tower-crane" :style="commStyle"><slot></slot></ta-component-wrapper>
</template>

<script>
import { styleMixin } from '@/packages/utils'

export default {
  name: 'ta-tower-crane',
  mixins: [styleMixin]
}
</script>

<style lang="scss" scoped>
.ta-tower-crane{
  min-height: 80px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
