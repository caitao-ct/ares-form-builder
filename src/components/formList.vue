<template>
  <div>
    <h1>拖拽控件到右侧</h1>
    <v-draggable
      class="box"
      :list="list"
      :group="{ name: 'form', pull: 'clone', put: false }"
      @change="onChange"
      :clone="onClone"
    >
      <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
        :is="item.tagName||'div'"
        v-model="list[index]"
      ></div>
    </v-draggable>
  </div>
</template>
<script>
import vDraggable from 'vuedraggable'
import vInput, { inputData } from './form/input'
import vTitle, { titleData } from './form/title'
import vRadio, { radioData } from './form/radio'
import vCheckbox, { checkboxData } from './form/checkbox'
import vSelect, { selectData } from './form/select'

const list = [
  titleData,
  inputData,
  radioData,
  checkboxData,
  selectData
]
export default {
  name: 'preview',
  components: { vDraggable, vInput, vTitle, vRadio, vCheckbox, vSelect },
  data () {
    return {
      list: [...list]
    }
  },
  methods: {
    onChange () {
      this.list = [...list]
    },
    onClone (obj) {
      return Object.assign({}, obj)
    }
  }
}
</script>
