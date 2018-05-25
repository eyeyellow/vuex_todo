<template>
  <div id="app">
    <Title msg="ToDo"/>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    {{ count }}
  </div>
</template>

<script>
import Title from './components/Title.vue';
import store from './store/store';

export default {
  name: 'app',
  components: {
    Title
  },
  store,
  methods: {
    increment () {
      store.commit('increment');
    },
    decrement () {
      store.commit('decrement');
    }
  },
  computed: {
    count () {
      return store.state.count;
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
</style>
