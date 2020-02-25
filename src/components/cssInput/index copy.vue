<template>
  <el-input
    :class="{ 'is-error': isInvalid }"
    :placeholder="placeholder || '请输入'" 
    v-model="input"
    :type="type"
    :size="size"
    :disabled="inputDisabled">
    <el-select v-model="unitVal" slot="append" placeholder="请选择" style="width: 76px">
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
    type: {
      type: String,
      default: 'number'
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
      unitVal: 'px',
      isInvalid: false
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
    unitVal (val) {
      this.$emit('input', val === 'auto' ? 'auto' : this.input + val)
    },
    value: {
      handler (val) {
        if (val === 'auto') {
          this.unitVal = val
        } else {
          const regx = /^((-?\d+)(\.\d+)?)(px|vw|vh|\em|%)$/i
          if (regx.test(val)) {
            const arr = val.match(regx)
            this.input = arr[1]
            this.unitVal = arr[4]
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
    },
    onBlur(e) {
      console.log('blur : ', this.input)
      // 判断 input 是否有效数值
      const regx = /^(-?\d+)(\.\d+)?$/
      if (regx.test(this.input)) {
        this.isInvalid = false
        this.$emit('input', Number(this.input) + this.unitVal)
      } else {
        this.isInvalid = (this.input !== '')
        this.input = ''
        this.$emit('input', '')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.is-error{
  /deep/ .el-input__inner{
    border-color: #f56c6c;
  }
}
</style>
