<template>
  <div
    class="todo"
    :class="{ completed: todo.completed }"
    @click="toggleTodo"
    v-text="todo.text"
  ></div>
</template>

<script>

export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      completed: false
    }
  },
  methods: {
    toggleTodo () {
      const { todo } = this;
      this.$store.commit('toggleTodo', { todo })
    }
  }
}
</script>

<style>
.todo {
  font-size: 28px;
  font-family: Helvetica, sans-serif;
  padding: 5px;
  margin: 20px;
  list-style-type: none;
  user-select: none;
}
.todo.completed {
  text-decoration: line-through;
}
</style>
