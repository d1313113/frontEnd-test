<template>
  <div class="undo-list">
    <div class="title">
      正在进行:
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="item"
        class="item"
      >
        {{ item.value }}
        <span data-test="delete-btn" @click="handleDelete(index)" class="delete">-</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.undo-list
  width 600px
  margin 0 auto
  .title
    line-height 30px
    font-size 24px
    font-weight 600
    margin 10px 0

  .count, .delete
    float right
    display block
    width 20px
    height 20px
    line-height 20px
    text-align center
    background #e6e6e6
    border-radius 10px
    margin-top 5px
    font-size 12px
    color #000

  .delete
    text-indent 0
    margin-right 10px
    cursor pointer

  .list
    list-style none

  .item
    margin-bottom 10px
    text-indent 20px
    line-height 32px
    font-size 14px
    background #fff
    border-left 5px solid #629a9a
    border-radius 3px
</style>
