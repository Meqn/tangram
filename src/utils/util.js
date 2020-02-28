// 是否object类型
export function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

// 是否有效的值
export function isInvalid(arg) {
  return (arg === undefined || arg === null || arg === '' || Number.isNaN(arg))
}

// 随机 8位id
export function randomId() {
  return Math.floor(Math.random() * Date.now()).toString(36)
}

// 连接线转小驼峰
export function lineToHump(str) {
  return str.replace(/\-(\w)/g, function(all, letter) {
    return letter.toUpperCase()
  })
}

// 样式 String 转 Object
export function styleStrParse(styleStr) {
  const styleObj = {}
  const regx = /(;\n)|(\n)|(;)/ig
  const styleArr = styleStr.replace(regx, '||').split('||')
  if (styleArr.length > 0) {
    styleArr.forEach(item => {
      if (!regx.test(item) && item.indexOf(':') !== -1) {
        const itemArr = item.split(':')
        const key = lineToHump(itemArr[0].trim())
        styleObj[key] = itemArr[1].trim()
      }
    })
  }
  return styleObj
}

// 过滤无效属性，并返回新的对象
export function filterProp (obj) {
  if (isObject(obj)) {
    const result = JSON.parse(JSON.stringify(obj))
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (isInvalid(obj[key])) {
          delete result[key]
        }
      }
    }
    return result
  }
  return obj
}

/**
 * 递归删除某个数组内的值
 * @param {Array} list 数据列表
 * @param {[Object, String]} val 当前值
 */
export function removeInArray (list, val) {
  for (let i = 0; i < list.length; i++) {
    const node = list[i]
    if (node === val) {
      list.splice(i, 1)
      break
    } else {
      const children = node.children
      if (children) {
        Object.keys(children).forEach(child => {
          removeInArray(children[child], val)
        })
      }
    }
  }
}
