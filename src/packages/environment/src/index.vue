<template>
  <ta-component-wrapper class="ta-environment" :style="commStyle"><slot></slot></ta-component-wrapper>
</template>

<script>
import { styleMixin } from '@/packages/utils'

export default {
  name: 'ta-environment',
  mixins: [styleMixin]
}
</script>

<style lang="scss" scoped>
.ta-environment{
  width: 610px;
  height: 470px;
  background: url("../screenshot/default.png") no-repeat 50%;
  background-size: 100% 100%;
}
</style>
