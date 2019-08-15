<template>
  <div id="app">
    <div class="contain">
      <form-list class="form-list"></form-list>
      <div class="form-result">
        <h1 style="text-align:center">构建表单</h1>
        <button @click="showSource=false">显示表单</button>
        <button @click="showSource=true">生成数据</button>
        <v-preview v-model="sourceList" v-show="!showSource"></v-preview>
        <v-source :value="sourceList" v-show="showSource"></v-source>
      </div>
    </div>
  </div>
</template>

<script>
import formList from './components/formList.vue'
import vPreview from './components/preview.vue'
import vSource from './components/source.vue'

export default {
  name: 'app',
  data () {
    return {
      sourceList: [[]],
      showSource: false
    }
  },
  components: {
    formList,
    vPreview,
    vSource
  }
}
</script>

<style lang="less">
.box{
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  margin: 10px;
  height: 70vh;
  .item{
    margin: 20px 0;
    .item-title{
       min-width: 100px;
    }
  }
}
.contain{
  display: flex;
  .form-list{
    width: 30%;
  }
  .form-result{
    flex: 1;
    height: 100vh;
    overflow: scroll;
  }
}
.flex{
  display: flex;
}
.content{
  display: inline-block;
  min-width: 100px;
}
</style>
