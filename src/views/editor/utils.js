import { randomId, isObject, isInvalid } from '@/utils'
import { packages } from '@/packages'
import { mapActions } from 'vuex'
import { styleProps } from '@/packages/utils'

/**
 * 克隆并转换 component配置文件
 * @param {Object} raw 源配置数据
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
 * 清除组件脏数据（clone后的组件）
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
 * 清除模版脏数据
 * 1. 配置属性
 * 2. 组件选择状态
 */
export function cleanTemplate(template) {
  function clean(data) {
    if (data.setting) {
      Object.keys(data.setting).forEach(key => {
        const val = data.setting[key].value
        delete data.setting[key]
        data.setting[key] = {
          value: val
        }
      })
    }
    if (data.children && data.slots) {
      data.slots.forEach(slot => {
        data.children[slot].map(child => clean(child))
      })
    }
    data.info && (delete data.info.active)
    return data
  }
  return (function(template) {
    return template.map(v => clean(v))
  }(JSON.parse(JSON.stringify(template))))
}

/**
 * 模版增加配置属性
 */
export function cloneTemplate(template) {
  const components = allComponents('object')
  function convert(data) {
    let _component = components[data.component]
    data.info && (data.info.active = false)
    if (data.setting && _component) {
      Object.keys(data.setting).forEach(key => {
        data.setting[key] = Object.assign({}, _component.setting[key], data.setting[key])
      })
    }
    if (data.children && data.slots) {
      data.slots.forEach(slot => {
        data.children[slot].map(child => convert(child))
      })
    }
    return data
  }
  return (function(template) {
    return template.map(v => convert(v))
  }(template))
}

/**
 * 获取所有组件
 * @param {String} type 返回数据格式  ['array', 'object']
 */
export function allComponents(type = 'array') {
  const componentsObj = {}
  const components = packages.reduce((acc, { components }) => {
    return acc.concat(components)
  }, [])
  if (type === 'object') {
    components.forEach(v => {
      componentsObj[v.component] = v
    })
    return componentsObj
  }
  return components
}

/**
 * 模板字符串转component
 * @param {String} template 
 */
export function templateToComponent(template) {
  if (template) {
    if (Array.isArray(template)) {
      return template.map(item => {
        return cloneComponent(item)
      })
    } else if (typeof template === 'string') {
      const data = JSON.parse(template)
      if (Array.isArray(data)) {
        return data.map(item => {
          return cloneComponent(item)
        })
      }
    } else {
      return []
    }
  }
  return []
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
