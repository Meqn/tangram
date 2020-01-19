<template>
  <div :class="['attr-item', `align-${align}`, { 'flex-column': column }]">
    <slot name="label">
      <span class="attr-item-label" :style="{ width }">{{ label }}</span>
    </slot>
    <div class="attr-item-content" :style="conStyle"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'attribute-item',
  props: {
    label: String,
    // label宽度
    width: {
      type: String,
      default: '24%'
    },
    // 间距
    gutter: String,
    // 侧轴对齐方式
    align: {
      type: String,
      default: 'center',
      validator (val) {
        return ['top', 'center', 'bottom'].indexOf(val) >= 0
      }
    },
    // 是否垂直布局
    column: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    conStyle () {
      return this.column ? { 'margin-top': this.gutter || '6px' } : { 'margin-left': this.gutter || '10px' }
    }
  }
}
</script>

<style lang="scss" scoped>
.attr-item{
  display: flex;
  margin-bottom: 12px;

  &.align-top{
    align-items: flex-start;
  }
  &.align-center{
    align-items: center;
  }
  &.align-bottom{
    align-items: flex-end;
  }
  &.flex-column{
    flex-direction: column;
  }
  &-content{
    flex: 1;
  }
}
</style>
