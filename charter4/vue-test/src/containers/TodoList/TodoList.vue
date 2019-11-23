<template>
  <div class="todolist">
    <h1>TodoList</h1>
    <Header @add="addUndoItem"/>
    <UndoList :list="undoList" @delete="handleItemDelete"/>
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
      this.undoList.push(item)
    },
    handleItemDelete (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
