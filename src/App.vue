<template>
  <div id="app">
    <Title msg="ToDo"/>
  </div>
</template>

<script>
import Title from './components/Title.vue'

export default {
  name: 'app',
  components: {
    Title
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
