<template>
<div>
  <h1>菜单</h1>
  <ContextMenu ref="ctxMenu" @ctx-open="onMenuOpen">
    <li class="menu-item" @click.prevent="onMenuClick">当前元素</li>
    <li class="menu-item" disabled @click.prevent="onMenuClick">复制</li>
    <li class="menu-item" @click.prevent="onMenuClick">粘贴</li>
    <li class="menu-item active" @click.prevent="onMenuClick">删除</li>
    <li class="menu-item" @click.prevent="onMenuClick">全屏</li>
  </ContextMenu>
  
  <MenuWrap @contextmenu.prevent.native="$refs.ctxMenu.open($event, {name: '王六'})">哈哈哈</MenuWrap>
  
</div>
</template>

<script>
import MenuWrap from './wrap'
import { ContextMenu } from '@/components'

export default {
  name: 'contextMenu-demo',
  components: {
    MenuWrap,
    ContextMenu
  },
  methods: {
    onMenuOpen(locals) {
      console.log('open', locals)
    },
    onMenuClick (e) {
      console.log('ctxMenu : ', e)
    },
    vClick(e) {
      console.log('vue click : ', e)
    },
    eClick(e) {
      console.log('element clik : ', e)
    }
  }
}
</script>
