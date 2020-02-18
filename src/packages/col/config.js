export default {
  component: 'ta-col',
  info: {
    name: '栅格Col',
    dir: 'col'
  },
  setting: {
    span: {
      label: 'span',
      value: 12,
      type: 'inputNumber',
      props: {
        min: 0,
        max: 24
      }
    }
  },
  slots: ['default']
}
