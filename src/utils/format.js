/**
 * 解析时间
 * @param date 时间格式
 */
function dateParse(date) {
  if (!date) return new Date()
  if (date instanceof Date) return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const regExp = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/
    const d = date.match(regExp)
    if (d) {
      return new Date(d[1], d[2] - 1, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, d[7] || 0)
    }
  }
  return new Date(date)
}

export function parseDate(time, fmt) {
  const format = fmt || '{y}/{m}/{d} {h}:{i}:{s}'
  let date = dateParse(time)

  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['日', '一', '二', '三', '四', '五', '六'][value]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export function restTime(endTime) {
  if (!endTime) return null
  const now = new Date().getTime()
  const end = new Date(endTime).getTime()
  const t = end - now
  if (t > 0) {
    return {
      day: Math.floor(t / (1000 * 60 * 60 * 24)),
      hour: Math.floor(t / (1000 * 60 * 60) % 24),
      minute: Math.floor(t / (1000 * 60) % 60),
      second: Math.floor(t / 1000 % 60)
    }
  }
  return 0
}
