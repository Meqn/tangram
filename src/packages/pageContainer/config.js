export default {
  component: 'ta-page-container',
  info: {
    name: '页面容器',
    dir: 'pageContainer'
  },
  setting: {
    mode: {
      label: '主题模式',
      value: 'light',
      type: 'radioGroup',
      props: {
        options: [
          {
            label: '浅色',
            value: 'light'
          }, {
            label: '深色',
            value: 'dark'
          }
        ]
      }
    }
  },
  slots: ['default']
}
