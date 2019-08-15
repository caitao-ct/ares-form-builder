<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <div v-for="(item,index) in vModel.options" :key="index" class="content">
      <input type="checkbox" name="vModel.name" id="vModel">{{item.name}}
    </div>
  </div>
</template>

<script>
export const checkboxData = {
  tagName: 'checkbox',
  title: '复选框',
  name: '',
  lineType: 'halfLine',
  options: [
    { id: '01', name: '选项一' },
    { id: '02', name: '选项二' }
  ]
}
export default {
  name: 'v-checkbox',
  props: {
    value: Object
  },
  data () {
    return {
      vModel: this.value
    }
  }
}
</script>

<style lang="less" scoped>

</style>
