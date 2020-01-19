<template>
  <div>
    <h1>递归组件</h1>
    <div v-if="list.length > 0">
      <ListItem v-for="item in list" :key="item.title" :data="item"></ListItem>
    </div>
  </div>
</template>

<script>
import ListItem from './item'

export default {
  name: 'demo-recurse',
  components: {
    ListItem
  },
  data () {
    return {
      list: [
        {
          title: '菜单1',
          children: [
            {
              title: '菜单1-1',
              children: [
                { title: '菜单1-1-1' },
                {
                  title: '菜单1-1-2',
                  children: [
                    { title: '菜单1-1-2-1' },
                    { title: '菜单1-1-2-2' },
                    { title: '菜单1-1-2-3' },
                    { title: '菜单1-1-2-4' }
                  ]
                },
                { title: '菜单1-1-3' }
              ]
            },
            { title: '菜单1-2' },
            { title: '菜单1-3' }
          ]
        },
        { title: '菜单2' },
        { title: '菜单3' }
      ]
    }
  }
}
</script>
