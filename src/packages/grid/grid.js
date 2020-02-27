/**
 * 创建 grid 配置
 * @param {Array} col 默认列数
 * @param {Object} options 选项 { name, add }
 */
function create (col = [], options = {}) {
  const cols = col.map((v, k) => ({ slot: `col${k}`, value: v }))
  const { name, add } = options

  return {
    component: 'ta-grid',
    info: {
      name: name || '栅格布局',
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
        props: {
          add: add !== false
        }
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
}

export const gridConfig = create([8, 8, 8], { name: '栅格布局' })
export const grid2col = create([12, 12], { name: '一行两列', add: false })
export const grid3col = create([8, 8, 8], { name: '一行三列', add: false })
export const grid4col = create([6, 6, 6, 6], { name: '一行四列', add: false })
export const grid5col = create([3, 6, 6, 6, 3], { name: '一行五列', add: false })
export const grid6col = create([4, 4, 4, 4, 4, 4], { name: '一行六列', add: false })
