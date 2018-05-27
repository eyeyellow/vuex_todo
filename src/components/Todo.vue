<template>
  <li
    class="todo"
    :class="{ completed: todo.completed }"
    @click="toggleTodo"
    v-text="todo.text"
  ></li>
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
  font-size: 24px;
  font-family: Helvetica, sans-serif;
}
.todo.completed {
  text-decoration: line-through;
}
</style>
