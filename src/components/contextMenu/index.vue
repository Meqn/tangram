<script>
import { createBodyClickListener } from './utils'
// const EVENT_LIST = ['click', 'contextmenu', 'keydown']

export default {
  name: 'context-menu',
  props: {
    id: {
      type: String,
      default: 'context-menu'
    },
    align: {
      type: String,
      default: 'left'
    },
    tag: {
      type: String,
      default: 'ul'
    }
  },
  data() {
    return {
      locals: {},
      ctxTop: 0,
      ctxLeft: 0,
      ctxVisible: false,
      bodyClickListener: createBodyClickListener(
        (e) => {
          let isOpen = !!this.ctxVisible
          let outsideClick = isOpen && !this.$el.contains(e.target)

          if (outsideClick) {
            if (e.which !== 1) {
              e.preventDefault()
              e.stopPropagation()
              return false
            } else {
              this.ctxVisible = false
              this.$emit('ctx-cancel', this.locals)
              e.stopPropagation()
            }
          } else {
            this.ctxVisible = false
            this.$emit('ctx-close', this.locals)
          }
        }
      )
    }
  },
  methods: {
    /*
     * this function handles some cross-browser compat issues
     * thanks to https://github.com/callmenick/Custom-Context-Menu
     */
    setPositionFromEvent(e) {
      e = e || window.event

      const scrollingElement = document.scrollingElement || document.documentElement

      if (e.pageX || e.pageY) {
        this.ctxLeft = e.pageX
        this.ctxTop = e.pageY - scrollingElement.scrollTop
      } else if (e.clientX || e.clientY) {
        this.ctxLeft = e.clientX + scrollingElement.scrollLeft
        this.ctxTop = e.clientY + scrollingElement.scrollTop
      }

      this.$nextTick(() => {
        const menu = this.$el
        const minHeight = (menu.style.minHeight || menu.style.height).replace('px', '') || 32
        const minWidth = (menu.style.minWidth || menu.style.width).replace('px', '') || 32
        const scrollHeight = menu.scrollHeight || minHeight
        const scrollWidth = menu.scrollWidth || minWidth

        const largestHeight = window.innerHeight - scrollHeight - 25
        const largestWidth = window.innerWidth - scrollWidth - 25

        if (this.ctxTop > largestHeight) this.ctxTop = largestHeight
        if (this.ctxLeft > largestWidth) this.ctxLeft = largestWidth
      })
      return e
    },

    open(e, data) {
      if (this.ctxVisible) this.ctxVisible = false
      this.ctxVisible = true
      this.$emit('ctx-open', this.locals = data || {})
      this.setPositionFromEvent(e)
      this.$el.setAttribute('tab-index', -1)
      this.bodyClickListener.start()
      return this
    }
  },
  watch: {
    ctxVisible(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.bodyClickListener.stop((e) => {
          // console.log('context menu sequence finished', e)
          // this.locals = {}
        })
      }
    }
  },
  computed: {
    ctxStyle() {
      return {
        'display': this.ctxVisible ? 'block' : 'none',
        'top': (this.ctxTop || 0) + 'px',
        'left': (this.ctxLeft || 0) + 'px'
      }
    }
  },
  render (h) {
    const on = {
      click: e => {
        e.stopPropagation()
      },
      '!contextmenu': e => {
        e.stopPropagation()
      }
    }
    return h('div', {
      class: 'ctx-menu-container',
      style: this.ctxStyle,
      attrs: {
        id: this.id
      },
      on,
      ref: 'contextMenu'
    }, [
      this.$slots.header,
      h(this.tag, {
        class: {
          'ctx-menu-list': true,
          'ctx-menu-right': this.align === 'right',
          'ctx-menu-left': this.align === 'left'
        },
        attrs: {
          role: 'menu'
        }
      }, [this.$slots.default]),
      this.$slots.footer
    ])
  }
}
</script>

<style lang="scss" scoped>
.ctx-menu{
  &-container{
    position: fixed; z-index: 99999;
    padding: 8px 0;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .15);
  }
  &-list{
    position: relative; top: 100%; left: 0;
    list-style: none;
    min-width: 160px;
    li{
      list-style: none;
    }

    > .menu-item{
      padding: 6px 12px;
      &:hover, &:focus, &.active{
        background-color: #f5f5f5;
        cursor: pointer;
      }
      &[disabled], &[disabled]:hover, &[disabled]:focus{
        background-color: transparent;
        opacity: .6;
        cursor: not-allowed;
      }
    }
    .menu-icon{
      color: #707070;
      margin-right: 8px;
    }
  }
  &-right {
    right: 0;
    left: auto;
  }
  &-left {
    right: auto;
    left: 0;
  }
}
</style>
