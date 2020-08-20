<template>
  <vuedraggable class="page-tree" tag="div" v-bind="dragOptions" :list="list">
    <div v-for="item in list" :key="item.info.id" class="node-tree">
      <span :class="['node-name', 'move', {active: item.info.active}]" @click="onClickComponent(item)">
        <ta-icon type="element" size="14" name="rank" />
        {{item.info.name}}
      </span>
      <ul v-if="item.children" class="node-children">
        <li class="node-slot" v-for="slot in Object.keys(item.children)" :key="slot">
          <span class="node-slot-name">容器({{slot}})</span>
          <component-node-tree :list="item.children[slot]" />
        </li>
      </ul>
    </div>
  </vuedraggable>
</template>

<script>
import vuedraggable from 'vuedraggable'
import { editorMixin } from '../utils'

export default {
  name: 'component-node-tree',
  mixins: [editorMixin],
  components: {
    vuedraggable
  },
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'tree',
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'move'
      }
    }
  },
  methods: {
    onClickComponent (item) {
      this.compareElement(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.node{
  &-tree{
    margin-left: 12px;
  }
  &-name{
    &:hover{
      color: var(--blue-color);
    }
    &.move{
      cursor: move;
    }
    &.active{
      color: var(--blue-color);
    }
  }
  &-children{
    margin-left: 12px;
  }
  &-slot-name{
    color: #e6a23c;
  }
}
</style>
