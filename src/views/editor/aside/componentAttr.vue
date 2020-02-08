<template>
  <div v-if="propsKey.length > 0">
    <template v-for="prop in propsKey">
      <AttributeItem
        :key="prop"
        v-if="settings[prop].configurable !== false"
        :label="settings[prop].label">
        
        <template v-if="settings[prop].type === 'input'">
          <el-input v-model="propsValue[prop]" v-bind="settings[prop].props" size="small"></el-input>
        </template>

        <template v-if="settings[prop].type === 'select'">
          <el-select v-model="propsValue[prop]" v-bind="settings[prop].props">
            <el-option
              v-for="item in settings[prop].props.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </template>
        
      </AttributeItem>
    </template>

    <AttributeItem label="输入值">
      <el-input v-model="input" size="small" placeholder="请输入标题"></el-input>
    </AttributeItem>
    <AttributeItem label="占位文本">
      <el-input v-model="input" size="small" placeholder="请输入标题"></el-input>
    </AttributeItem>
    <AttributeItem label="最大长度">
      <el-input-number v-model="num" size="small" :min="1" :max="10"></el-input-number>
    </AttributeItem>
    <AttributeItem label="是否禁用">
      <el-switch v-model="bool"></el-switch>
    </AttributeItem>
    <AttributeItem label="更新日期">
      <el-date-picker v-model="date" type="date" size="small" placeholder="选择日期"></el-date-picker>
    </AttributeItem>
    <AttributeItem label="缩略图">
      <el-input placeholder="https://" v-model="input">
        <template slot="append">上传</template>
      </el-input>
    </AttributeItem>
    <h2>{{ currentComponent && currentComponent.info.name }}</h2>
  </div>
</template>

<script>
import AttributeItem from './attrItem'

export default {
  name: 'component-attr',
  components: {
    AttributeItem
  },
  data () {
    return {
      input: '',
      num: 5,
      bool: true,
      date: ''
    }
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
