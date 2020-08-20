<template>
  <ta-component-wrapper
    :class="[
      'ta-card',
      `ta-card--${size}`,
      { 'ta-card--divider': divider },
      { 'ta-card--shadow': shadow },
      { 'ta-card--border': border },
      { 'ta-card--radius': radius },
      commClass
    ]"
    :style="commStyle"
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

    <div :class="['ta-card__bd', bodyClass]" :style="bodyStyle" v-loading="loading">
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer"
      :class="['ta-card__ft', footClass]"
      :style="footStyle"
      v-loading="loading">
      <slot name="footer"></slot>
    </div>
  </ta-component-wrapper>
</template>

<script>
/* eslint-disable */
import { baseMixin } from '@/packages/utils'

export default {
  name: 'ta-card',
  mixins: [baseMixin],
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
    arrow: Boolean,

    loading: {
      type: Boolean,
      default: false
    }
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
  --card-fontsize: var(--font-size-base, 18px);
  --card-title-fontsize: var(--font-size-medium, 20px);
  --card-title-lineheight: 28px;
  
  &--large{
    --card-head-padding: 16px 24px 12px;
    --card-padding: 24px;
    --card-title-lineheight: 32px;
  }
  &--small{
    --card-head-padding: 8px 12px 6px;
    --card-padding: 12px;
    --card-fontsize: var(--font-size-small, 16px);
    --card-title-fontsize: var(--font-size-small, 16px);
    --card-title-lineheight: 20px;
  }
  
  display: flex;
  flex-direction: column;
  background-color: var(--card-background-color);
  font-size: var(--card-fontsize);
  color: var(--primary-text-color);
  
  &--shadow{
    box-shadow: var(--card-shadow);
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

    .ta-card--divider > & {
      border-bottom: 1px solid var(--divider-color);
    }

    /deep/ .el-radio-button__inner{
      color: var(--card-button-color);
      border-color: var(--card-button-border-color);
      background-color: var(--card-button-background-color);
    }
    /deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      color: var(--card-button-active-color);
      border-color: var(--card-button-active-border-color);
      background-color: var(--card-button-active-background-color);
      box-shadow: -1px 0 0 0 var(--card-button-active-border-color);
    }
  }
  &__title, .card-title, /deep/ .card-title{
    font-size: var(--card-title-fontsize);
    line-height: var(--card-title-lineheight);
    font-weight: 500;
    color: var(--title-color);
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
    flex: 1;
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
