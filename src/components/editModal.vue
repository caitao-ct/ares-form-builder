<template>
  <div class="modal">
      <div class="modal-contain">
        <div class="modal-title">编辑属性</div>
        <div class="line-item">
          <label class="label">标题名</label>
          <input type="text" v-model="vModel.title">
        </div>
        <div v-if="vModel.tagName==='v-input'" class="line-item">
          <label class="label">默认值</label>
          <input type="text" v-model="vModel.value">
        </div>
        <div v-if="vModel.tagName==='v-input'" class="line-item">
          <label class="label">提示文字</label>
          <input type="text" v-model="vModel.placeholder">
        </div>
        <div v-if="vModel.tagName!=='title'" class="line-item">
          <label class="label">占据类型</label>
          <input type="radio" id="halfLine" name="lineType" v-model="vModel.lineType" value="halfLine"><label for="halfLine">占据半行</label>
          <input type="radio" id="allLine" name="lineType" v-model="vModel.lineType" value="allLine"><label for="allLine">占据整行</label>
        </div>
        <div class="line-item">
          <label class="label">class</label>
          <input type="text" v-model="vModel.class">
        </div>
        <div v-if="vModel.tagName==='radio' || vModel.tagName==='checkbox'" class="line-item">
          <label class="label">name</label>
          <input type="text" v-model="vModel.name">
        </div>
        <div v-if="vModel.options">
          <div>设置选择项<img src="../assets/add.png" class="editImg" @click="addOption"></div>
          <div v-for="(item,index) in vModel.options" :key="index" class="line-item">
            <label class="label">value</label>
            <input type="text" v-model="item.id">
            <label class="label">显示值</label>
            <input type="text" v-model="item.name">
            <span @click.prevent="toggleChecked(index)">
              <input type="checkbox" name="isChecked" v-model="item.checked" true-value="true" false-value="false" :id="index">
              <label :for="index">默认选中</label>
            </span>
            <img src="../assets/delete.png" class="editImg" @click="deleteOption(index)">
          </div>
        </div>

        <div>其他属性<img src="../assets/add.png" class="editImg" @click="addAttr"></div>
        <div
          v-for="(item,index) in vModel.attrs"
          :key="index"
          class="line-item"
        >
          <label class="label">属性名</label>
          <input type="text" v-model="item.key">
          <label class="label">属性值</label>
          <input type="text" v-model="item.value">
          <img src="../assets/delete.png" class="editImg" @click="deleteAttr(index)">
        </div>
        <div class="modal-footer">
          <button @click="onConfirm" class="confirmBtn">确定</button>
        </div>
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
    },
    addOption () {
      this.vModel.options.push(
        { id: '', name: '' }
      )
    },
    deleteOption (index) {
      this.vModel.options.splice(index, 1)
    },
    toggleChecked (index) {
      if (this.vModel.tagName !== 'checkbox') {
        this.vModel.options.forEach(item => {
          item.checked = false
        })
      }
      this.vModel.options[index].checked = true
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
  .label{
    display: inline-block;
    width: 100px;
    padding-left: 10px;
  }
  .line-item{
    margin: 10px;
    display: flex;
  }
  .modal-footer{
    text-align: center;
  }
  .confirmBtn{
    height: 40px;
    width: 200px;
    background: #2d8cf0;
    color: #fff;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    margin-top: 20px;
  }
</style>
