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
    return {
      components: JSON.parse(window.localStorage.getItem('components')) || []
    }
  }
}
</script>
