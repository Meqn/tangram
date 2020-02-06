export default {
  component: 'ta-staff',
  info: {
    name: '人员管理',
    dir: 'staff'
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