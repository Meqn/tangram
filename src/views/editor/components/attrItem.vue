<template>
  <div :class="['attr-item', { inline }]">
    <slot name="label">
      <span class="attr-item-label" :style="labelStyle">{{ label }}</span>
    </slot>
    <div class="attr-item-content" :style="conStyle"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'attribute-item',
  props: {
    label: String,
    width: String,
    // 间距
    gutter: String,
    // 侧轴对齐方式
    inline: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    labelStyle () {
      return (this.inline && (this.label || this.$slots.label)) ? { width: this.width || '64px' } : {}
    },
    conStyle () {
      return (this.inline && (this.label || this.$slots.label)) ? { 'margin-left': this.gutter || '12px' } : { 'margin-top': this.gutter || '6px' }
    }
  }
}
</script>

<style lang="scss" scoped>
.attr-item{
  margin-bottom: 16px;

  &.inline{
    display: flex;
    align-items: center;
  }
  &-label{
    white-space: nowrap;
  }
}
</style>
