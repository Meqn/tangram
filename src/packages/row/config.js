export default {
  component: 'ta-row',
  info: {
    name: '栅格Row',
    dir: 'row'
  },
  setting: {
    justify: {
      label: '横轴排列',
      value: '',
      type: 'select',
      props: {
        options: ['start', 'end', 'center', 'space-around', 'space-between'].map(v => ({ label: v, value: v }))
      }
    },
    align: {
      label: '纵轴排列',
      value: '',
      type: 'select',
      props: {
        options: ['top', 'middle', 'bottom'].map(v => ({ label: v, value: v }))
      }
    }
  },
  slots: ['default']
}
