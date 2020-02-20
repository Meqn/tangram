import { isInvalid } from '@/utils'

/**
 * 组件内公共样式 props
 */
const styleSetting = {
  'width': {
    type: String,
    default: ''
  },
  'height': {
    type: String,
    default: ''
  },
  'backgroundColor': {
    type: String,
    default: ''
  },
  'backgroundImage': {
    type: String,
    default: ''
  },
  'backgroundPosition': {
    type: String,
    default: ''
  },
  'backgroundSize': {
    type: String,
    default: ''
  },
  'opacity': {
    type: Number,
    default: undefined
  },
  'border': {
    type: String,
    default: ''
  },
  'paddingTop': {
    type: String,
    default: ''
  },
  'paddingBottom': {
    type: String,
    default: ''
  },
  'paddingLeft': {
    type: String,
    default: ''
  },
  'paddingRight': {
    type: String,
    default: ''
  },
  'marginTop': {
    type: String,
    default: ''
  },
  'marginBottom': {
    type: String,
    default: ''
  },
  'marginLeft': {
    type: String,
    default: ''
  },
  'marginRight': {
    type: String,
    default: ''
  },
  'position': {
    type: String,
    default: ''
  },
  'zIndex': {
    type: Number,
    default: undefined
  },
  'top': {
    type: String,
    default: ''
  },
  'bottom': {
    type: String,
    default: ''
  },
  'left': {
    type: String,
    default: ''
  },
  'right': {
    type: String,
    default: ''
  }
}

// 公共样式属性
export const styleProps = (function (conf) {
  const obj = {}
  Object.keys(conf).forEach(key => {
    obj[key] = conf[key].default
  })
  return obj
})(styleSetting)

// 公共样式
export const styleMixin = (function (conf) {
  return {
    props: conf,
    computed: {
      commStyle () {
        const obj = {}
        Object.keys(conf).forEach(key => {
          if (!isInvalid(this[key])) {
            obj[key] = this[key]
          }
        })
        return obj
      }
    }
  }
})(styleSetting)
