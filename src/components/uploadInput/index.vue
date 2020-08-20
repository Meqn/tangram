<template>
<el-input :placeholder="placeholder" v-model="upload" :disabled="disabled || !writable">
  <template #append>
    <el-button @click="onUpload" :loading="uploading" :disabled="disabled">
      {{ uploading ? '上传中...' : '上 传' }}
    </el-button>
    <input type="file" ref="fileInput" name="file" :accept="accept" @change="handleUpload" class="el-upload__input">
  </template>
</el-input>
</template>

<script>
import { uploadFile } from '@/utils'

export default {
  name: 'upload-input',
  data () {
    return {
      uploading: false
    }
  },
  props: {
    value: String,
    placeholder: {
      type: String,
      default: 'https://'
    },
    writable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    accept: String,
    path: String,
    filename: String,
    isSalt: {
      type: [Number, Boolean],
      default: 0
    },
    fileType: [String, Array],
    fileSize: Number,
    progress: {
      type: Function,
      default () {}
    }
  },
  computed: {
    upload: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    defaults () {
      const option = {}
      this.path && (option['path'] = this.path)
      this.filename && (option['filename'] = this.filename)
      option['isSalt'] = this.isSalt
      this.fileType && (option['fileType'] = this.fileType)
      this.fileSize && (option['fileSize'] = this.fileSize)
      return option
    }
  },
  methods: {
    onUpload() {
      if (!this.uploading) {
        const fileInput = this.$refs['fileInput']
        fileInput.value = null
        fileInput.click()
      }
    },
    handleUpload(e) {
      this.uploading = true
      const files = e.target.files
      console.log('files : ', files)
    },
    clear() {
      this.upload = ''
      this.uploading = false
    }
  }
}
</script>
