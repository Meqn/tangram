<template>
  <el-tabs v-model="attrTab" @tab-click="onTabChange" class="pe-aside-tabs">
    <!-- 属性设置 -->
    <el-tab-pane label="属性" name="attr">
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
    </el-tab-pane>
    <!-- 样式设置 -->
    <el-tab-pane label="样式" name="style">
      <AttributeItem label="背景色">
        <el-color-picker v-model="input" size="small" show-alpha></el-color-picker>
      </AttributeItem>
      <AttributeItem label="背景图">
        <el-input placeholder="https://" v-model="input">
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
      <template v-if="isPadding">
        <AttributeItem label="内置边框"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="自定义"><CssInput @change="onCssChange" /></AttributeItem>
      </template>
      <!-- 内边距设置 -->
      <AttributeItem label="内边距">
        <el-switch v-model="isPadding"></el-switch>
      </AttributeItem>
      <template v-if="isPadding">
        <AttributeItem label="上"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="右"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="下"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="左"><CssInput @change="onCssChange" /></AttributeItem>
      </template>
      <!-- 定位设置 -->
      <AttributeItem label="绝对定位">
        <el-switch v-model="bool"></el-switch>
      </AttributeItem>
      <template v-if="bool">
        <AttributeItem label="层级关系">
          <el-input-number v-model="num" controls-position="right" size="mini"></el-input-number>
        </AttributeItem>
        <AttributeItem label="上"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="右"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="下"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="左"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="宽度"><CssInput @change="onCssChange" /></AttributeItem>
        <AttributeItem label="高度"><CssInput @change="onCssChange" /></AttributeItem>
      </template>
      
    </el-tab-pane>
    <!-- 组件结构 -->
    <el-tab-pane label="结构" name="tree">树状结构</el-tab-pane>
  </el-tabs>
</template>

<script>
import AttributeItem from './attribute-item'
import CssInput from './css-input'

export default {
  name: 'attribute-aside',
  components: {
    AttributeItem,
    CssInput
  },
  data () {
    return {
      attrTab: 'style',
      input: '',
      num: 5,
      bool: true,
      isPadding: true,
      date: '',
      opacity: 0,
      cssUnit: ['px', '%', 'em', 'vw', 'vh'].map(v => ({ value: v, label: v })),
      cssUnitVal: 'px'
    }
  },
  methods: {
    onTabChange (tab, event) {
      console.log(tab, event)
    },
    onCssChange (val) {
      console.log('当前值：', val)
    }
  }
}
</script>
