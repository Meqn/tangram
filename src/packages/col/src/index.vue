<template>
  <el-col v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-col>
</template>

<script>
export default {
  name: 'ta-col'
}
</script>
