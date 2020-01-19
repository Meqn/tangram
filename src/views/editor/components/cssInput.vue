<template>
  <el-input :placeholder="placeholder || '请输入'" v-model="input" type="number" :size="size" :disabled="disabled">
    <el-select v-model="unitVal" slot="append" placeholder="请选择" style="width: 68px">
      <el-option
        v-for="item in cssUnit"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-input>
</template>

<script>
export default {
  name: 'css-input',
  props: {
    value: String,
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
    },
    placeholder: String
  },
  data () {
    let input = ''
    let unit = 'px'
    if (this.value) {
      try {
        const regx = /^(\d+)(px|vw|vh|\em|%)$/i
        if (regx.test(this.value)) {
          const arr = this.value.match(regx)
          input = arr[1]
          unit = arr[2]
        }
      } catch (err) {
        console.error(err)
      }
    }
    return {
      input: input,
      unitVal: unit,
      cssUnit: ['px', 'em', 'vw', 'vh', '%'].map(v => ({ value: v, label: v }))
    }
  },
  watch: {
    input (val) {
      this.$emit('input', val + this.unitVal)
    },
    unitVal (val) {
      this.$emit('input', this.input + val)
    }
  }
}
</script>
