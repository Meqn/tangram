import { isInvalid, styleStringParse } from '@/utils'
import { styleSetting } from './styles'

// 公共样式
export const baseMixin = (function baseMixin (conf) {
  return {
    props: conf,
    computed: {
      pageTheme () {
        return this.$store.getters['theme'] || 'light'
      },
      commStyle () {
        const styleObj = {}
        let extStyleObj = {}
        const classKey = ['borderClass', 'extClass', 'extStyle', 'backgroundImage']
        Object.keys(conf).forEach(key => {
          if (!isInvalid(this[key]) && classKey.indexOf(key) < 0) {
            styleObj[key] = this[key]
          }
        })
        this.backgroundImage && (styleObj['backgroundImage'] = `url(${this.backgroundImage})`)
        if (this.extStyle) {
          extStyleObj = styleStringParse(this.extStyle)
        }
        return Object.assign({}, extStyleObj, styleObj)
      },
      commClass () {
        return [this.borderClass, this.extClass]
      }
    }
  }
})(styleSetting)

// 项目id mixin
export const projectIdMixin = {
  props: {
    projectId: [String, Number]
  },
  computed: {
    currentProjectId() {
      return this.projectId || this.$route.query.projectId
    }
  },
  watch: {
    currentProjectId(val) {
      typeof this.watchProjectId === 'function' && (this.watchProjectId(val))
    }
  },
  methods: {
    /**
     * 检查项目Id是否存在
     * @param {Boolean} back 是否返回上一页
     * @returns {Boolean}
     */
    checkProjectId(back) {
      if (!this.currentProjectId || this.currentProjectId === 'undefined') {
        this.$message({
          showClose: true,
          message: `未找到项目Id${back ? ', 将返回上一页' : ''}`,
          type: 'warning'
        })
        if (back) {
          setTimeout(() => {
            this.$router.go(-1)
          }, 1500)
        }
        return false
      }
      return true
    }
  }
}

// 设备id mixin
export const deviceIdMixin = {
  props: {
    deviceId: [String, Number]
  },
  computed: {
    currentDeviceId() {
      return this.deviceId || this.$route.query.deviceId
    }
  },
  watch: {
    currentDeviceId(val) {
      typeof this.watchDeviceId === 'function' && (this.watchDeviceId(val))
    }
  }
}
