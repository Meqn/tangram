<template>
  <div v-if="styles">
    <AttributeItem label="宽度" inline><CssInput v-model="styles.width" /></AttributeItem>
    <AttributeItem label="高度" inline><CssInput v-model="styles.height" /></AttributeItem>
    <AttributeItem label="样式class" inline><el-input v-model="styles.extClass" size="small" /></AttributeItem>
    <AttributeItem label="背景色" inline>
      <el-color-picker v-model="styles.backgroundColor" size="small" show-alpha></el-color-picker>
    </AttributeItem>
    <AttributeItem label="背景图">
      <upload-input v-model="styles.backgroundImage" accept=".jpg, .jpeg, .png, .gif" fileType="image" :fileSize="1024" />
    </AttributeItem>
    <AttributeItem label="平铺方式" inline  class="mb8">
      <el-select v-model="styles.backgroundRepeat" placeholder="请选择" size="small" clearable>
        <el-option
          v-for="item in bgRepeatOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </AttributeItem>
    <AttributeItem label="背景位置" inline>
      <el-input v-model="styles.backgroundPosition" size="small"></el-input>
    </AttributeItem>
    <AttributeItem label="背景尺寸" inline>
      <el-input v-model="styles.backgroundSize" size="small"></el-input>
    </AttributeItem>
    <AttributeItem label="透明度" inline>
      <el-input-number v-model="styles.opacity" controls-position="right" :min="0" :max="1" :step="0.01" size="mini"></el-input-number>
    </AttributeItem>
    <!-- 边框样式 -->
    <AttributeItem label="内置边框" inline>
      <el-select v-model="styles.borderClass" placeholder="请选择" size="small" clearable>
        <el-option value="border1">边框样式1</el-option>
        <el-option value="border2">边框样式2</el-option>
        <el-option value="border3">边框样式3</el-option>
      </el-select>
    </AttributeItem>
    <!-- 内边距设置 -->
    <AttributeItem label="内边距" inline class="mb8">
      <el-switch v-model="isPadding"></el-switch>
    </AttributeItem>
    <div class="sub-panel" v-if="isPadding">
      <AttributeItem label="上" inline width="16px" class="mb8">
        <CssInput v-model="styles.paddingTop" auto placeholder="padding-top" />
      </AttributeItem>
      <AttributeItem label="下" inline width="16px" class="mb8">
        <CssInput v-model="styles.paddingBottom" auto placeholder="padding-bottom" />
      </AttributeItem>
      <AttributeItem label="左" inline width="16px" class="mb8">
        <CssInput v-model="styles.paddingLeft" auto placeholder="padding-left" />
      </AttributeItem>
      <AttributeItem label="右" inline width="16px">
        <CssInput v-model="styles.paddingRight" auto placeholder="padding-right" />
      </AttributeItem>
    </div>
    <!-- 外边距设置 -->
    <AttributeItem label="外边距" inline class="mb8">
      <el-switch v-model="isMargin"></el-switch>
    </AttributeItem>
    <div class="sub-panel" v-if="isMargin">
      <AttributeItem label="上" inline width="16px" class="mb8">
        <CssInput v-model="styles.marginTop" auto placeholder="margin-top" />
      </AttributeItem>
      <AttributeItem label="下" inline width="16px" class="mb8">
        <CssInput v-model="styles.marginBottom" auto placeholder="margin-bottom" />
      </AttributeItem>
      <AttributeItem label="左" inline width="16px" class="mb8">
        <CssInput v-model="styles.marginLeft" auto placeholder="margin-left" />
      </AttributeItem>
      <AttributeItem label="右" inline width="16px">
        <CssInput v-model="styles.marginRight" auto placeholder="margin-right" />
      </AttributeItem>
    </div>
    <!-- 定位设置 -->
    <AttributeItem label="定位方式" inline  class="mb8">
      <el-select v-model="styles.position" placeholder="请选择" size="small" clearable>
        <el-option
          v-for="item in positionOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </AttributeItem>
    <div v-if="styles.position" class="sub-panel">
      <AttributeItem label="上" inline width="16px" class="mb8">
        <CssInput v-model="styles.top" auto placeholder="top" />
      </AttributeItem>
      <AttributeItem label="下" inline width="16px" class="mb8">
        <CssInput v-model="styles.bottom" auto placeholder="bottom" />
      </AttributeItem>
      <AttributeItem label="左" inline width="16px" class="mb8">
        <CssInput v-model="styles.left" auto placeholder="left" />
      </AttributeItem>
      <AttributeItem label="右" inline width="16px">
        <CssInput v-model="styles.right" auto placeholder="right" />
      </AttributeItem>

      <AttributeItem label="z-index级别" width="76px" inline>
        <el-input-number v-model="styles.zIndex" controls-position="right" size="small"></el-input-number>
      </AttributeItem>
      
    </div>
    <AttributeItem label="扩展样式">
      <el-input
        type="textarea"
        size="small"
        :autosize="{ minRows: 3, maxRows: 5}"
        v-model="styles.extStyle">
      </el-input>
    </AttributeItem>
  </div>
  <div v-else>
    <el-divider content-position="left">无配置项</el-divider>
  </div>
</template>

<script>
import { AttributeItem } from '../components'
import { CssInput, UploadInput } from '@/components'

export default {
  name: 'component-style',
  components: {
    AttributeItem,
    CssInput,
    UploadInput
  },
  data () {
    return {
      attrTab: 'style',
      positionOptions: ['static', 'relative', 'absolute'].map(v => ({ value: v, label: v })),
      bgRepeatOptions: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'space', 'round'].map(v => ({ value: v, label: v })),
      isPadding: false,
      isMargin: false,
      input: ''
    }
  },
  computed: {
    styles () {
      const current = this.$store.state.page.currentComponent
      return (current && current.props)
    }
  },
  methods: {
    handleBackgroundImage({ raw }) {
      this.styles.backgroundImage = raw
    }
  }
}
</script>
