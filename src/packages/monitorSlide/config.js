export default {
  component: 'ta-monitor-slide',
  info: {
    name: '视频监控轮播',
    dir: 'monitorSlide'
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
