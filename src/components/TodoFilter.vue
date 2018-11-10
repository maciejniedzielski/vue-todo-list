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
          {
            name: 'high',
            active: true
          },
          {
            name: 'medium',
            active: false
          },
          {
            name: 'low',
            active: false
          }
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
    // position: sticky;
    // top: 85px;
    // z-index: 1;
  }
</style>