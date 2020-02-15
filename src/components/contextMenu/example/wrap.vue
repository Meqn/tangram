<script>
export default {
  name: 'context-menu-wrap',
  render (h) {
    return h('div', {
      class: 'menu-wrap',
      attrs: {
        id: `menu-wrap-${new Date().getTime()}`
      }
    }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
.menu-wrap{
  width: 100%; height: 300px;
  border: 1px solid #f00;
  background-color: #eee;
}
</style>
