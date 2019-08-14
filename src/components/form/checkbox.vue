<template>
  <div class="flex">
    <div class="item-title">复选框</div>
    <input type="checkbox">选项一
    <input type="checkbox">选项二
  </div>
</template>

<script>
export const checkboxData = {
  tagName: 'vCheckbox',
  value: '',
  name: '',
  lineType: 'halfLine'
}
export default {
  name: 'v-checkbox',
  props: {
    value: Object
  },
  data () {
    return {
      vModal: this.value
    }
  }
}
</script>

<style lang="less" scoped>

</style>
