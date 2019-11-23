<template>
  <div>
    <div data-test="count">{{ list.length }}</div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="item"
        data-test="item"
      >
        {{ item }}
        <span data-test="delete-btn" @click="handleDelete(index)">-</span>
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

</style>
