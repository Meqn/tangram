export default {
  component: 'ta-text',
  info: {
    name: '文本内容',
    dir: 'text',
    type: 'textarea'
  },
  setting: {
    tag: {
      label: '标签',
      value: 'span',
      type: 'select',
      props: {
        placeholder: '请选择',
        multiple: false, // 是否多选
        options: ['span', 'div', 'p', 'ul', 'li'].map(v => ({ label: v, value: v }))
      }
    },
    content: {
      label: '内容',
      value: '<span>哈哈哈 😄😄😄 吼吼吼</span>',
      type: 'input',
      props: {
        placeholder: '请填写标题'
      }
    },
    className: {
      label: '样式类名',
      value: 'text',
      type: 'input'
    },
    styles: {
      label: '自定义样式',
      value: 'background-color: #ccc;box-shadow: 0 0 5px #0f0',
      type: 'input'
    },
    fontSize: {
      label: '字体尺寸',
      value: '20px',
      type: 'input'
    },
    color: {
      label: '文本颜色',
      value: '#f00',
      type: 'input'
    }
  }
}
