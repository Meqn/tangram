# 组件文档


## 组件目录

**文件说明：**

- `index.js` : 组件列表及组件配置
- `styles.js` : 公共样式配置



**目录说明：**

```
.
|____screenshot         // 截图
| |____default.png      // 缩略图
|____index.js           // 组件安装
|____config.js          // 组件配置项
|____README.md          // 组件说明文档
|____src                // 组件源码
| |____index.vue


```



## 组件配置文件模版

> ⚠️ 备注项：
>   1. `style`配置项：配置文件经过处理后，会将`style`内的值会覆盖 `@/packages/utils/styles.js` 的值;
>   2. `setting/relation` 关联配置项。若值为Array，表示值的每一项的值都是 true；若为Object，则表示key作为值的关联属性



```js
{
  component: '组件名: layout',
  info: {
    name: '组件名称: 布局组件',
    dir: '目录名称'
  },
  setting: {
    title: {
      label: '标题',
      value: '今日环境统计',
      type: 'input',
      configurable: false,  // 是否可配置，false为不显示
      props: {
        type: 'number'
      },
      relation: {},   // [Object | Array] 关联字段。 Arry: true则显示， Object: key的值
    }
  },
  style: {},    // 公共样式默认值，会覆盖 `packages/sytles.js` 内的默认值
  slots: ['default', 'header']
}
```


转换后：


```js
{
  component: 'layout',
  info: {
    id: 'c1234567234-sf36s6f',
    dir: '目录名称',
    name: '布局组件',
    active: false
  },
  setting: {
    title: {
      label: '标题',
      value: '今日环境统计',
      type: 'input',
      configurable: false,
      props: {
        type: 'number'
      }
    },
    width: {
      label: '宽度',
      value: '300px'，
      type: 'cssInput',
      props: {
        size: 'large'
      }
    }
  },
  style: {},
  props: {
    title: '今日环境统计',
    width: '300px'
  },
  slots: ['default', 'header'],
  children: {
    'default': [],
    'header': []
  }
}
```


## props 配置文档

- `label`: 属性标题
- `value`: 默认值
- `type`: 表单控件类型 `[input, textarea, cssInput, inputNumber, select, switch, radioGroup, checkGroup, slider, timePicker, datePicker, colorPicker, colorPicker]`
- `configurable`: 是否可配置
- `props`: 控件的属性


```js
setting = {
  input: {
    label: '输入框',
    value: '默认值',
    type: 'input',
    props: {
      type: '输入框类型: text, number',
      placeholder: '占位符'
    }
  },
  textarea: {
    label: '文本域',
    value: '默认值',
    type: 'textarea',
    props: {
      placeholder: '占位符'
    }
  },
  cssInput: {
    label: 'CSS输入框',
    value: '20px',
    type: 'cssInput',
    props: {
      placeholder: '占位符',
      auto: false    // 是否可选 `auto` 值 (单位列表)
    }
  },
  inputNumber: {
    label: '计数器',
    value: '默认值',
    type: 'inputNumber',
    props: {
      min: 0, // 最大值
      max: 100, // 最小值
      step: 1,  // 计数器步长
      precision: 1,  //数值精度,
      placeholder: '占位符'
    }
  },
  select: {
    label: '下拉选择器',
    value: '默认值',
    type: 'select',
    props: {
      multiple: false, // 是否多选
      options: [
        {
          label: '',
          value: ''
        }
      ]
    }
  },
  switch: {
    label: '开关',
    value: true,  // [boolean / string / number]
    type: 'switch'
  },
  radioGroup: {
    label: '单选框',
    value: 'shanghai',
    type: 'radioGroup',
    props: {
      options: [
        {
          label: '上海',
          value: 'shanghai'
        }, {
          label: '广州',
          value: 'guangzhou'
        }, {
          label: '深圳',
          value: 'shenzhen'
        }
      ]
    }
  },
  checkGroup: {
    label: '多选框',
    value: ['shanghai'],
    type: 'checkGroup',
    props: {
      options: [
        {
          label: '上海',
          value: 'shanghai'
        }, {
          label: '广州',
          value: 'guangzhou'
        }, {
          label: '深圳',
          value: 'shenzhen'
        }
      ]
    }
  },
  slider: {
    label: '滑块',
    value: 10,
    type: 'slider',
    props: {
      min: 0,
      max: 100,
      step: 10
    }
  },
  timePicker: {
    label: '时间选择器',
    value: '',
    type: 'timePicker',
    props: {
      placeholder: '占位内容',
      'picker-options': {},
      'default-value': new Date()
    }
  },
  datePicker: {
    label: '日期选择器',
    value: '',
    type: 'datePicker',
    props: {
      type: 'date',    // date: 日期,  datetime: 日期时间, [year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange]
      placeholder: ''
    }
  },
  colorPicker: {
    label: '颜色选择器',
    value: false,
    type: 'colorPicker',
    props: {
      'show-alpha': true,
      'color-format': 'rgb'   // `[hsl, hsv, hex, rgb]`
    }
  },
  upload: {
    label: '文件上传',
    value: '',
    type: 'upload',
    props: {
      filePath: '',
      fileType: '',
      isSalt: false
    }
  }
}
```
