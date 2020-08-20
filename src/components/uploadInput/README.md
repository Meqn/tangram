# 通用上传组件

## props

- `value`: 初始值, String,
- `placeholder`: String
- `writable`: 是否可输入更新input值, Boolean, {true}
- `disabled`: Boolean, {false}
- `accept`: 文件类型限制, String, .e.g: `'image/png, image/jpeg, image/gif, image/jpg'` 或 `'.xls,.doc,.txt,.pdf'`
- `path`: 存储路径, String,
- `filename`: 文件名, String,
- `isSalt`: 是否加密, [Number, Boolean], {0}
- `fileType`: 支持上传文件类型, [String, Array],
- `fileSize`: 文件大小限制, Number,
- `progress`: 上传进度, Function


## event

- `success`
- `error`
