<template lang="html">
  <section class="list">
    <h2 class="list__heading">Select priority</h2>
    <todo-filter></todo-filter>
    <todo-item v-for="task in tasks" :key="task.name" :task="task"></todo-item>
  </section>
</template>

<script>
  import TodoListItem from './TodoListItem.vue';
  import TodoFilter from './TodoFilter.vue';
  import { store }  from '../store/store';

  import { STATUS_ENUM } from '../consts';

  export default {
    name: 'TodoList',
    components: {
      'todo-item': TodoListItem,
      'todo-filter': TodoFilter
    },
    computed: {
      tasks: () => store.getters.getFilteredTasks
    }
  }
</script>

<style scoped lang="scss">
  .list {
    width: 100%;
    height: auto;
    @include flex-align-justify(flex-start, flex-start);
    flex-direction: column;
    padding: 0 10px 20px;
    background: $list-background;

    &__heading {
      font-size: 1rem;
      margin: 15px 0;
      color: $font-color;
    }

    @media screen and (min-width: 576px) {
      height: 540px;
      overflow-y: scroll;
    }
  }
</style>