import { randomId, isObject, isInvalid } from '@/utils'
import { mapActions } from 'vuex'
import { styleProps } from '@/packages/utils'

/**
 * 克隆并转换 component配置文件
 * @param {Object} raw 原生数据
 * @return {Object}
 */
export function cloneComponent(raw) {
  const config = JSON.parse(JSON.stringify(raw))
  return (function convert(config) {
    const { info, setting, style, slots } = config
    // 设置 name, id, active
    if (info) {
      info.id = `component-${randomId()}`
      info.active = false
    }
    // 设置 props（含 style、setting）
    const stylePropsCopy = JSON.parse(JSON.stringify(styleProps))
    let propsObj = Object.assign({}, stylePropsCopy, style)
    if (setting) {
      for (const key in setting) {
        if (setting.hasOwnProperty(key)) {
          const elem = isObject(setting[key]) ? JSON.parse(JSON.stringify(setting[key])) : setting[key]
          propsObj[key] = elem.value
        }
      }
    }
    config.props = propsObj
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
    // remove info
    if (data.info) {
      delete data.info.id
      delete data.info.active
    }
    // remove props
    const propsData = data.props
    if (propsData) {
      // style
      const styleObj = {}
      Object.keys(styleProps).forEach(key => {
        if (!isInvalid(propsData[key])) {
          styleObj[key] = propsData[key]
        }
      })
      data.style = styleObj
      // props
      const settingData = data.setting
      if (settingData) {
        Object.keys(settingData).forEach(key => {
          settingData[key]['value'] = propsData[key]
        })
      }
    }
    delete data.props
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
 * 页面编辑混入
 * @return {Object}
 */
export const editorMixin = {
  methods: {
    ...mapActions('page', [
      'updateComponents',
      'updateCurrentComponent',
      'updatePrevComponent'
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
