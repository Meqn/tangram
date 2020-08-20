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
    value: [String, Number, Boolean, Array, Object],
    list: {
      type: Object,
      required: true
    }
  },
  computed: {
    subProps () {
      try {
        const subItem = this.data.relation
        if (Array.isArray(subItem)) {
          return subItem
        }
        if (isObject(subItem)) {
          return subItem[this.value] || []
        }
        return []
      } catch (err) {
        return []
      }
    }
  }
}
</script>
