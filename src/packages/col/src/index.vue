<template>
  <el-col v-bind="$attrs" v-on="$listeners" :style="commStyle">
    <slot></slot>
  </el-col>
</template>

<script>
import { styleMixin } from '@/packages/utils'
export default {
  name: 'ta-col',
  mixins: [styleMixin],
}
</script>
