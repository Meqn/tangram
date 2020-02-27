<template>
  <i :class="iconClass" :style="iconStyle"></i>
</template>

<script>
export default {
  name: 'ta-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: [String, Number],
    color: String,
    type: {
      type: String,
      validator(val) {
        return !val || (['element'].indexOf !== -1)
      }
    },
    weight: [String, Number]
  },
  computed: {
    iconClass () {
      if (this.type === 'element') {
        return `el-icon-${this.name}`
      }
      return 'icon-font ta-icon'
    },
    iconStyle () {
      const obj = {}
      this.color && (obj['color'] = this.color)
      this.weight && (obj['fontWeight'] = this.weight)
      if (this.size) {
        const n = /^\d+$/
        obj['fontSize'] = n.test(String(this.size)) ? this.size + 'px' : this.size
      }
      return obj
    }
  }
}
</script>
