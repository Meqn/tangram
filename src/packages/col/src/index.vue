<template>
  <el-col v-bind="$attrs" v-on="$listeners" :style="commStyle">
    <slot></slot>
  </el-col>
</template>

<script>
import { baseMixin } from '@/packages/utils'
export default {
  name: 'ta-col',
  mixins: [baseMixin],
}
</script>
