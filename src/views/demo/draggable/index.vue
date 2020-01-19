<template>
  <div>
    <h1>Vue.Draggable</h1>
    <div class="demo-wrap">
      <draggable tag="section" v-model="list" @start="drag=true" @end="drag=false">
        <!-- <transition-group type="transition" name="flip-list"> -->
        <template v-for="item in list" >
          <div v-if="item.name !== 'based'" :class="['item', { 'active': item.actived } ]" :key="item.id" @click.stop="handleSelect(item)">{{item.name}}</div>
          <div v-else :class="['item', { 'active': item.actived } ]" :key="item.id" @click.stop="handleSelect(item)">
            <div>{{item.name}}</div>
            <div style="padding: 8px; background-color:#ddd;">哈哈哈哈😂😂😂</div>
          </div>
        </template>
        <!-- </transition-group> -->
      </draggable>
    </div>
    
    <div style="margin-top: 50px; padding: 24px; border: 1px solid #f00">
      <draggable tag="el-collapse" :list="list" :component-data="getComponentData()">
          <el-collapse-item v-for="e in list" :title="e.name" :name="e.name" :key="e.name">
              <div>{{e.name}}</div>
          </el-collapse-item>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const lists = [
  'vue.draggable',
  'draggable',
  'component',
  'for',
  'vue.js 2.0',
  'based',
  'on',
  'Sortablejs'
]

export default {
  name: 'demo-draggable',
  components: {
    draggable
  },
  data () {
    return {
      list: lists.map((v, k) => ({ name: v, id: k + 1 })),
      drag: true,
      currentKey: null,
      prevKey: null
    }
  },
  methods: {
    handleSelect(item) {
      // item.actived = true
      if (this.currentKey) {
        this.$set(this.currentKey, 'actived', false)
        this.prevKey = this.currentKey
      }
      this.$set(item, 'actived', true)
      this.currentKey = item
    },
    handleChange() {
      console.log('changed')
    },
    inputChanged(value) {
      this.activeNames = value
    },
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        attrs: {
          wrap: true
        },
        props: {
          value: this.activeNames
        }
      }
    }
  }
}
</script>

<style lang="scss">
.demo-wrap{
  .item{
    padding: 12px;
    margin: 12px;
    border: 2px dashed rgb(21, 180, 0);
  }
  .active{
    border-color: rgb(240, 0, 180);
  }
  .sortable-ghost{
    opacity: .4;
  }
  .sortable-chosen{
    border-color: #f00;
  }
  .sortable-drag{
    border-color: rgb(0, 110, 255);
  }
}

.flip-list-move {
  transition: transform 0.5s;
}

</style>
