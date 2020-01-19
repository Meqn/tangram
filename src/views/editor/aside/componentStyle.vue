<template>
  <div>
    <AttributeItem label="宽度"><CssInput /></AttributeItem>
    <AttributeItem label="高度"><CssInput /></AttributeItem>
    <AttributeItem label="背景色">
      <el-color-picker v-model="input" size="small" show-alpha></el-color-picker>
    </AttributeItem>
    <AttributeItem label="背景图">
      <el-input placeholder="https://" v-model="input" size="small">
        <template slot="append">上传</template>
      </el-input>
    </AttributeItem>
    <AttributeItem label="背景位置">
      <el-input-number v-model="opacity" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
    </AttributeItem>
    <AttributeItem label="背景尺寸">
      <el-input-number v-model="opacity" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
    </AttributeItem>
    <AttributeItem label="透明度">
      <el-input-number v-model="opacity" controls-position="right" :min="0" :max="100" size="mini"></el-input-number>
    </AttributeItem>
    <!-- 边框样式 -->
    <AttributeItem label="边框样式">
      <el-switch v-model="isPadding"></el-switch>
    </AttributeItem>
    <div v-if="isPadding" class="sub-pannel">
      <AttributeItem label="内置边框"><CssInput v-model="paddingValue" /></AttributeItem>
      <AttributeItem label="自定义"><CssInput /></AttributeItem>
    </div>
    <!-- 内边距设置 -->
    <AttributeItem label="内边距">
      <el-switch v-model="isPadding"></el-switch>
    </AttributeItem>
    <div v-if="isPadding" class="sub-pannel">
      <el-row :gutter="12" class="mb8">
        <el-col :span="12"><CssInput placeholder="上" /></el-col>
        <el-col :span="12"><CssInput placeholder="下" /></el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12"><CssInput placeholder="左" /></el-col>
        <el-col :span="12"><CssInput placeholder="右" /></el-col>
      </el-row>
    </div>
    <!-- 外边距设置 -->
    <AttributeItem label="外边距">
      <el-switch v-model="isPadding"></el-switch>
    </AttributeItem>
    <div v-if="isPadding" class="sub-pannel">
      <el-row :gutter="12" class="mb8">
        <el-col :span="12"><CssInput placeholder="上" /></el-col>
        <el-col :span="12"><CssInput placeholder="下" /></el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12"><CssInput placeholder="左" /></el-col>
        <el-col :span="12"><CssInput placeholder="右" /></el-col>
      </el-row>
    </div>
    <!-- 定位设置 -->
    <AttributeItem label="绝对定位">
      <el-switch v-model="bool"></el-switch>
    </AttributeItem>
    <div v-if="bool" class="sub-pannel">
      <el-row :gutter="12" class="mb8">
        <el-col :span="12"><CssInput placeholder="上" /></el-col>
        <el-col :span="12"><CssInput placeholder="下" /></el-col>
      </el-row>
      <el-row :gutter="12" class="mb12">
        <el-col :span="12"><CssInput placeholder="左" /></el-col>
        <el-col :span="12"><CssInput placeholder="右" /></el-col>
      </el-row>
      <AttributeItem label="层叠顺序">
        <el-input-number v-model="num" controls-position="right" size="mini"></el-input-number>
      </AttributeItem>
    </div>
  </div>
</template>

<script>
import AttributeItem from './attrItem'
import { CssInput } from '../components'

export default {
  name: 'component-style',
  components: {
    AttributeItem,
    CssInput
  },
  data () {
    return {
      paddingValue: '30%',
      attrTab: 'style',
      input: '',
      num: 5,
      bool: true,
      isPadding: true,
      date: '',
      opacity: 0
    }
  }
}
</script>
