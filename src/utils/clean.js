// 过滤无效属性，并返回新的对象
export function filterProp (obj) {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    const result = JSON.parse(JSON.stringify(obj))
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const el = obj[key]
        if (el === undefined || el === null || el === '' || Number.isNaN(el)) {
          delete result[key]
        }
      }
    }
    return result
  }
  return obj
}
