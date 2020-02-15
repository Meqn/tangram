
export function editorMixin(mapActions) {
  return {
    methods: {
      ...mapActions('page', [
        'updateComponents',
        'updateCurrentComponent',
        'updatePrevComponent'
      ]),
      // 设置当前选择组件（含拖拽、右键、点击 操作）
      compareElement (newEle) {
        try {
          const oldEle = this.$store.state.page.currentComponent
          const prevEle = this.$store.state.page.prevComponent
          if (newEle !== oldEle) {
            prevEle && (prevEle.info.active = false)
            oldEle && (oldEle.info.active = false)
            newEle.info.active = true
            
            this.updateCurrentComponent(newEle)
            this.updatePrevComponent(oldEle)
          }
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
}
