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
        :class="[(item.slots && item.slots.length > 0) ? 'item-slot' : 'item-view', { 'is-active': editable && item.info.active }]"
        :ref="item.info.id"
        :id="item.info.id"
        @click.native.stop="onClickComponent(item)"
        @contextmenu.native.stop.prevent="onOpenMenu($event, item)"
      >
        <template v-if="item.children && Object.keys(item.children).length > 0">
          <template v-for="slot in Object.keys(item.children)">
            <!-- 非编辑状态，移除 空slot DOM元素 -->
            <mount-component
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

<script src="./mount.js"></script>
<style lang="scss" scoped src="./mount.scss"></style>
