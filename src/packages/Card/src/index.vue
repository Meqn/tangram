<template>
  <div
    :class="[
      'ta-card',
      `ta-card--${size}`,
      { 'ta-card--divider': divider },
      { 'ta-card--shadow': shadow },
      { 'ta-card--border': border },
      { 'ta-card--radius': border }
    ]"
    @click="handleClick"
  >
    <header :class="`ta-card__hd ${headClass}`" :style="headStyle" v-if="title || $slots.header">
      <slot name="header">
        <div class="ta-card__hd-left">
          <app-icon :name="icon" class="ta-card__hd-icon" :style="{color: iconColor}" v-if="icon"></app-icon>
          <h3 class="ta-card__title" :style="{color: titleColor}">{{title}}</h3>
        </div>
        <slot name="extra">
          <div
            v-if="extra"
            class="ta-card__extra"
            :style="{color: extraColor}"
            @click="handleExtra">
            {{extra}}
            <app-icon v-if="arrow" name="enter" size="sm"></app-icon>
          </div>
        </slot>
      </slot>
    </header>

    <div :class="['ta-card__bd', { bodyClass }]" :style="bodyStyle">
      <slot></slot>
    </div>
    <div :class="['ta-card__ft', { footClass }]" :style="footStyle" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Card',
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
        return ['large', 'medium', 'large'].indexOf(val) !== -1
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
    icon: String,
    iconColor: String,
    extra: String,
    extraColor: String,
    arrow: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    },
    handleExtra (evt) {
      this.$emit('extra', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.ta-card{
  background-color: var(--module-background-color);
  font-size: 28px;
  
  &--shadow{
    box-shadow: 0 4px 16px rgba(0, 0, 0, .09);
  }
  &--border{
    border: 1px solid -var(--border-color);
  }
  &--radius{
    border-radius: 10px;
  }

  &__hd{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36px 32px 24px;

    &-left{
      display: flex;
      align-items: center;
    }
    &-icon{
      margin-right: 12px;
    }

    .ta-card--divider & {
      border-bottom: 1px solid var(--border-color);
    }
  }
  &__title, .title, /deep/ .card-title{
    font-size: 32px;
    font-weight: bold;
  }
  &__extra, .extra{
    display: flex;
    align-items: center;
    color: #858b9c;
  }

  &__bd{
    padding-left: 32px;
    padding-right: 32px;
  }

  &__ft{
    padding-left: 32px;
    padding-right: 32px;

    .ta-card--divider & {
      border-top: 1px solid -var(--border-color);
    }
  }
}
</style>