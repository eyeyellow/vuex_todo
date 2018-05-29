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
      <div id="display-grid">
        <div
          v-for="(val, filter) in filters"
          :key="filter"
          :class="{ filters, selected: visibility === filter }"
          @click="visibility = filter"
        >
          {{ filter }}
        </div>
        <div
          id="todos"
          v-show="todos.length"
          :class="visibility"
        >
          <Todo
            v-for="(todo, index) in filteredTodos"
            :key="index"
            :todo="todo"
          ></Todo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Todo from './components/Todo.vue';

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.completed),
  completed: todos => todos.filter(todo => todo.completed)
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
      filters
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos;
    },
    filteredTodos () {
      return filters[this.visibility](this.todos);
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
#display-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 25% auto;
}
.filters {
  min-height: 30px;
  font-size: 28px;
  font-family: Helvetica, sans-serif;
  margin: 20px;
  user-select: none;
}
.filters.selected {
  text-decoration: underline;
}
#todos {
  margin-top: 10px;
}
#todos.all {
  grid-column-start: 1;
  grid-column-end: 2;
}
#todos.active {
  grid-column-start: 2;
  grid-column-end: 3;
}
#todos.completed {
  grid-column-start: 3;
  grid-column-end: 4;
}
</style>
