// 随机 8位id
export function randomId() {
  return Math.floor(Math.random() * Date.now()).toString(36)
}
