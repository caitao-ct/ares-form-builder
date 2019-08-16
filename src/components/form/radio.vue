<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <div v-for="(item,index) in vModel.options" :key="index" class="content">
      <input type="radio" :name="vModel.name" :checked="item.checked">{{item.name}}
    </div>
  </div>

</template>
<script>
export const radioData = {
  tagName: 'radio',
  lineType: 'halfLine',
  title: '单选框',
  name: '',
  class: '',
  options: [
    { id: '01', name: '选项一', checked: false },
    { id: '02', name: '选项二', checked: false }
  ]
}
export default {
  name: 'v-radio',
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
