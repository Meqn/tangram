
# Card Component



## Property

- shadow: Boolean,              // 是否有阴影 (false)
- border: Boolean,              // 是否有边框 (false)
- radius: Boolean,              // 是否有圆角 (true)
- size: `medium`                // 卡片大小 `['large', 'medium', 'small']`
- divider: Boolean,             // 是否有分隔线 (true)
- headClass: String,              // head样式类
- headStyle: [String, Object],   // head样式
- bodyClass: Object,              // body样式类
- bodyStyle: [String, Object],      // body样式
- footerClass: Object,              // 底部样式
- footStyle: [String, Object],
- title: String,
- titleColor: String,
- extra: String,                     // 头部右侧
- extraColor: String,
- arrow: Boolean,                   // 头部右侧箭头
- loading                           // 主体部分显示loading



## Slots

- default: body内容快
- header: 头部内容
  - extra: 头部右侧区域
- footer: 底部区域


## event

- `@extra`: 右侧点击事件

