export default {
  component: 'ta-card',
  info: {
    name: '卡片容器',
    dir: 'card'
  },
  setting: {
    title: {
      label: '标题',
      value: '卡片标题',
      type: 'input'
    },
    extra: {
      label: '操作文本',
      value: '',
      type: 'input',
      relation: ['arrow']
    },
    arrow: {
      label: '显示箭头',
      value: false,
      type: 'switch',
      configurable: false
    },
    size: {
      label: '卡片尺寸',
      value: '',
      type: 'select',
      props: {
        placeholder: '请选择',
        options: ['large', 'medium', 'small'].map(v => ({ label: v, value: v })),
        clearable: true
      }
    },
    shadow: {
      label: '显示阴影',
      value: false,
      type: 'switch'
    },
    border: {
      label: '显示边框',
      value: true,
      type: 'switch'
    },
    radius: {
      label: '是否圆角',
      value: false,
      type: 'switch'
    },
    divider: {
      label: '显示分隔线',
      value: true,
      type: 'switch'
    }
  },
  slots: ['default', 'footer']
}
