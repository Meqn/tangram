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
    @change="onChange"
  >
    <template v-for="item in realValue">
      <component
        :is="item.component"
        v-bind="cleanProp(item.props)"
        :key="item.info.id"
        :class="{ 'is-active': editable && item.info.active }"
        :ref="item.info.id"
        :id="item.info.id"
        @click.native.stop="onClickComponent(item)"
        @contextmenu.native.stop.prevent="onOpenMenu($event, item)"
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
              :editable="editable"
              :ctxMenu="ctxMenu" />
          </template>
        </template>
      </component>
    </template>
  </Draggable>
</template>

<script>
import Draggable from 'vuedraggable'
import { filterProp } from '@/utils'
import { editorMixin } from '../utils'

export default {
  name: 'drag-item',
  components: {
    Draggable
  },
  mixins: [editorMixin],
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
    },
    ctxMenu: {
      type: Object
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
    cleanProp (obj) {
      return filterProp(obj)
    },
    handleUpdate (value) {
      this.$emit('input', value)
    },
    onOpenMenu (event, data) {
      if (this.editable) {
        this.ctxMenu.open(event, data)
      }
    },
    onClickComponent (item) {
      // console.log('contextmenu : ', this.ctxMenu)
      if (this.editable) {
        this.compareElement(item)
      }
    },
    onChange (evt) {
      console.log('onChange ... ', evt)
      if (evt.added && evt.added.element) {
        console.log('增加 ... ', evt.added.element)
        const element = evt.added.element
        this.compareElement(element)
      }
      if (evt.moved && evt.moved.element) {
        console.log('移动...', evt.moved.element)
        const element = evt.moved.element
        this.compareElement(element)
      }
      if (evt.removed) {
        console.log('移除 ... ', evt.removed.element)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.drag-item{

  &.slot-area{
    min-height: 64px;
    padding: 16px;
    border: 2px dashed #c9cadd;
  }
  .is-active{
    box-shadow: inset 0 0 0 2px #40a9ff;
  }
  /deep/ .components-item{
    list-style: none;
    display: inline-block;
    padding: 12px 24px;
    background-color: #ccc;
  }
  /deep/ .sortable-ghost{
    opacity: .6;
  }
}
</style>
