<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <select>
      <option
        :value="item.id"
        v-for="(item,index) in vModel.options"
        :key="index"
      >
        {{item.name}}
      </option>
    </select>
  </div>
</template>
<script>
export const selectData = {
  tagName: 'select',
  lineType: 'halfLine',
  title: '下拉菜单',
  name: '',
  class: '',
  options: [
    { id: '01', name: '选项一' },
    { id: '02', name: '选项二' }
  ]
}
export default {
  name: 'v-select',
  props: { value: Object },
  data () {
    return {
      vModel: this.value
    }
  }
}
</script>
<style lang="less" scoped>

</style>
