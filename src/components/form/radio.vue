<template>
  <div class="flex">
    <div class="item-title">单选框</div>
    <input type="radio">选项一
    <input type="radio">选项二
  </div>

</template>
<script>
export default {
  name: 'v-radio',
  data () {
    return {
      tagName: 'vRadio',
      value: '',
      name: ''
    }
  }
}
</script>
<style lang="less" scoped>

</style>
