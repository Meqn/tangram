<template>
  <li class="components-item">
    <div class="components-item-img"></div>
    <p class="components-item-text">{{ data.info.name }}</p>
  </li>
</template>

<script>
export default {
  name: 'components-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
