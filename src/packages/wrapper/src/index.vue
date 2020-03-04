<script>
export default {
  name: 'ta-component-wrapper',
  render (h) {
    return h('div', {
      class: 'ta-component-wrapper'
    }, this.$slots.default)
  }
}
</script>
