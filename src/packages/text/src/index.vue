<script>
export default {
  name: 'ta-text',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    content: String,
    styles: String,
    className: String,
    fontSize: String,
    color: String
  },
  render(h) {
    return h(this.tag, {
      class: this.className,
      style: {
        color: this.color,
        fontSize: this.fontSize
      },
      attrs: {
        style: this.styles
      },
      domProps: {
        innerHTML: this.content
      }
    }, this.$slots.default)
  }
}
</script>
