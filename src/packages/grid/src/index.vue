<template>
  <el-row
    type="flex"
    :tag="rowTag"
    :gutter="gutter"
    :justify="justify"
    :align="align"
    :style="commStyle"
    :class="commClass"
  >
    <el-col :tag="colTag" v-for="item in col" :key="item.slot" :span="item.value">
      <slot :name="item.slot"></slot>
    </el-col>
  </el-row>
</template>

<script>
import { baseMixin } from '@/packages/utils'
export default {
  name: 'ta-grid',
  mixins: [baseMixin],
  props: {
    justify: String,
    align: String,
    col: {
      type: Array,
      required: true
    },
    gutter: Number,
    rowTag: String,
    colTag: String
    
  }
}
</script>
