<template>
  <div id="app">
    <div class="contain">
      <form-list class="form-list"></form-list>
      <div class="form-result">
        <h1 style="text-align:center;margin-bottom:0">构建表单</h1>
        <div>
          <button @click="showSource=false" class="btnGroup" :class="{show: !showSource}">显示表单</button>
          <button @click="showSource=true" class="btnGroup" :class="{show: showSource}">生成数据</button>
         <button @click="addForm" class="btnGroup" style="margin-left: 50px">添加表单</button>
        </div>
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
  methods: {
    // 添加表单
    addForm () {
      this.sourceList.push([])
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
button{
  outline:none;
}
.btnGroup{
  background: #fff;
  height: 30px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 16px;
  margin: 5px;
  &.show{
    border: none;
    background: #2d8cf0;
    color: #fff;
  }
}
.box{
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  margin: 20px;
  height: 70vh;
  overflow: scroll;
  .item{
    margin: 10px 0;
    .item-title{
       min-width: 100px;
       padding-left: 10px;
       line-height: 30px;
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
  height: 30px;
  line-height: 30px;
}
.editImg{
    width: 20px;
    border: 5px solid transparent;
    vertical-align: middle;
  }
input[type='text'],input[type='date']{
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  padding: 5px;
  flex: 1;
  height: 30px;
  box-sizing: border-box;
}
select{
  flex: 1;
  height: 30px;
}
</style>
