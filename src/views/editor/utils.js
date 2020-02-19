import { randomId } from '@/utils'
import { mapActions } from 'vuex'

/**
 * 克隆并转换 component配置文件
 * @param {Object} raw 原生数据
 * @return {Object}
 */
export function cloneComponent(raw) {
  const config = JSON.parse(JSON.stringify(raw))
  return (function convert(config) {
    const { info, setting, slots } = config
    // 设置 name, id, active
    if (info) {
      info.id = `component-${randomId()}`
      info.active = false
    }
    // 设置 props
    if (setting) {
      const props = {}
      for (const key in setting) {
        if (setting.hasOwnProperty(key)) {
          const el = typeof setting[key] === 'object' ? JSON.parse(JSON.stringify(setting[key])) : setting[key]
          props[key] = el.value
        }
      }
      config.props = props
    }
    // 设置 children
    if (slots) {
      if (config.children) {
        const children = config.children
        slots.forEach(slot => {
          if (children[slot]) {
            children[slot].map(node => convert(node))
          } else {
            children[slot] = []
          }
        })
      } else {
        const children = {}
        slots.forEach(slot => {
          children[slot] = []
        })
        config.children = children
      }
    }
    return config
  })(config)
}

/**
 * 清除组件的脏数据（clone后的组件）
 * @param {Object} component 组件数据
 * @return {Object}
 */
export function cleanComponent(component) {
  return (function clean(data) {
    if (data.info) {
      delete data.info.id
      delete data.info.active
    }
    // const children = data.children
    if (data.children && data.slots) {
      data.slots.forEach(slot => {
        data.children[slot].map(child => clean(child))
      })
    }
    return data
  })(JSON.parse(JSON.stringify(component)))
}

/**
 * 递归删除某个数组内的值
 * @param {Array} list 数据列表
 * @param {[Object, String]} val 当前值
 */
export function removeInArray (list, val) {
  for (let i = 0; i < list.length; i++) {
    const node = list[i]
    if (node === val) {
      list.splice(i, 1)
      break
    } else {
      const children = node.children
      if (children) {
        Object.keys(children).forEach(child => {
          removeInArray(children[child], val)
        })
      }
    }
  }
}

/**
 * 页面编辑混入
 * @return {Object}
 */
export const editorMixin = {
  methods: {
    ...mapActions('page', [
      'updateComponents',
      'updateCurrentComponent',
      'updatePrevComponent',
      'deleteComponent'
    ]),
    // 设置当前选择组件（含拖拽、右键、点击 操作）
    compareElement (newEle) {
      try {
        const oldEle = this.$store.state.page.currentComponent
        const prevEle = this.$store.state.page.prevComponent
        if (newEle !== oldEle) {
          prevEle && (prevEle.info.active = false)
          oldEle && (oldEle.info.active = false)
          newEle.info.active = true
          
          this.updateCurrentComponent(newEle)
          this.updatePrevComponent(oldEle)
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}
