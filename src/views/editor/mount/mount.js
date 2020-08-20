import Draggable from 'vuedraggable'
import { filterProp } from '@/utils'
import { editorMixin } from '../utils'

export default {
  name: 'mount-component',
  components: {
    Draggable
  },
  mixins: [editorMixin],
  props: {
    value: {
      type: Array,
      default: null
    },
    list: {
      type: Array,
      default: null
    },
    editable: {
      type: Boolean,
      default: true
    },
    ctxMenu: {
      type: Object
    }
  },
  data () {
    return {
      drag: false
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'page',
        disabled: !this.editable,
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag'
      }
    },
    realValue () {
      return this.value ? this.value : this.list
    }
  },
  methods: {
    cleanProp (obj) {
      return filterProp(obj)
    },
    handleUpdate (value) {
      this.$emit('input', value)
    },
    onOpenMenu (event, data) {
      if (this.editable) {
        this.ctxMenu.open(event, data)
      }
    },
    onClickComponent (item) {
      // console.log('contextmenu : ', this.ctxMenu)
      if (this.editable) {
        this.compareElement(item)
      }
    },
    onChange (evt) {
      console.log('onChange ... ', evt)
      if (evt.added && evt.added.element) {
        console.log('增加 ... ', evt.added.element)
        const element = evt.added.element
        this.compareElement(element)
      }
      if (evt.moved && evt.moved.element) {
        console.log('移动...', evt.moved.element)
        const element = evt.moved.element
        this.compareElement(element)
      }
      if (evt.removed) {
        console.log('移除 ... ', evt.removed.element)
      }
    }
  }
}
