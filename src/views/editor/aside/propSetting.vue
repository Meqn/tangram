<template>
<AttributeItem
  :key="prop"
  :label="data.label">
  
  <!-- 文本: text , number -->
  <template v-if="data.type === 'input'">
    <el-input v-model="propsValue[prop]" v-bind="data.props" size="small"></el-input>
  </template>

  <!-- 文本域 -->
  <template v-if="data.type === 'textarea'">
    <el-input
      type="textarea"
      size="small"
      :autosize="{ minRows: 3, maxRows: 5}"
      v-model="propsValue[prop]"
      v-bind="data.props">
    </el-input>
  </template>

  <!-- css值输入框 -->
  <template v-if="data.type === 'cssInput'">
    <css-input v-model="propsValue[prop]" v-bind="data.props"></css-input>
  </template>

  <!-- 计数器 -->
  <template v-if="data.type === 'inputNumber'">
    <el-input-number
      v-model="propsValue[prop]"
      v-bind="data.props"
      controls-position="right"
      size="small">
    </el-input-number>
  </template>

  <!-- 下拉选择框 -->
  <template v-if="data.type === 'select'">
    <el-select v-model="propsValue[prop]" v-bind="data.props" clearable size="small">
      <el-option
        v-for="item in data.props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </template>

  <!-- 切换器/开关 -->
  <template v-if="data.type === 'switch'">
    <el-switch v-model="propsValue[prop]" v-bind="data.props"></el-switch>
  </template>
  
  <!-- 单选框组 -->
  <template v-if="data.type === 'radioGroup'">
    <el-radio-group v-model="propsValue[prop]">
      <el-radio
        v-for="item in data.props.options"
        :label="item.value"
        :key="item.value">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </template>

  <!-- 多选框组 -->
  <template v-if="data.type === 'checkGroup'">
    <el-checkbox-group v-model="propsValue[prop]">
      <el-checkbox
        v-for="item in data.props.options"
        :label="item.value"
        :key="item.value">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </template>

  <!-- 滑动条 -->
  <template v-if="data.type === 'slider'">
    <el-slider v-model="propsValue[prop]" v-bind="data.props"></el-slider>
  </template>

  <!-- 时间选择 -->
  <template v-if="data.type === 'timePicker'">
    <el-time-select v-model="propsValue[prop]" v-bind="data.props" size="small"></el-time-select>
  </template>

  <!-- 时间日期选择 -->
  <template v-if="data.type === 'datePicker'">
    <el-date-picker v-model="propsValue[prop]" v-bind="data.props" size="small"></el-date-picker>
  </template>

  <!-- 颜色选择器 -->
  <template v-if="data.type === 'colorPicker'">
    <el-color-picker v-model="propsValue[prop]" v-bind="data.props" size="small" show-alpha></el-color-picker>
  </template>

  <!-- 上传 -->
  <template v-if="data.type === 'upload'">
    <el-input placeholder="https://" v-model="propsValue[prop]" size="small">
      <template slot="append">上传</template>
    </el-input>
  </template>

  <!-- 栅格列配置 -->
  <template v-if="data.type === 'grid'">
    <Draggable
      :list="propsValue[prop]"
      handle=".handle">
      <transition-group type="transition" name="flip-list">
        <div
          class="attr-grid"
          v-for="(grid, index) in propsValue[prop]"
          :key="grid.slot">
          <i class="el-icon-s-unfold attr-grid-drag handle"></i>
          <el-input-number
            class="ml8 mr12"
            v-model="grid.value"
            controls-position="right"
            :min="1"
            :max="24"
            :step="1"
            size="mini">
          </el-input-number>
          <i class="el-icon-remove attr-grid-remove" @click="onColRemove(index, grid, propsValue[prop])"></i>
        </div>
      </transition-group>
      <template slot="footer">
        <el-button
          v-if="!data.props || data.props.add !== false"
          class="attr-grid-add"
          size="mini"
          @click="onColAdd(propsValue[prop])"
        >新增列</el-button>
      </template>
    </Draggable>
  </template>
</AttributeItem>
</template>

<script>
import { AttributeItem } from '../components'
import { CssInput } from '@/components'
import Draggable from 'vuedraggable'

export default {
  name: 'component-prop-setting',
  components: {
    AttributeItem,
    CssInput,
    Draggable
  },
  props: {
    prop: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentComponent () {
      return this.$store.state.page.currentComponent
    },
    propsValue () {
      return (this.currentComponent && this.currentComponent.props) || {}
    }
  },
  methods: {
    onColAdd(list) {
      // :bug: 动态追加的 Col，在其 slot内操作无响应，需要重载一次 (猜测是 Vue.Draggable问题 )
      const col = {
        slot: `col${new Date().getTime()}`,
        value: 4
      }
      list.push(col)

      const current = this.currentComponent
      if (current) {
        current.slots && (current.slots.push(col.slot))
        current.children && (current.children[col.slot] = [])
      }
    },
    onColRemove(index, val, list) {
      list.splice(index, 1)
      const current = this.currentComponent
      if (current) {
        if (current.slots) {
          current.slots = current.slots.filter(v => v !== val.slot)
        }
        if (current.children) {
          delete current.children[val.slot]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.attr-grid{
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &-drag{
    color: #999;
    font-size: 22px;
    cursor: move;
  }
  &-remove{
    color: #fa9a9a;
    font-size: 22px;
    cursor: pointer;
    &:hover{
      color: #F56C6C;
      opacity: 1;
    }
  }
  &-add{
    margin-left: 30px;
  }
}

.flip-list-move {
  transition: transform 0.5s;
}
</style>
