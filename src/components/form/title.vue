<template>
  <div class="flex title">
    <div class="item-title">{{vModal.title}}</div>
  </div>
</template>
<script>
export const data = {
  tagName: 'title',
  lineType: 'allLine',
  title: '标题',
  class: ''
}
export default {
  name: 'v-title',
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
.title{
  flex: 1;
  padding-bottom: 10px;
  border-bottom: 1px solid #565d66;
}
</style>
