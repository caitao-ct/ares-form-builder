<template>
  <input type="text" readonly="readonly" :value="value">
</template>
<script>
export default {
  name: 'v-input',
  data () {
    return {
      tagName: 'vInput',
      value: '',
      name: 'haha'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
