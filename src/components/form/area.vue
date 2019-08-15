<template>
  <div class="flex">
    <div class="item-title">{{vModel.title}}</div>
    <select>
      <option>省</option>
    </select>
    <select>
      <option>市</option>
    </select>
    <select>
      <option>区</option>
    </select>

  </div>
</template>
<script>
export const areaData = {
  tagName: 'area',
  title: '省市区',
  name: '',
  class: '',
  lineType: 'allLine'
}
export default {
  name: 'v-area',
  props: { value: Object },
  data () {
    return {
      vModel: this.value
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
