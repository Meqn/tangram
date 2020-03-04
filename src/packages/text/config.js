export default {
  component: 'ta-text',
  info: {
    name: '文本内容',
    dir: 'text'
  },
  setting: {
    tag: {
      label: '标签',
      value: 'span',
      type: 'select',
      props: {
        placeholder: '请选择',
        multiple: false, // 是否多选
        options: ['span', 'strong', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li'].map(v => ({ label: v, value: v }))
      }
    },
    content: {
      label: '内容',
      value: '文本内容',
      type: 'textarea',
      props: {
        placeholder: '请填写内容'
      }
    },
    fontSize: {
      label: '字体尺寸',
      value: '',
      type: 'cssInput'
    },
    color: {
      label: '文本颜色',
      value: '',
      type: 'colorPicker'
    }
  }
}
