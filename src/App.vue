<template>
  <div id="app">
    <Title msg="ToDo"/>
    <div id="todo-list">
      <input
        id="todo-input"
        type="text"
        placeholder="Add something todo"
        autofocus="off"
        @keyup.enter="addTodo"
      >
      <ul
        v-show="todos.length"
        id="todos"
      >
        <Todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></Todo>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Todo from './components/Todo.vue';

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  name: 'app',
  components: {
    Title,
    Todo
  },
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos;
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    }
  },
  methods: {
    addTodo (e) {
      const text = e.target.value;
      if (text) {
        this.$store.commit('addTodo', { text });
      }
      e.target.value = '';
    }
  }
}
</script>

<style>
#app {
  margin: 10% auto;
  width: 800px;
  height: 800px;
  border: 2px dotted black;
}
#todo-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#todo-input {
  min-height: 30px;
  border-bottom: 2px dotted black;
  font-size: 28px;
}
#todos {
  margin-top: 40px;
}
</style>
