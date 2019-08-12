<template>
  <div>
    <draggable
      class="box"
      v-model="myArray"
      :group="{ name: 'people', pull: 'clone', put: false }"
    >
      <div
        class="item"
        v-for="element in myArray"
        :key="element.id"
      >{{element.name}}</div>
    </draggable>
    <div style="height: 50px"></div>
    <draggable
      class="box"
      v-model="myArray2"
      group="people"
      @change="change"
    >
      <div
        class="item"
        v-for="(item,index) in myArray2"
        @click="itemClick(index)"
        :key="index"
      >{{item.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import VInput from './input'
export default {
  name: 'HelloWorld',
  components: { draggable },
  data () {
    return {
      myArray: [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { name: '4', key: 'fore' },
        VInput.data()
      ],
      myArray2: [
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' }
      ]
    }
  },
  methods: {
    change () {
      console.log(this.myArray2)
      console.log(VInput.data())
    },
    itemClick (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped lang="less">
.box{
  padding: 10px;
  border: 1px solid red;
  display: flex;
  .item{
    border: 1px solid black;
    width: 50%;
  }
}
</style>
