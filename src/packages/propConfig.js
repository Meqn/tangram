const config = {
  cssInput: {
    label: 'CSS输入框',
    value: '20px',
    type: 'cssInput',
    props: {
      placeholder: '占位符'
    }
  },
  input: {
    label: '输入框',
    value: '输入框内容',
    type: 'input',
    props: {
      type: '输入框类型', // ['']
      placeholder: '占位符'
    }
  },
  inputNumber: {
    label: '计数器',
    value: 3,
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
    label: '选择器',
    value: 3,
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
    type: 'select'
  },
  slider: {
    label: '滑块',
    value: 10,
    type: 'select',
    props: {
      min: 0,
      max: 0,
      step: 0
    }
  },
  timePicker: {
    label: '时间选择器',
    value: '',
    type: 'timePicker',
    props: {
      placeholder: '',
      'picker-options': {}
    }
  },
  datePicker: {
    label: '日期选择器',
    value: '',
    type: 'datePicker',
    props: {
      type: 'date',
      placeholder: ''
    }
  },
  dateTimePicker: {
    label: '日期时间选择器',
    value: '',
    type: 'dateTimePicker',
    props: {
      type: 'datetime',
      placeholder: ''
    }
  },
  colorPicker: {
    label: '颜色选择器',
    value: false,
    type: 'colorPicker',
    props: {
      'show-alpha': true
    }
  }
}

export default config
