<template>
<div>
  <button @click="addForm">添加表单</button>
  <v-draggable
      v-for="(item,index) in list"
      :key="index"
      class="box"
      v-model="list[index]"
      group="form"
    >
      <div
        class="item"
        v-for="(formItem,formIndex) in item"
        :key="formIndex"
        :is="formItem.tagName||'div'"
        @click="itemClick(formIndex)"
      >{{formItem.name}}</div>
    </v-draggable>
</div>
</template>

<script>
import vDraggable from 'vuedraggable'

export default {
  name: 'v-preview',
  components: { vDraggable },
  props: {
    value: Array
  },
  data () {
    return {
      list: this.value
    }
  },
  methods: {
    addForm () {
      this.list.push([])
    },
    itemClick (index) {
      console.log(index)
    }
  },
  watch: {
    list (newValue) {
      this.$emit('input', this.list)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
