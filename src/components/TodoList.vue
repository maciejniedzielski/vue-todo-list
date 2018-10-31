<template lang="html">
  <section class="list">
    <TodoItem v-for="item in items" :taskName="item.taskName"/>
  </section>
</template>

<script>
  import TodoItem from './TodoItem.vue';

  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
    data() {
      return {
        items: [
          { taskName: 'Learn new view library' },
          { taskName: 'Read some docs' },
          { taskName: 'Start coding' },
          { taskName: `Read docs again when you dont know sth` },
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
    @include flex-align-justify(center, flex-start);
    flex-direction: column;
    padding: 20px 10px;
  }
</style>