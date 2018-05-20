<template>
  <div id="title">
    <h1 id="header">{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      msg: String
    }
  }
</script>

<style>
#title {
  border-bottom: 2px dotted black;
  text-align: center;
}
h1#header {
  font-family: Helvetica, sans-serif;
}
</style>
