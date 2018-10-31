<template lang="html">
  <section class="filter">
    <TodoFilterItem v-for="type in priorityTypes" :priorityType="type"/>
  </section>
</template>

<script>
  import TodoFilterItem from './TodoFilterItem';

  export default {
    name: 'TodoFilter',
    components: {
      TodoFilterItem
    },
    data() {
      return {
        priorityTypes: [
          'high',
          'medium',
          'low'
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .filter {
    width: 100%;
    margin-bottom: 15px;
    @include flex-align-justify(center, flex-start);
  }
</style>