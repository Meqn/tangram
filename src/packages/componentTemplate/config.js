const config = {
  name: '组件模版',
  component: 'component-template',
  slots: ['default', 'header'],
  config: {
    title: {
      label: '标题',
      value: '演示组件', // [null, undefined, '', '属性值']
      type: 'input'
    },
    price: {
      label: '价格',
      value: 'input:number',
      type: 'input:string'
    },
    width: {
      label: '宽度',
      value: '20;px',
      type: 'input:css'
    }
  }
}

export default config
