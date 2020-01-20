export default {
  component: 'ta-environment',
  info: {
    name: '环境监测',
    dir: 'environment'
  },
  setting: {
    title: {
      label: '标题',
      value: '环境监测',
      type: 'input',
      props: {
        placeholder: '请填写标题'
      }
    }
  },
  slots: ['default']
}
