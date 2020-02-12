<template>
  <div class="ta-edit-main">
    <header class="ta-edit-main-header">
      <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="edit">编辑(E)</el-radio-button>
        <el-radio-button label="view">视图(V)</el-radio-button>
        <el-radio-button label="code">源码(C)</el-radio-button>
        <el-radio-button label="style">样式(S)</el-radio-button>
      </el-radio-group>
      <div class="handle-group">
        <el-link icon="el-icon-refresh-left">撤销</el-link>
        <el-link icon="el-icon-delete" @click="onReset">清空</el-link>
        <el-link icon="el-icon-folder-checked" @click="onSave">保存</el-link>
        <el-link icon="el-icon-view">预览</el-link>
        <el-link icon="el-icon-monitor" @click="onFullScreen">{{ isFullScreen ? '退出' : '全屏' }}</el-link>
      </div>
    </header>
    <div class="ta-edit-main-body">
      <!-- <div style="width: 3200px; height: 2000px; background-color: rgba(255, 0 , 0, .5)"></div> -->
      <!-- =
      <ta-row :gutter="24">
        <ta-col>
          <ta-staff />
        </ta-col>
        <ta-col>
          <ta-environment />
        </ta-col>
        <ta-col>
          <ta-elevator />
        </ta-col>
        <ta-col>
          <ta-tower-crane />
        </ta-col>
        <ta-col>
          <ta-monitor-slide />
        </ta-col>
      </ta-row>
      <el-row type="flex" class="row-bg" :gutter="24" justify="space-between" align="middle">
        <el-col :span="8" class="grid-content">1</el-col>
        <el-col :span="null" class="grid-content">2</el-col>
        <el-col class="grid-content">3</el-col>
      </el-row>
      -->
      <DragItem class="ta-drag-wrap" v-model="components" :editable="editable" :ctxMenu="$refs.contextMenu" />
    </div>
    <footer class="ta-edit-main-footer"></footer>
    <ContextMenu ref="contextMenu">
      <template v-slot:default="item">
        <li><a @click.prevent="onMenuClick(item.data)">当前元素</a></li>
        <li><a @click.prevent="onMenuClick">复制</a></li>
        <li><a @click.prevent="onMenuClick">粘贴</a></li>
        <li><a @click.prevent="onMenuClick">删除</a></li>
        <li><a @click.prevent="onMenuClick">全屏</a></li>
      </template>
    </ContextMenu>
  </div>
</template>

<script>
import DragItem from './dragItem'
import { mapActions } from 'vuex'
import { fullScreen, isFullScreen } from '@/utils'
import ContextMenu from 'vue-context'
import 'vue-context/src/sass/vue-context.scss'
// @contextmenu.prevent.native="$refs.contextMenu.open($event)"

export default {
  name: 'editor-main',
  components: {
    DragItem,
    ContextMenu
  },
  data () {
    return {
      mode: 'edit',
      editable: true,
      isFullScreen: isFullScreen()
    }
  },
  computed: {
    components: {
      get () {
        return this.$store.state.page.components
      },
      set (val) {
        this.updateComponents(val)
      }
    }
  },
  watch: {
    mode (newVal) {
      const handles = {
        // 编辑模式
        edit: () => {
          this.editable = true
        },
        // 预览模式
        view: () => {
          this.editable = false
        },
        // 源码模式
        code: () => {
          this.editable = false
          console.log('源码模式')
        },
        // 样式模式
        style: () => {
          this.editable = false
          console.log(' 编写样式')
        }
      }
      handles[newVal] && handles[newVal]()
    }
  },
  methods: {
    ...mapActions('page', [
      'updateComponents'
    ]),
    onReset (evt) {
      this.updateComponents([])
    },
    onFullScreen (e) {
      this.isFullScreen = !this.isFullScreen
      fullScreen(e)
    },
    onSave () {
      console.log(this.components)
    },
    onMenuClick (e) {
      console.log('menu : ', e)
    }
  }
}
</script>
