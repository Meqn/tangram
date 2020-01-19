<template>
  <div class="nest-wrap">
    <h1>嵌套拖拽组件</h1>
    <component :is="'el-input'" v-model="input" placeholder="请输入内容"></component>
    <div class="nest-wrap-main">
      <div class="nest-wrap-list">
        <Draggable
          :list="componentList"
          :sort="false"
          :clone="clone"
          :group="{ name: 'page', pull: 'clone', put: false }">
          <ComponentItem
            v-for="item in componentList"
            :key="item.info.id"
            :data="item" />
        </Draggable>
      </div>

      <div class="nest-wrap-body">
        
        <DragItem v-model="list" :editable="editable" />

      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import ComponentItem from './item'
import DragItem from './dragItem'
import componentData from './package/pages'
import componentList from './package/index'
import { cloneComponent } from '@/utils'

export default {
  name: 'demo-nest-drag',
  components: {
    Draggable,
    DragItem,
    ComponentItem
  },
  data () {
    return {
      componentList,
      input: '',
      list: [],
      list2: [],
      editable: true
    }
  },
  mounted () {
    console.log(cloneComponent)
    /* 
    setTimeout(() => {
      // this.$set(this.list)
      this.list.push({
        component: 'el-alert',
        info: {
          id: 'alert-111111'
        },
        props: {
          title: '成功提示的文案',
          type: 'error'
        }
      })

      setTimeout(() => {
        this.list[1].props.title = '警告提示的文案'
        this.list[1].props.type = 'success'
      }, 3000)
    }, 3000) */
  },
  methods: {
    clone (e) {
      console.log('clone : ', e, cloneComponent(e))
      /* const conf = JSON.parse(JSON.stringify(e))
      conf.info.id = 'comp-' + new Date().getTime() */
      return cloneComponent(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.nest-wrap{
  &-main{
    display: flex;
    padding: 24px;
    margin: 16px;
    border: 1px dashed #ccc;
  }
  &-list{
    width: 240px;
    background-color: #eee;
  }
  &-body{
    flex: 1;
  }
}
</style>
