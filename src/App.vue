<template>
  <div id="app" class="app">
    <TodoHeader/>
    <TodoList/>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoList from './components/TodoList.vue';

  export default {
    name: 'app',
    components: {
      TodoHeader,
      TodoList
    }
  }
</script>

<style lang="scss">

body, html {
  width: 100%;
  height: 100%;
}

.app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
