<script>
import { styleMixin } from '@/packages/utils'

export default {
  name: 'ta-page-container',
  mixins: [styleMixin],
  props: {
    mode: {
      type: String,
      validator (val) {
        return ['light', 'dark'].indexOf(val) !== -1
      },
      default: 'light'
    }
  },
  render (h) {
    return h('div', {
      class: ['ta-page-container', ...this.commClass, this.mode],
      style: this.commStyle,
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.ta-page-container{
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
}
</style>
