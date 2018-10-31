<template lang="html">
  <section class="list">
    <h2 class="list__heading">Select priority</h2>
    <TodoFilter/>
    <TodoItem v-for="item in items" :key="item.taskName" :taskName="item.taskName"/>
  </section>
</template>

<script>
  import TodoItem from './TodoItem.vue';
  import TodoFilter from './TodoFilter.vue';

  export default {
    name: 'TodoList',
    components: {
      TodoItem,
      TodoFilter
    },
    data() {
      return {
        items: [
          { taskName: 'Learn new view library' },
          { taskName: 'Read some docs' },
          { taskName: 'Start coding' },
          { taskName: `Read docs again when you dont know sth blah blah blah blah blah blah blah blah blah` },
          { taskName: 'Continue coding' },
          { taskName: 'Do some commits' },
          { taskName: 'Have fun!' },
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