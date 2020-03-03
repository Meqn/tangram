<script>
import { styleMixin } from '@/packages/utils'
import { styleStrParse } from '@/utils'

export default {
  name: 'ta-view',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    display: String,
    styles: {
      type: String,
      default: ''
    },
    direction: {        // 排列方向
      type: String,
      validator(val) {
        return ['row', 'column'].indexOf(val) !== -1
      }
    },
    wrap: {
      type: String,
      validator(val) {
        return ['nowrap', 'wrap'].indexOf(val) !== -1
      }
    },
    align: {
      type: String,
      validator(val) {
        return ['top', 'middle', 'bottom', 'baseline', 'stretch'].indexOf(val) !== -1
      }
    },
    justify: {
      type: String,
      validator(val) {
        return ['left', 'center', 'right', 'between', 'around'].indexOf(val) !== -1
      }
    }
  },
  mixins: [styleMixin],
  computed: {
    extendStyle () {
      const styleObj = {}
      if (this.display && this.display !== 'flex') {
        styleObj['display'] = this.display
      }
      return Object.assign({}, styleStrParse(this.styles), styleObj)
    },
    extendClass () {
      if (this.display === 'flex') {
        return [
          'ta-view-flex',
          this.direction && `ta-view-flex--direction-${this.direction}`,
          this.wrap && `ta-view-flex--direction-${this.wrap}`,
          this.justify && `ta-view-flex--justify-${this.justify}`,
          this.align && `ta-view-flex--align-${this.align}`
        ]
      }
      return []
    }
  },
  render(h) {
    return h(this.tag, {
      class: [
        'ta-view',
        ...this.extendClass
      ],
      style: Object.assign({}, this.commStyle, this.extendStyle)
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>

.ta-view{
  &-flex{
    > .drag-item{
      display: flex;
    }
    &--direction-row > .drag-item{
      flex-direction: row;
    }
    &--direction-column > .drag-item{
      flex-direction: column;
    }
    &--wrap-nowrap > .drag-item{
      flex-wrap: nowrap;
    }
    &--wrap-wrap > .drag-item{
      flex-wrap: wrap;
    }
    &--justify-left > .drag-item{
      justify-content: flex-start;
    }
    &--justify-center > .drag-item{
      justify-content: center;
    }
    &--justify-right > .drag-item{
      justify-content: flex-end;
    }
    &--justify-between > .drag-item{
      justify-content: space-between;
    }
    &--justify-around > .drag-item{
      justify-content: space-around;
    }
    &--align-top > .drag-item{
      align-items: flex-start;
    }
    &--align-middle > .drag-item{
      align-items: center;
    }
    &--align-bottom > .drag-item{
      align-items: flex-end;
    }
    &--align-baseline > .drag-item{
      align-items: baseline;
    }
    &--align-stretch > .drag-item{
      align-items: stretch;
    }
  }
}
</style>
