export default {
  component: 'ta-header',
  info: {
    name: '通用头部',
    dir: 'header'
  },
  setting: {
    title: {
      label: '标题',
      value: '数据大屏',
      type: 'input',
      props: {
        placeholder: '请填写标题'
      }
    }
  },
  style: {
    width: ''
  },
  slots: ['default', 'left', 'right']
}
