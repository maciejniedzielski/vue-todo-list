<template lang="html">
  <section class="filter">
    <todo-filter-item v-for="type in priorityTypes" :priorityType="type"></todo-filter-item>
  </section>
</template>

<script>
  import TodoFilterItem from './TodoFilterItem'
  import { store } from '../store/store'
  
  export default {
    name: 'TodoFilter',
    components: {
      'todo-filter-item': TodoFilterItem
    },
    computed: {
      priorityTypes: () => store.getters.priorityTypes
    }
  }
</script>

<style scoped lang="scss">
  .filter {
    width: 100%;
    margin-bottom: 15px;
    // @include flex-align-justify(center, flex-start);
    // position: sticky;
    // top: 85px;
    // z-index: 1;
  }
</style>