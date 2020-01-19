<template>
  <div>
    <h1>创建 Vue-Component</h1>
    <div class="demo-box">
      {{ test.val }}
    </div>
    <div class="demo-box">
      <component :is="myComponent1" title="...属性title...">Slot测试内容 😂😂😂 ...</component>
    </div>

    <div class="demo-box">
      <component :is="myComponent2" title="...属性title...">Slot测试内容 😂😂😂 ...</component>
    </div>
    
    <div class="demo-box">
      <component :is="popover" :key="popoverKey"></component>
    </div>

    <div id="componentRoot"></div>
    
  </div>
</template>

<script>
// ⚠️ 配置文件中设置了别名 alias ('vue$', 'vue/dist/vue.esm.js')
// 所以这里加载的是 完整版 vue，而非 运行时版本（不含编译器）。
// 使用 template 创建模版，则需要 编译器
import Vue from 'vue'

// 方式 1: 通过 vue.component 创建
Vue.component('tpl-demo1', {
  template: '<div>component Demo1 {{title}} <slot></slot></div>',
  props: {
    title: String
  }
})

// 方式 2: 通过 component对象 创建
const tplObj = {
  name: 'my-components',
  component: {
    template: '<div>component Demo1 {{title}} <slot></slot></div>',
    props: {
      title: String
    }
  }
}

export default {
  name: 'create-vue-component',
  data () {
    return {
      myComponent1: 'tpl-demo1',
      myComponent2: tplObj.component,
      title: '标题字符串',
      test: {
        val: 111
      },
      popoverKey: new Date().getTime(),
      popover: {
        template: `
          <div>
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
              <el-button slot="reference">hover 激活</el-button>
            </el-popover>
            <el-tag type="success">标签二</el-tag>
          </div>`
      }
    }
  },
  mounted () {
    let vm = new Vue({
      el: '#componentRoot',
      data: {},
      template: `
        <div class="demo-box">
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </div>
        `
    })

    setTimeout(() => {
      this.test.val = 2222
      this.popover.template = `<el-tag type="warning">标签四</el-tag>`
      this.popoverKey = new Date().getTime()
    }, 5000)
  }
}
</script>

<style lang="scss">
.demo-box{
  padding: 24px;
  margin: 12px;
  border: 2px dashed rgb(102, 255, 0);
}
</style>
