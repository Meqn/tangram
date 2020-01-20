import pageCard from './pages'

export default [
  {
    component: 'el-card',
    info: {
      name: '卡片'
    },
    props: {
      shadow: 'always',
      test1: '测试属性1',
      test2: undefined,
      test3: '',
      test4: null,
      test5: NaN
    },
    slots: ['default', 'header']
  }, {
    component: 'el-button',
    info: {
      name: '按钮'
    },
    props: {
      size: 'medium',
      type: 'primary'
    }
  }, {
    component: 'el-page-header',
    info: {
      name: '页面头部'
    },
    props: {
      content: '创建新页面'
    }
  }, {
    component: 'el-slider',
    info: {
      name: '滑块'
    },
    props: {
      value: 20,
      min: 10,
      max: 100
    }
  }, {
    component: 'el-input',
    info: {
      name: '输入框'
    },
    props: {
      type: 'text',
      value: '😄哈哈哈哈哈哈哈😄',
      size: 'medium'
    }
  }, 
  ...pageCard
]
