<template>
  <div class="todolist">
    <h1>TodoList</h1>
    <Header @add="addUndoItem"/>
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="handleStatusChange"
      @reset="resetStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import Header from './components/Header'
import UndoList from './components/UndoList'

export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (item) {
      this.undoList.push({
        status: 'div',
        value: item
      })
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    },
    handleStatusChange (index) {
      this.undoList = this.undoList.map((item, index1) => ({
        ...item,
        status: index1 === index ? 'input' : 'div'
      }))
    },
    resetStatus () {
      this.undoList = this.undoList.map((item, index1) => ({
        ...item,
        status: 'div'
      }))
    },
    changeItemValue (obj) {
      this.undoList[obj.index].value = obj.value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
