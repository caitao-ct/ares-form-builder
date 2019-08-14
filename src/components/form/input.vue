<template>
  <div class="flex">
    <div class="item-title">文本框</div>
    <input type="text" readonly="readonly" :value="value">
  </div>
</template>

<script>
export default {
  name: 'v-input',
  data () {
    return {
      tagName: 'vInput',
      value: '',
      name: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
