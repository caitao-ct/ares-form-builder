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
      ></div>
    </v-draggable>
  </div>
</template>
<script>
import vDraggable from 'vuedraggable'
import vInput from './form/input'
import vTitle from './form/title'
import vRadio from './form/radio'
import vCheckbox from './form/checkbox'
import vSelect from './form/select'

const list = [
  vTitle.data(),
  vInput.data(),
  vRadio.data(),
  vCheckbox.data(),
  vSelect.data()
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
