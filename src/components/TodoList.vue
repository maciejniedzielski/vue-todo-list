<template lang="html">
  <section class="list">
    <h2 class="list__heading">Select priority</h2>
    <TodoFilter/>
    <TodoItem v-for="task in tasks" :key="task.name" :task="task"/>
  </section>
</template>

<script>
  import TodoItem from './TodoItem.vue';
  import TodoFilter from './TodoFilter.vue';

  const Enum = {
    'DONE': 0,
    'ACTIVE': 1
  }

  export default {
    name: 'TodoList',
    components: {
      TodoItem,
      TodoFilter
    },
    data() {
      return {
        tasks: [
          {
            name: 'Learn new view library',
            status: Enum.DONE,
            priority: 'low'
          },
          {
            name: 'Read some docs',
            status: Enum.DONE,
            priority: 'medium'
          },
          {
            name: 'Start coding',
            status: Enum.ACTIVE,
            priority: 'high'
          },
          {
            name: `Read docs again when you dont know sth blah blah blah blah blah blah blah blah blah`,
            status: Enum.ACTIVE,
            priority: 'medium'
          },
          {
            name: 'Continue coding',
            status: Enum.DONE,
            priority: 'medium'
          },
          {
            name: 'Do some commits',
            status: Enum.ACTIVE,
            priority: 'low'
          },
          {
            name: 'Have fun!',
            status: Enum.ACTIVE,
            priority: 'low'
          },
        ]
      }
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
    background: #F7F7F7;

    &__heading {
      font-size: 14px;
      margin: 15px 0;
      color: $font-color;
    }
  }
</style>