<template>
  <div
    :class="[
      'app-flex',
      direction ? `app-flex-dir-${direction}` : '',
      wrap ? `app-flex-${wrap}` : '',
      justify ? `app-flex-justify-${justify}` : '',
      align ? `app-flex-align-${align}` : ''
    ]"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'app-flex',
  props: {
    direction: {
      type: String,
      validator(val) {
        return ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(val.toLocaleLowerCase()) !== -1
      }
    },
    wrap: {
      type: String,
      validator(val) {
        return ['nowrap', 'wrap', 'wrap-reverse'].indexOf(val.toLocaleLowerCase()) !== -1
      }
    },
    justify: {
      type: String,
      validator(val) {
        return ['start', 'center', 'end', 'between', 'around'].indexOf(val.toLocaleLowerCase()) !== -1
      }
    },
    align: {
      type: String,
      validator(val) {
        return ['start', 'center', 'end', 'stretch', 'baseline'].indexOf(val.toLocaleLowerCase()) !== -1
      }
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss">
.app-flex{
  box-sizing: border-box;
  display: flex;
  text-align: left;
  align-items: center;
  
  &-dir{
    &-row{
      flex-direction: row;
    }
    &-row-reverse{
      flex-direction: row-reverse;
    }
    &-column{
      flex-direction: column;
    }
    &-column-reverse{
      flex-direction: column-reverse;
    }
  }

  &-nowrap{
    flex-wrap: nowrap;
  }
  &-wrap{
    flex-wrap: wrap;
  }
  &-wrap-reverse{
    flex-wrap: wrap-reverse;
  }

  &-justify{
    &-start{
      justify-content: flex-start;
    }
    &-end{
      justify-content: flex-end;
    }
    &-center{
      justify-content: center;
    }
    &-between{
      justify-content: space-between;
    }
    &-around{
      justify-content: space-around;
    }
  }

  &-align{
    &-start{
      align-items: flex-start;
    }
    &-end{
      align-items: flex-end;
    }
    &-center{
      align-items: center;
    }
    &-stretch{
      align-items: stretch;
    }
    &-baseline{
      align-items: baseline;
    }
  }

  &-align-content{
    &-start{
      align-content: flex-start;
    }
    &-end{
      align-content: flex-end;
    }
    &-center{
      align-content: center;
    }
    &-between{
      align-content: space-between;
    }
    &-around{
      align-content: space-around;
    }
    &-stretch{
      align-content: stretch;
    }
  }

  &-item{
    box-sizing: border-box;
    flex: 1 1 0%;
  }
}
</style>
