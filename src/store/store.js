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
    }
  }


export default new Vuex.Store({
  state,
  mutations
})
