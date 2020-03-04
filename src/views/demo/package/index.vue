<template>
<div class="light package-demo">
  <h1 class="mb16">组件demo</h1>
  <div v-text="'哈哈哈哈'" :style="{border: '1px solid #f00'}"></div>

  <ta-card
    @click.native="onCardClick"
    title="今日环境数据"
    extra="更多"
    size="small"
    arrow
    footClass="pt12 pb12">
    <template>
      <ul style="line-height: 1.8; padding-top: 12px;padding-bottom: 20px;">
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
        <li>组件鹅卵石萨里的减肥啦上课的肌肤</li>
      </ul>
    </template>

    <template #footer>
      <el-button type="primary">提交数据呀。</el-button>
      <el-button type="primary">提交数据呀。</el-button>
    </template>
  </ta-card>

</div>
</template>

<script>
export default {
  name: 'demo-package',
  methods: {
    onCardClick() {
      console.log('card click ...')
    }
  }
}
</script>

<style lang="scss" scoped>
.package-demo{
  min-height: 600px;
  padding: 24px;
  background-color: var(--background-color);
}
</style>
