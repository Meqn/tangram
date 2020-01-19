
const components = [
  {
    component: 'el-card',
    info: {
      name: '容器'
    },
    setting: {
      shadow: {
        label: '阴影',
        value: 'always',
        type: 'select',
        props: {
          options: [
            {
              value: 'always',
              label: 'always'
            }, {
              value: 'hover',
              label: 'hover'
            }, {
              value: 'never',
              label: 'never'
            }
          ]
        }
      }
    },
    children: {
      default: [
        {
          component: 'el-card',
          info: {
            name: '布局',
          },
          children: {
            default: [
              {
                component: 'el-button',
                info: {
                  name: '按钮'
                },
                slots: ['default']
              }, {
                component: 'el-badge',
                info: {
                  name: '标记'
                },
                children: {
                  default: [
                    {
                      component: 'el-button',
                      info: {
                        name: '按钮'
                      },
                      slots: ['default']
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      header: [
        {
          component: 'el-input',
          info: {
            name: '输入框'
          },
          setting: {
            label: {
              label: '阴影',
              value: 'always',
              type: 'select'
            }
          },
          slots: ['prefix', 'append']
        }
      ]
    }
  }
]

export default components
