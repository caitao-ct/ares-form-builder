<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="form-content">
      <img src="../assets/close.png" class="editImg closeForm" @click="closeForm(index)">
      <v-draggable
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
            <img src="../assets/delete.png" @click.stop="itemDelete(index,formIndex)" class="editImg">
          </div>
        </div>
      </v-draggable>
    </div>
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
import vArea from './form/area.vue'
import vDate from './form/date.vue'
import editModal from './editModal.vue'

export default {
  name: 'v-preview',
  components: { vDraggable, editModal, vInput, vTitle, vRadio, vCheckbox, vSelect, vArea, vDate },
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
    closeForm (index) {
      this.list.splice(index, 1)
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
    list () {
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
    top: 0;
  }
  .form-content{
    position: relative;
    .closeForm{
      position: absolute;
      right: 20px;
      top: 0;
    }
  }

</style>
