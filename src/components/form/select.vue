<template>
  <div class="flex">
    <div class="item-title">下拉菜单</div>
    <select name="" id="">
      <option value="11">11</option>
      <option value="22">22</option>
      <option value="33">33</option>
    </select>
    </div>
</template>
<script>
export const selectData = {
  tagName: 'vSelect',
  value: '',
  name: '',
  lineType: 'halfLine'
}
export default {
  name: 'v-select',
  props: { value: Object },
  data () {
    return {
      vModel: this.value
    }
  }
}
</script>
<style lang="less" scoped>

</style>
