<template>
  <div v-if="styles">
    <AttributeItem label="宽度"><CssInput v-model="styles.width" /></AttributeItem>
    <AttributeItem label="高度"><CssInput v-model="styles.height" /></AttributeItem>
    <AttributeItem label="外部class">
      <el-input v-model="input" size="small"></el-input>
    </AttributeItem>
    <AttributeItem label="背景色">
      <el-color-picker v-model="styles.backgroundColor" size="small" show-alpha></el-color-picker>
    </AttributeItem>
    <AttributeItem label="背景图">
      <el-input placeholder="https://"  v-model="styles.backgroundImage" size="small">
        <template slot="append">上传</template>
      </el-input>
    </AttributeItem>
    <AttributeItem label="背景位置">
      <el-input v-model="styles.backgroundPosition" size="small"></el-input>
    </AttributeItem>
    <AttributeItem label="背景尺寸">
      <el-input v-model="styles.backgroundSize" size="small"></el-input>
    </AttributeItem>
    <AttributeItem label="透明度">
      <el-input-number v-model="styles.opacity" controls-position="right" :min="0" :max="1" :step="0.01" size="mini"></el-input-number>
    </AttributeItem>
    <!-- 边框样式 -->
    <AttributeItem label="边框样式">
      <CssInput v-model="paddingValue" />
    </AttributeItem>
    <AttributeItem label="边框自定义">
      <el-input v-model="input" size="small"></el-input>
    </AttributeItem>
    <!-- 内边距设置 -->
    <AttributeItem label="内边距">
      <el-switch v-model="isPadding"></el-switch>
    </AttributeItem>
    <div v-if="isPadding" class="sub-pannel">
      <el-row :gutter="12" class="mb8">
        <el-col :span="12"><CssInput v-model="styles.paddingTop" auto placeholder="上" /></el-col>
        <el-col :span="12"><CssInput v-model="styles.paddingBottom" auto placeholder="下" /></el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12"><CssInput v-model="styles.paddingLeft" auto placeholder="左" /></el-col>
        <el-col :span="12"><CssInput v-model="styles.paddingRight" auto placeholder="右" /></el-col>
      </el-row>
    </div>
    <!-- 外边距设置 -->
    <AttributeItem label="外边距">
      <el-switch v-model="isPadding"></el-switch>
    </AttributeItem>
    <div v-if="isPadding" class="sub-pannel">
      <el-row :gutter="12" class="mb8">
        <el-col :span="12"><CssInput v-model="styles.marginTop" auto placeholder="上" /></el-col>
        <el-col :span="12"><CssInput v-model="styles.marginBottom" auto placeholder="下" /></el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="12"><CssInput v-model="styles.marginLeft" auto placeholder="左" /></el-col>
        <el-col :span="12"><CssInput v-model="styles.marginRight" auto placeholder="右" /></el-col>
      </el-row>
    </div>
    <!-- 定位设置 -->
    <AttributeItem label="绝对定位">
      <el-switch v-model="bool"></el-switch>
    </AttributeItem>
    <div v-if="bool" class="sub-pannel">
      <el-row :gutter="12" class="mb8">
        <el-col :span="12"><CssInput v-model="styles.top" auto placeholder="上" /></el-col>
        <el-col :span="12"><CssInput v-model="styles.bottom" auto placeholder="下" /></el-col>
      </el-row>
      <el-row :gutter="12" class="mb12">
        <el-col :span="12"><CssInput v-model="styles.left" auto placeholder="左" /></el-col>
        <el-col :span="12"><CssInput v-model="styles.right" auto placeholder="右" /></el-col>
      </el-row>
      <AttributeItem label="层叠顺序">
        <el-input-number v-model="styles.zIndex" controls-position="right" size="mini"></el-input-number>
      </AttributeItem>
    </div>
  </div>
  <div v-else>
    <el-divider content-position="left">无配置项</el-divider>
  </div>
</template>

<script>
import AttributeItem from './attrItem'
import { CssInput } from '@/components'

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
      num: '',
      bool: true,
      isPadding: true,
      date: '',
      opacity: 0,
      zIndex: undefined
    }
  },
  computed: {
    styles () {
      const current = this.$store.state.page.currentComponent
      return (current && current.props)
    }
  }
}
</script>
