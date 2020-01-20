export default {
  component: 'ta-col',
  info: {
    name: '栅格Col',
    dir: 'col'
  },
  setting: {
    span: {
      label: 'span',
      value: '',
      type: 'slider',
      props: {
        min: 0,
        max: 24
      }
    }
  },
  slots: ['default']
}
