
const components = [
  {
    component: 'el-card',
    info: {
      name: '布局页面'
    },
    props: {
      shadow: 'always'
    },
    children: {
      default: [
        {
          component: 'el-button',
          info: {
            id: 'btn-111111'
          },
          props: {
            size: 'medium',
            type: 'primary'
          }
        }
      ],
      header: [
        {
          component: 'el-button',
          info: {
            id: 'btn-22222'
          },
          props: {
            size: 'mini',
            type: 'warning'
          }
        }, {
          component: 'el-page-header',
          info: {
            id: 'page-11111'
          },
          props: {
            content: '创建新页面'
          }
        }
      ]
    }
  }
]

export default components
