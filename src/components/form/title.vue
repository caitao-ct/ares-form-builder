<template>
  <div class="flex title">
    <div class="item-title">{{value}}</div>
  </div>
</template>
<script>
export default {
  name: 'v-title',
  data () {
    return {
      tagName: 'vTitle',
      lineType: 'allLine',
      value: '标题',
      name: ''
    }
  }
}
</script>
<style lang="less" scoped>
.title{
  flex: 1;
  padding-bottom: 10px;
  border-bottom: 1px solid #d1d5da;
}
</style>
