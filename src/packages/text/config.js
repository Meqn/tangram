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
        options: ['span', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li'].map(v => ({ label: v, value: v }))
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
    className: {
      label: '样式类名',
      value: 'text',
      type: 'input'
    },
    fontSize: {
      label: '字体尺寸',
      value: '20px',
      type: 'cssInput'
    },
    color: {
      label: '文本颜色',
      value: '#f00',
      type: 'colorPicker'
    },
    styles: {
      label: '其他样式',
      value: 'background-color: #ccc;box-shadow: 0 0 5px #0f0',
      type: 'textarea'
    }
  }
}
