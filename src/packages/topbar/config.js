export default {
  component: 'ta-topbar',
  info: {
    name: '头部通栏',
    dir: 'topbar'
  },
  setting: {
    title: {
      label: '标题',
      value: '筑安科技数据大屏',
      type: 'input',
      props: {
        placeholder: '请填写标题'
      }
    }
  },
  slots: ['default']
}
