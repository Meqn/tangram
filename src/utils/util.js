// 是否object类型
export function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

// 是否Array类型
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

// 是否无效的值
export function isInvalid(arg) {
  return (arg === undefined || arg === null || arg === '' || Number.isNaN(arg))
}

// 随机 8位id
export function randomId() {
  return Math.floor(Math.random() * Date.now()).toString(36)
}

// 生成UUID
export function generateUUID() {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16)
  })
  return uuid
}

// 连接线转小驼峰
export function lineToHump(str) {
  return str.replace(/\-(\w)/g, function(all, letter) {
    return letter.toUpperCase()
  })
}

// 样式 String 转 Object
export function styleStringParse(styleStr) {
  if (!styleStr) return null
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

function getSuffix(str) {
  let last = str.split('/').pop()
  return last.indexOf('.') !== -1 ? last.split('.').pop().toLocaleLowerCase() : ''
}
// 获取文件后缀
export function fileSuffix (fileSrc) {
  if (!fileSrc) return ''
  if (typeof fileSrc !== 'string') return ''
  if (fileSrc.indexOf('.') !== -1) {
    let srcArr = fileSrc.split('?')
    if (srcArr.length > 1) {
      return getSuffix(srcArr[0]) || getSuffix(srcArr.pop())
    } else {
      return getSuffix(fileSrc)
    }
  }
  return ''
}

// 获取文件类型
export function fileType(fileSrc) {
  const files = {
    image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
    video: ['mp4', 'm3u8', 'rmvb', 'avi', '3gp', 'mkv', 'flv', 'mov']
  }
  const suffix = fileSuffix(fileSrc)
  let _type = ''
  Object.keys(files).some(v => {
    if (files[v].indexOf(suffix) > -1) {
      _type = v
      return true
    }
  })
  return _type
}

// 对象转url
export function serialize(obj) {
  let arr = []
  Object.keys(obj).forEach(key => {
    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  })
  return arr.join('&')
}

export const countdown = (function () {
  let timer = null
  return function count(num, callback) {
    typeof callback === 'function' && callback(num)
    if (num === 0) {
      clearTimeout(timer)
      timer = null
      return
    }
    num--
    timer = setTimeout(() => {
      count.call(this, num, callback)
    }, 1000)
  }
})()
