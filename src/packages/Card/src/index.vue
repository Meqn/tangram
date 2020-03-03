<template>
  <ta-component-wrapper
    :class="[
      'ta-card',
      `ta-card--${size}`,
      { 'ta-card--divider': divider },
      { 'ta-card--shadow': shadow },
      { 'ta-card--border': border },
      { 'ta-card--radius': radius }
    ]"
  >
    <header :class="['ta-card__hd', headClass]" :style="headStyle" v-if="title || $slots.header">
      <slot name="header">
        <h3 class="ta-card__title" :style="{color: titleColor}">{{title}}</h3>
        <slot name="extra">
          <div
            v-if="extra"
            :class="['ta-card__extra', { 'hover': arrow }]"
            :style="{color: extraColor}"
            @click="handleExtra">
            {{extra}}
            <ta-icon v-if="arrow" type="element" name="arrow-right" />
          </div>
        </slot>
      </slot>
    </header>

    <div :class="['ta-card__bd', bodyClass]" :style="bodyStyle">
      <slot></slot>
    </div>
    <div :class="['ta-card__ft', footClass]" :style="footStyle" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </ta-component-wrapper>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ta-card',
  props: {
    shadow: Boolean,    // 是否有阴影
    border: {           // 是否有边框
      type: Boolean,
      default: true
    },
    radius: Boolean,    // 是否有圆角
    divider: {          // 是否有分隔线
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator(val) {
        return ['large', 'medium', 'small'].indexOf(val) !== -1
      },
      default: 'medium'
    },

    headClass: String,
    headStyle: [String, Object],
    bodyClass: String,
    bodyStyle: [String, Object],
    bodyClass: String,
    footStyle: [String, Object],
    footClass: String,

    title: String,
    titleColor: String,
    extra: String,
    extraColor: String,
    arrow: Boolean
  },
  methods: {
    handleExtra (evt) {
      this.$emit('extra', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.ta-card{
  --card-head-padding: 12px 20px 10px;
  --card-padding: 20px;
  --card-fontsize: 16px;
  --title-fontsize: 18px;
  --title-lineheight: 28px;
  
  &--large{
    --card-head-padding: 16px 24px 12px;
    --card-padding: 24px;
    --title-fontsize: 20px;
    --title-lineheight: 32px;
  }
  &--small{
    --card-head-padding: 8px 12px 6px;
    --card-padding: 12px;
    --card-fontsize: 14px;
    --title-fontsize: 16px;
    --title-lineheight: 20px;
  }
  
  width: 420px;
  background-color: var(--module-background-color);
  font-size: var(--card-fontsize);
  
  &--shadow{
    box-shadow: var(--box-shadow);
  }
  &--border{
    border: 1px solid var(--border-color);
  }
  &--radius{
    border-radius: 4px;
  }

  &__hd{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--card-head-padding);

    .ta-card--divider & {
      border-bottom: 1px solid var(--divider-color);
    }
  }
  &__title, .card-title, /deep/ .card-title{
    font-size: var(--title-fontsize);
    line-height: var(--title-lineheight);
    font-weight: 500;
  }
  &__extra, /deep/ .card-extra{
    display: flex;
    align-items: center;
    color: var(--secondary-text-color);
    cursor: pointer;

    &.hover:hover{
      color: var(--link-color);
    }
  }

  &__bd{
    padding-left: var(--card-padding);
    padding-right: var(--card-padding);
  }

  &__ft{
    padding-left: var(--card-padding);
    padding-right: var(--card-padding);

    .ta-card--divider & {
      border-top: 1px solid var(--divider-color);
    }
  }
}
</style>
