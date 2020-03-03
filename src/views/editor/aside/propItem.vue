<template>
<div>
  <PropSetting :prop="prop" :data="data"></PropSetting>
  <template v-if="subProps.length > 0">
    <template v-for="key in subProps">
      <PropSetting
        v-if="list[key].configurable === false"
        :key="key"
        :prop="key"
        :data="list[key]">
      </PropSetting>
    </template>
  </template>
</div>
</template>

<script>
import { isObject } from '@/utils'
import PropSetting from './propSetting'

export default {
  name: 'component-prop-item',
  components: {
    PropSetting
  },
  props: {
    prop: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    value: [String, Number],
    list: {
      type: Object,
      required: true
    }
  },
  computed: {
    subProps () {
      const sub = this.data['relation']
      if (Array.isArray(sub)) {
        return sub
      }
      if (isObject(sub)) {
        return sub[this.value] || []
      }
      return []
    }
  }
}
</script>
