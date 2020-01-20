<template>
  <el-row type="flex" v-bind="$attrs">
    <slot></slot>
  </el-row>
</template>

<script>
// props: ['gutter', 'justify', 'align']
export default {
  name: 'ta-row'
}
</script>
