<template>
  <MountComponent
    class="ta-drag-wrap"
    v-model="components"
    :editable="false">
  </MountComponent>
</template>
<script>
import MountComponent from './mount/view'
export default {
  name: 'page-preview',
  components: {
    MountComponent
  },
  data () {
    const tpl = window.localStorage.getItem('TEMPLATE_CONTENT')
    return {
      components: tpl ? JSON.parse(tpl) : []
    }
  },
  created () {
    const setting = window.localStorage.getItem('TEMPALTE_SETTING')
    if (setting) {
      this.$store.dispatch('page/updateTemplateConfig', JSON.parse(setting))
    } else {
      this.$message({
        showClose: true,
        message: '当前项目无预览数据',
        type: 'warning',
        duration: 0
      })
    }
  }
}
</script>
