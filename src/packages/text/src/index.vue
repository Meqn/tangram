<script>
import { styleMixin } from '@/packages/utils'

export default {
  name: 'ta-text',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    content: {
      type: String,
      default: ''
    },
    styles: String,
    className: String,
    fontSize: String,
    color: String
  },
  mixins: [styleMixin],
  render(h) {
    return h(this.tag, {
      class: this.className,
      style: {
        ...this.commStyle,
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
