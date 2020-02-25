<template>
<div>
  <AttributeItem v-if="currentComponent && currentComponent.info" :label="currentComponent.info.name">
    <el-input v-model="currentComponent.info.id" size="small" disabled></el-input>
  </AttributeItem>

  <div v-if="propsKey.length > 0">
    <template v-for="prop in propsKey">
      <AttributeItem
        :key="prop"
        v-if="settings[prop].configurable !== false"
        :label="settings[prop].label">
        
        <!-- 文本: text , number -->
        <template v-if="settings[prop].type === 'input'">
          <el-input v-model="propsValue[prop]" v-bind="settings[prop].props" size="small"></el-input>
        </template>

        <!-- 文本域 -->
        <template v-if="settings[prop].type === 'textarea'">
          <el-input
            type="textarea"
            size="small"
            :autosize="{ minRows: 2, maxRows: 4}"
            v-model="propsValue[prop]"
            v-bind="settings[prop].props">
          </el-input>
        </template>

        <!-- css值输入框 -->
        <template v-if="settings[prop].type === 'cssInput'">
          <css-input v-model="propsValue[prop]" v-bind="settings[prop].props"></css-input>
        </template>

        <!-- 计数器 -->
        <template v-if="settings[prop].type === 'inputNumber'">
          <el-input-number
            v-model="propsValue[prop]"
            v-bind="settings[prop].props"
            controls-position="right"
            size="small">
          </el-input-number>
        </template>

        <!-- 下拉选择框 -->
        <template v-if="settings[prop].type === 'select'">
          <el-select v-model="propsValue[prop]" v-bind="settings[prop].props" size="small">
            <el-option
              v-for="item in settings[prop].props.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>

        <!-- 切换器/开关 -->
        <template v-if="settings[prop].type === 'switch'">
          <el-switch v-model="propsValue[prop]" v-bind="settings[prop].props"></el-switch>
        </template>
        
        <!-- 单选框组 -->
        <template v-if="settings[prop].type === 'radioGroup'">
          <el-radio-group v-model="propsValue[prop]">
            <el-radio
              v-for="item in settings[prop].props.options"
              :label="item.value"
              :key="item.value">
              {{ item.label }}
            </el-radio>
          </el-radio-group>
        </template>

        <!-- 多选框组 -->
        <template v-if="settings[prop].type === 'checkGroup'">
          <el-checkbox-group v-model="propsValue[prop]">
            <el-checkbox
              v-for="item in settings[prop].props.options"
              :label="item.value"
              :key="item.value">
              {{ item.label }}
            </el-checkbox>
          </el-checkbox-group>
        </template>

        <!-- 滑动条 -->
        <template v-if="settings[prop].type === 'slider'">
          <el-slider v-model="propsValue[prop]" v-bind="settings[prop].props"></el-slider>
        </template>

        <!-- 时间选择 -->
        <template v-if="settings[prop].type === 'timePicker'">
          <el-time-select v-model="propsValue[prop]" v-bind="settings[prop].props" size="small"></el-time-select>
        </template>

        <!-- 时间日期选择 -->
        <template v-if="settings[prop].type === 'datePicker'">
          <el-date-picker v-model="propsValue[prop]" v-bind="settings[prop].props" size="small"></el-date-picker>
        </template>

        <!-- 颜色选择器 -->
        <template v-if="settings[prop].type === 'colorPicker'">
          <el-color-picker v-model="propsValue[prop]" v-bind="settings[prop].props" size="small" show-alpha></el-color-picker>
        </template>

        <!-- 上传 -->
        <template v-if="settings[prop].type === 'upload'">
          <el-input placeholder="https://" v-model="propsValue[prop]" size="small">
            <template slot="append">上传</template>
          </el-input>
        </template>
        
      </AttributeItem>
    </template>
  </div>
  
  <el-divider v-else content-position="left">无配置项</el-divider>
</div>
</template>

<script>
import { AttributeItem } from '../components'
import { CssInput } from '@/components'

export default {
  name: 'component-attr',
  components: {
    AttributeItem,
    CssInput
  },
  computed: {
    currentComponent () {
      return this.$store.state.page.currentComponent
    },
    settings () {
      return (this.currentComponent && this.currentComponent.setting) || {}
    },
    propsKey () {
      return Object.keys(this.settings)
    },
    propsValue () {
      return (this.currentComponent && this.currentComponent.props) || {}
    }
  }
}
</script>
