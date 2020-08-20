<script>
import { baseMixin } from '@/packages/utils'
import { styleStrParse } from '@/utils'

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
    fontSize: String,
    color: String
  },
  mixins: [baseMixin],
  computed: {
    extendStyle () {
      const styleObj = {}
      this.fontSize && (styleObj['fontSize'] = this.fontSize)
      this.color && (styleObj['color'] = this.color)
      return styleObj
    }
  },
  render(h) {
    return h(this.tag, {
      class: this.commClass,
      style: Object.assign({}, this.commStyle, this.extendStyle),
      domProps: {
        innerHTML: this.content
      }
    })
  }
}
</script>
