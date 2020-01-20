<template>
  <Draggable
    v-bind="dragOptions"
    tag="div"
    :class="['drag-item']"
    :list="list"
    :value="value"
    @input="handleUpdate"
    @start="drag = true"
    @end="drag = false"
  >
    <template v-for="item in realValue">
      <component
        :is="item.component"
        v-bind="clean(item.props)"
        :key="item.info.id"
        @click.native.stop="handleSelect(item)"
        :ref="item.info.id"
      >
        <template v-if="item.children && Object.keys(item.children).length > 0">
          <template v-for="slot in Object.keys(item.children)">
            <!-- 非编辑状态，移除 空slot DOM元素 -->
            <drag-item
              v-if="item.children[slot].length > 0 || editable"
              :key="slot"
              :slot="slot"
              :class="{ 'slot-area': editable }"
              :list="item.children[slot]"
              :editable="editable" />
          </template>
        </template>
      </component>
    </template>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import { filterProp } from '@/utils'

export default {
  name: 'drag-item',
  components: {
    Draggable
  },
  props: {
    value: {
      type: Array,
      default: null
    },
    list: {
      type: Array,
      default: null
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      drag: false
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'page',
        disabled: !this.editable,
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag'
      }
    },
    realValue () {
      return this.value ? this.value : this.list
    }
  },
  methods: {
    clean (obj) {
      console.log(filterProp(obj))
      return filterProp(obj)
    },
    handleUpdate (value) {
      this.$emit('input', value)
    },
    handleSelect (item) {
      console.log('click : ', item)
    }
  }
}
</script>
<style lang="scss">
.slot-area{
  min-height: 40px;
  padding: 4px;
  border: 1px dashed #eee;
}
</style>
