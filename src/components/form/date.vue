<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <input type="date" class="input" readonly="readonly" :value="vModel.value" :placeholder="vModel.placeholder">
  </div>
</template>

<script>
export const dateData = {
  tagName: 'date',
  value: '',
  class: '',
  title: '日期选择框',
  lineType: 'halfLine',
  placeholder: ''
}
export default {
  name: 'v-date',
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
.input{
  flex: 1;
}
</style>
