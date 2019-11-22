<template>
  <div class="header">
    <h1>TodoList</h1>
    <input type="text" data-test="input" v-model="inputValue" @keyup.enter="addTodoItem">
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
