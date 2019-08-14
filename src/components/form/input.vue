<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <input type="text" class="input" readonly="readonly" :value="vModel.value" :placeholder="vModel.placeholder">
  </div>
</template>

<script>
export const inputData = {
  tagName: 'vInput',
  value: '',
  title: '文本框',
  lineType: 'halfLine',
  placeholder: ''
}
export default {
  name: 'v-input',
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
