<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <div v-for="(item,index) in vModel.options" :key="index" class="content">
      <input type="checkbox" :name="vModel.name" :checked="item.checked">{{item.name}}
    </div>
  </div>
</template>

<script>
export const data = {
  tagName: 'checkbox',
  lineType: 'halfLine',
  title: '复选框',
  name: '',
  class: '',
  options: [
    { id: '01', name: '选项一', checked: false },
    { id: '02', name: '选项二', checked: false }
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
