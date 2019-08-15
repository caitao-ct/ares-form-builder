<template>
  <div>
    <button @click="addForm">添加表单</button>
    <v-draggable
        v-for="(item,index) in list"
        :key="index"
        class="box"
        v-model="list[index]"
        group="form"
      >
        <div
          class="item"
          :class="formItem.lineType"
          v-for="(formItem,formIndex) in item"
          :key="formIndex"
          @click.prevent="itemEdit(formItem,formIndex,index)"
        >
          <div :is="'v-'+formItem.tagName||'div'" v-model="item[formIndex]" style="overflow: hidden"></div>
          <div class="operation">
            <button @click.stop="itemDelete(index,formIndex)">删除</button>
          </div>
        </div>
      </v-draggable>
      <edit-modal v-model="modalModel" v-if="isShowModal" @confirm="onConfirm"></edit-modal>
  </div>
</template>

<script>
import vDraggable from 'vuedraggable'
import vInput from './form/input.vue'
import vTitle from './form/title.vue'
import vRadio from './form/radio.vue'
import vCheckbox from './form/checkbox.vue'
import vSelect from './form/select.vue'
import editModal from './editModal.vue'

export default {
  name: 'v-preview',
  components: { vDraggable, editModal, vInput, vTitle, vRadio, vCheckbox, vSelect },
  props: {
    value: Array
  },
  data () {
    return {
      list: this.value,
      isShowModal: false,
      modalModel: {}
    }
  },
  methods: {
    // 添加表单
    addForm () {
      this.list.push([])
    },
    // 编辑表单
    itemEdit (item, formIndex, index) {
      console.log(item, formIndex, index)
      // this.list[index][formIndex]['value'] = 2
      this.modalModel = item
      this.isShowModal = true
    },
    // 删除其中一条
    itemDelete (index, formIndex) {
      let currentList = this.list[index]
      currentList.splice(formIndex, 1)
      this.list[index] = currentList
    },
    onConfirm () {
      this.isShowModal = false
    }
  },
  watch: {
    list (newValue) {
      this.$emit('input', this.list)
    }
  }
}
</script>

<style lang="less" scoped>
  .item{
    display: inline-block;
    width: 50%;
    position: relative;
  }
  .allLine{
    width: 100%;
  }
  .operation{
    position: absolute;
    right: 10px;
    top: -20px;
  }
</style>
