<template>
  <div class="header">
    <div class="header-content">
      <input type="text" data-test="input" v-model="inputValue" @keyup.enter="addTodoItem">
      <input type="text" data-test="input1" :value="inputValueVuex" @input="e => changeInputValue(e.target.value)" @keyup.enter="addTodoItem">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState({
      inputValueVuex: state => state.inputValueVuex
    })
  },
  methods: {
    addTodoItem () {
      if (this.inputValue || this.inputValueVuex) {
        this.$emit('add', this.inputValue || this.inputValueVuex)
        this.inputValue = ''
        this.changeInputValue('')
      }
    },
    ...mapMutations({
      changeInputValue: 'changeInputValue'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header
  background-color #666
  line-height 60px
  .header-content
    width 600px
    margin 0 auto
    color #fff
    font-size 24px
</style>
