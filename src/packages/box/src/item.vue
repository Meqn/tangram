<template>
  <div :class="[
    'app-flex-item',
    align ? `app-flex-align-content-${align}` : ''
  ]"
  @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-flex-item',
  props: {
    align: String
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
