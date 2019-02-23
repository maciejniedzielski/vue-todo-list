<template>
  <div id="app" class="app">
    <todo-header></todo-header>
    <todo-list></todo-list>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoList from './components/TodoList.vue';

  export default {
    name: 'app',
    components: {
      'todo-header': TodoHeader,
      'todo-list': TodoList
    }
  }
</script>

<style lang="scss">

body, html {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    background: linear-gradient(45deg, #9c28bb, #6ea4e8)
  }
}

.app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 576px) {
    max-width: 380px;
    max-height: 640px;
    border-radius: 5px;
    box-shadow: 0 10px 15px 0px #0000006b;
  }
}
</style>
