export default {
  component: 'ta-view',
  info: {
    name: '视图容器',
    dir: 'view'
  },
  setting: {
    tag: {
      label: '标签',
      value: 'div',
      type: 'select',
      props: {
        placeholder: '请选择',
        multiple: false, // 是否多选
        options: ['div', 'p', 'ul', 'li', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(v => ({ label: v, value: v }))
      }
    },
    display: {
      label: 'display',
      value: '',
      type: 'select',
      props: {
        placeholder: '请选择',
        options: ['flex', 'block', 'inline-block', 'inline'].map(v => ({ label: v, value: v }))
      },
      relation: {
        'flex': ['direction', 'wrap', 'justify', 'align']
      }
    },
    direction: {
      label: '排列方向',
      value: 'row',
      type: 'select',
      configurable: false,
      props: {
        placeholder: '请选择',
        options: [
          { label: '水平', value: 'row' },
          { label: '垂直', value: 'column' }
        ]
      }
    },
    wrap: {
      label: '容器换行',
      value: 'nowrap',
      type: 'select',
      configurable: false,
      props: {
        placeholder: '请选择',
        options: [
          { label: '单行', value: 'nowrap' },
          { label: '多行', value: 'wrap' }
        ]
      }
    },
    justify: {
      label: '主轴对齐方式',
      value: '',
      type: 'select',
      configurable: false,
      props: {
        placeholder: '请选择',
        options: ['left', 'center', 'right', 'between', 'around'].map(v => ({ label: v, value: v }))
      }
    },
    align: {
      label: '侧轴对齐方式',
      value: '',
      type: 'select',
      configurable: false,
      props: {
        placeholder: '请选择',
        options: ['top', 'middle', 'bottom', 'baseline', 'stretch'].map(v => ({ label: v, value: v }))
      }
    },
    styles: {
      label: '其他样式',
      value: '',
      type: 'textarea'
    }
  },
  slots: ['default']
}
