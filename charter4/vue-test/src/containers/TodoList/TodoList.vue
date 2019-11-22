<template>
  <div class="todolist">
    <h1>TodoList</h1>
    <Header @add="addUndoItem"/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (item) {
      this.undoList.push(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
