<template>
  <div>
    <h1>拖拽控件到右侧</h1>
    <v-draggable
      class="box"
      v-model="list"
      :group="{ name: 'form', pull: 'clone', put: false }"
    >
      <div
        class="item"
        v-for="item in list"
        :key="item.id"
        :is="item.tagName||'div'"
      >{{item.name}}</div>
    </v-draggable>
  </div>
</template>
<script>
import vDraggable from 'vuedraggable'

export default {
  name: 'preview',
  components: { vDraggable },
  data () {
    return {
      list: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { name: '4', key: 'fore' }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
