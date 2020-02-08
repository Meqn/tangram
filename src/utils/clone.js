import { randomId } from './random'

// 克隆并转换 component配置文件
export function cloneComponent(obj) {
  const config = JSON.parse(JSON.stringify(obj))
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

// 深拷贝
export function deepClone(obj) {
  let copy

  // Handle the 3 simple types, and null or undefined
  // eslint-disable-next-line
  if (null === obj || 'object' !== typeof obj) return obj

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = []
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {}
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = deepClone(obj[attr])
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported.")
}
