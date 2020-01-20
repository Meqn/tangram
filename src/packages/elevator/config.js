export default {
  component: 'ta-elevator',
  info: {
    name: '升降机',
    dir: 'elevator'
  },
  setting: {
    title: {
      label: '标题',
      value: '升降机',
      type: 'input',
      props: {
        placeholder: '请填写标题'
      }
    }
  },
  slots: ['default']
}
