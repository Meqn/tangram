<template>
  <div>
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
}
</script>
