
# 视图容器


## props

1. flex布局
2. border
3. 标签
4. //


tag
display
content
fontSize
color
styles



排列方向
主轴对齐方式
侧轴对齐方式








**使用：**

```html
<app-flex>
  <span class="icon">图标</span>
  <app-flex-item></app-flex-item>
  <app-flex-item></app-flex-item>
  <div class="right"></div>
</app-flex>
```


## app-flex

### Props
- `direction` : 方向 `['row', 'row-reverse', 'column', 'column-reverse']`
- `wrap` : 是否换行 `['nowrap', 'wrap', 'wrap-reverse']`
- `justify` : 主轴（横轴）方向上的对齐方式 `['start', 'center', 'end', 'between', 'around']`
- `align` : 侧轴（纵轴）方向上的对齐方式 `['start', 'center', 'end', 'stretch', 'baseline']`

