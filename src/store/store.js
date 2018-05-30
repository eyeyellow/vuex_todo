import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

  const state = {
    todos: []
  };

  const mutations = {
    addTodo (state, { text }) {
      state.todos.push({
        text,
        completed: false
      });
    },
    toggleTodo (state, { todo }) {
      todo.completed = !todo.completed;
    },
    deleteTodo (state, { todo }) {
      const { todos } = state;
      todos.splice(todos.indexOf(todo), 1);
    }
  }


export default new Vuex.Store({
  state,
  mutations
})
