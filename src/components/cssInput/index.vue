<template>
  <el-input :placeholder="placeholder || '请输入'" v-model="input" type="number" :size="size" :disabled="inputDisabled">
    <el-select v-model="unitVal" slot="append" placeholder="请选择" style="width: 80px">
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
    auto: {
      type: Boolean,
      default: false
    },
    placeholder: String
  },
  data () {
    return {
      input: '',
      unitVal: 'px'
    }
  },
  computed: {
    cssUnit () {
      const unitList = ['px', 'em', 'vw', 'vh', '%']
      if (this.auto) {
        unitList.push('auto')
      }
      return unitList.map(v => ({ value: v, label: v }))
    },
    inputDisabled () {
      return this.unitVal === 'auto' ? true : this.disabled
    }
  },
  watch: {
    input (val) {
      this.$emit('input', val === '' ? '' : val + this.unitVal)
    },
    unitVal (val) {
      this.$emit('input', val === 'auto' ? 'auto' : this.input + val)
    },
    value: {
      handler (val) {
        if (val === 'auto') {
          this.unitVal = val
        } else {
          const regx = /^(\d+)(px|vw|vh|\em|%)$/i
          if (regx.test(val)) {
            const arr = val.match(regx)
            this.input = arr[1]
            this.unitVal = arr[2]
          } else {
            this.resetValue()
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    resetValue () {
      this.input = ''
      this.unitVal =  'px'
    }
  }
}
</script>
