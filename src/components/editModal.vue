<template>
  <div class="modal">
      <div class="modal-contain">
        <div class="modal-title">编辑属性</div>
        <div>
          <span>标题名</span>
          <input type="text" v-model="vModel.title">
        </div>
        <div v-if="vModel.tagName==='vInput'">
          <span>默认值</span>
          <input type="text" v-model="vModel.value">
        </div>
        <div v-if="vModel.tagName==='vInput'">
          <span>提示文字</span>
          <input type="text" v-model="vModel.placeholder">
        </div>
        <div v-if="vModel.tagName!=='vTitle'">
          <span>占据类型</span>
          <input type="radio" id="halfLine" name="lineType" v-model="vModel.lineType" value="halfLine"><label for="halfLine">占据半行</label>
          <input type="radio" id="allLine" name="lineType" v-model="vModel.lineType" value="allLine"><label for="allLine">占据整行</label>
        </div>
        <div>
          <span>class</span>
          <input type="text" v-model="vModel.class">
        </div>
        <div v-if="vModel.tagName==='vInput'">
          <div>设置选择项</div>
          <div>

          </div>
        </div>

        <div @click="addAttr">添加其他属性</div>
        <div
          v-for="(item,index) in vModel.attrs"
          :key="index"
        >
          <span>属性名</span>
          <input type="text" v-model="item.key">
          <span>属性值</span>
          <input type="text" v-model="item.value">
          <button @click="deleteAttr(index)">删除</button>
        </div>
        <button @click="onConfirm">确定</button>
      </div>
    </div>
</template>
<script>
export default {
  name: 'edit-modal',
  props: {
    value: Object
  },
  data () {
    return {
      vModel: this.value
    }
  },
  created () {
    if (!this.vModel.attrs) {
      this.$set(this.vModel, 'attrs', [])
    }
  },
  methods: {
    onConfirm () {
      this.$emit('confirm')
    },
    addAttr () {
      this.vModel.attrs.push(
        { key: '', value: '' }
      )
    },
    deleteAttr (index) {
      this.vModel.attrs.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
.modal{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00000099;
    .modal-contain{
      margin: 50px 200px;
      background: #fff;
      border: 1px solid #565d66;
      border-radius: 10px;
      padding: 30px;
      .modal-title{
        text-align: center;
        font-size: 20px;
        margin: 10px 0;
      }
    }
  }
</style>
