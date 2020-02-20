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
      <DragItem class="ta-drag-wrap" v-model="components" :editable="editable" :ctxMenu="$refs.ctxMenu" />
    </div>

    <ContextMenu ref="ctxMenu" @ctx-open="onMenuOpen">
      <li v-if="currentComponent && currentComponent.info" class="menu-item active">
        <i class="menu-icon el-icon-s-grid"></i>
        {{ currentComponent.info.name }}
      </li>
      <li class="menu-item" disabled @click.prevent="onMenuClick"><i class="menu-icon el-icon-document-copy"></i>复制</li>
      <li class="menu-item"
        v-if="currentComponent && currentComponent.slots && currentComponent.slots.length > 0"
        @click.prevent="onMenuClick">
        <i class="menu-icon el-icon-brush"></i>粘贴
      </li>
      <li class="menu-item" @click.prevent="onMenuDelete"><i class="menu-icon el-icon-delete"></i>删除</li>
      <li class="menu-item" @click.prevent="onMenuExport"><i class="menu-icon el-icon-printer"></i>导出</li>
      <li class="menu-item" @click.prevent="onFullScreen"><i class="menu-icon el-icon-monitor"></i>{{ isFullScreen ? '退出全屏' : '全屏' }}</li>
    </ContextMenu>

    <el-dialog :visible.sync="dialogComponentSource" center :show-close="false">
      <el-row slot="title" type="flex" justify="space-between">
        <span class="el-dialog__title">配置信息</span>
        <div>
          <el-button type="primary" size="small" icon="el-icon-document-copy" @click="onCopyCode">复 制</el-button>
          <el-button size="small" @click="dialogComponentSource = false">关 闭</el-button>
        </div>
      </el-row>

      <pre style="height: 50vh">{{ componentSource }}</pre>
    </el-dialog>
  </div>
</template>

<script>
import DragItem from './dragItem'
import { fullScreen, isFullScreen, removeInArray } from '@/utils'
import { editorMixin, cleanComponent } from '../utils'
import ContextMenu from '@/components/contextMenu'

export default {
  name: 'editor-main',
  components: {
    DragItem,
    ContextMenu
  },
  mixins: [editorMixin],
  data () {
    return {
      mode: 'edit',
      editable: true,
      isFullScreen: isFullScreen(),
      dialogComponentSource: false,
      componentSource: '😂哈哈哈'
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
    },
    currentComponent () {
      return this.$store.state.page.currentComponent
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
    onReset (evt) {
      this.updateComponents([])
      this.updateCurrentComponent(null)
      this.updatePrevComponent(null)
    },
    onFullScreen (e) {
      this.isFullScreen = !this.isFullScreen
      fullScreen(e)
    },
    onSave () {
      console.log('save : ', this.components)
    },
    onMenuOpen(locals) {
      this.compareElement(locals)
    },
    onMenuClick (e) {
      console.log('menu : ', e)
    },
    onMenuDelete (e) {
      removeInArray(this.components, this.currentComponent)
      this.updateCurrentComponent(null)
      this.updatePrevComponent(null)
    },
    onMenuExport (e) {
      console.log(cleanComponent(this.currentComponent))
      this.dialogComponentSource = true
      this.componentSource = cleanComponent(this.currentComponent)
    },
    onCopyCode() {
      this.$copyText(JSON.stringify(this.componentSource)).then(e => {
        this.$message({
          message: 'Copied',
          type: 'success'
        })
      }, e => {
        this.$message.error('Can not copy')
      })
    }
  }
}
</script>
