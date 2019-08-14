<template>
  <div class="flex">
    <div class="item-title">单选框</div>
    <div v-for="(item,index) in vModel.options" :key="index" class="content">
      <input type="radio" name="vModel.name" id="vModel">{{item.name}}
    </div>
  </div>

</template>
<script>
export const radioData = {
  tagName: 'vRadio',
  value: '',
  name: '',
  lineType: 'halfLine',
  options: [
    { id: '01', name: '选项一' },
    { id: '02', name: '选项二' }
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
.content{
  display: inline-block;
}
</style>
