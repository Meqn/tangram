export default {
  component: 'ta-header',
  info: {
    name: '通用头部',
    dir: 'header'
  },
  setting: {
    title: {
      label: '标题',
      value: '大标题',
      type: 'input',
      props: {
        placeholder: '请填写标题'
      }
    }
  },
  slots: ['default', 'left', 'right']
}
