<template>
  <div class="container">

    <Card
      title="塔机信息"
      :radiused="false"
      shadowed>
      <template slot="header">
        <div class="green">
          <app-icon name="staff"></app-icon> 
          <span class="title"> 大标题啦</span>
        </div>
        <a class="gray" href="#">更多 <app-icon name="enter" size="sm"></app-icon></a>
      </template>

      <template slot="footer">
        <md-field>
          <md-cell-item title="还剩余额2" addon="点击查看" arrow no-border />
        </md-field>
      </template>

      <md-field>
        <md-cell-item title="余额" addon="可用8000.34" arrow />
        <md-cell-item title="使用余额">
          <md-switch slot="right" v-model="open1" />
        </md-cell-item>
        <md-cell-item title="余额" addon="可用8000.34" arrow no-border>
          <div class="holder" slot="left"></div>
        </md-cell-item>
      </md-field>

    </Card>

    <Card
      title="塔机信息">
      <div class="green" slot="extra" @click="onExtra">
        详情 <app-icon name="enter" size="sm"></app-icon>
      </div>

      <md-field>
        <md-cell-item title="余额" addon="可用8000.34" arrow />
        <md-cell-item title="使用余额">
          <md-switch slot="right" v-model="open2" />
        </md-cell-item>
        <md-cell-item title="余额" addon="可用8000.34" arrow no-border>
          <div class="holder" slot="left"></div>
        </md-cell-item>
      </md-field>

    </Card>
    
  </div>
</template>

<script>
import Card from '@/components/Card/src/card.vue'
export default {
  name: 'app-card-demo',
  components: {
    Card
  },
  data () {
    return {
      open1: false,
      open2: true
    }
  },
  methods: {
    onExtra () {
      alert('extra click')
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding: 36px;
  .app-card{
    margin-bottom: 36px;
  }
}

.md-field{
  margin: 0 !important;
  padding: 0 !important;
}
</style>
