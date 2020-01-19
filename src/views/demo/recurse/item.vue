<template>
  <div class="item">
    <span>{{ data.title }}</span>
    <div class="sub-item" v-if="data.children" style="margin-left: 24px">
      <demo-recurse-item v-for="item in data.children" :key="item.title" :data="item">{{ item.title }}</demo-recurse-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-recurse-item',
  props: {
    data: Object
  }
}
</script>
