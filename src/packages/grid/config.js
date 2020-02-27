const cols = [4, 4, 4, 4, 4, 4].map((v, k) => ({ slot: `col${k}`, value: v }))

export default {
  component: 'ta-grid',
  info: {
    name: '栅格布局',
    dir: 'grid'
  },
  setting: {
    gutter: {
      label: '栅格间隔',
      value: '',
      type: 'inputNumber'
    },
    col: {
      label: '列配置项 (24栅格)',
      value: cols,
      type: 'grid',
      /* props: {
        add: false
      } */
    },
    justify: {
      label: '水平排列方式',
      value: '',
      type: 'select',
      props: {
        placeholder: '请选择',
        options: ['start', 'end', 'center', 'space-around', 'space-between'].map(v => ({ label: v, value: v })),
        clearable: true
      }
    },
    align: {
      label: '垂直排列方式',
      value: '',
      type: 'select',
      props: {
        placeholder: '请选择',
        options: ['top', 'middle', 'bottom'].map(v => ({ label: v, value: v })),
        clearable: true
      }
    },
    rowTag: {
      label: 'row元素标签',
      value: '',
      type: 'select',
      props: {
        placeholder: '请选择',
        options: ['div', 'p', 'ul', 'li', 'span'].map(v => ({ label: v, value: v })),
        clearable: true
      }
    },
    colTag: {
      label: 'col元素标签',
      value: '',
      type: 'select',
      props: {
        placeholder: '请选择',
        options: ['div', 'p', 'ul', 'li', 'span'].map(v => ({ label: v, value: v })),
        clearable: true
      }
    }
  },
  slots: cols.map(v => v.slot)
}
