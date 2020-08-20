/**
 * 组件内公共样式 props
 */
export const styleSetting = {
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
  'backgroundRepeat': {
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
  },
  'borderClass': {
    type: String,
    default: ''
  },
  'extClass': {
    type: String,
    default: ''
  },
  'extStyle': {
    type: String,
    default: ''
  },
}

export const colors = {
  gray: ['var(--gray-color)', 'var(--gray-light-color)'],
  red: ['var(--red-color)', 'var(--red-light-color)'],
  blue: ['var(--blue-color)', 'var(--blue-light-color)'],
  green: ['var(--green-color)', 'var(--green-light-color)'],
  orange: ['var(--orange-color)', 'var(--orange-light-color)'],
  yellow: ['var(--yellow-color)', 'var(--yellow-light-color)'],
  pink: ['var(--pink-color)', 'var(--pink-light-color)'],
}

// 公共样式属性
export const styleProps = (function (conf) {
  const styleObj = {}
  Object.keys(conf).forEach(key => {
    styleObj[key] = conf[key].default
  })
  return styleObj
})(styleSetting)
