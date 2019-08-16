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
        :is="'v-'+item.tagName||'div'"
        v-model="list[index]"
      ></div>
    </v-draggable>
  </div>
</template>
<script>
import vDraggable from 'vuedraggable'
import vInput, { inputData } from './form/input.vue'
import vTitle, { titleData } from './form/title.vue'
import vRadio, { radioData } from './form/radio.vue'
import vCheckbox, { checkboxData } from './form/checkbox.vue'
import vSelect, { selectData } from './form/select.vue'
import vArea, { areaData } from './form/area.vue'
import vDate, { dateData } from './form/date.vue'
import cloneDeep from 'lodash/cloneDeep'

const list = [
  titleData,
  inputData,
  dateData,
  radioData,
  checkboxData,
  selectData,
  areaData
]
export default {
  name: 'preview',
  components: { vDraggable, vInput, vTitle, vRadio, vCheckbox, vSelect, vArea, vDate },
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
      return cloneDeep(obj)
    }
  }
}
</script>
