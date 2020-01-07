<template>
  <div class="flex-align-center">
    <div class="flex-item">
      <el-input-number v-model="input" controls-position="right" :min="min" :max="max" :size="size" :disabled="disabled"></el-input-number>
    </div>
    <div :style="unitStyle">
      <el-select v-model="unitVal" :size="size" placeholder="请选择" :disabled="disabled">
        <el-option
          v-for="item in cssUnit"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'css-input',
  props: {
    min: Number,
    max: Number,
    value: Number,
    unit: String,
    unitWidth: {
      type: String,
      default: '80px'
    },
    gutter: {
      type: String,
      default: '12px'
    },
    size: {
      type: String,
      default: 'small',
      validator (val) {
        return ['medium', 'small', 'mini'].indexOf(val) >= 0
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      input: this.value,
      unitVal: this.unit || 'px',
      cssUnit: [
        {
          value: 'px',
          label: 'px'
        }, {
          value: '%',
          label: '%'
        }, {
          value: 'em',
          label: 'em'
        }, {
          value: 'vw',
          label: 'vw'
        }, {
          value: 'vh',
          label: 'vh'
        }
      ]
    }
  },
  computed: {
    unitStyle () {
      return {
        width: this.unitWidth,
        'margin-left': this.gutter
      }
    }
  },
  watch: {
    input (val) {
      this.$emit('change', val + this.unitVal)
    },
    unitVal (val) {
      this.$emit('change', this.input + val)
    }
  }
}
</script>
