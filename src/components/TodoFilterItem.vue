<template lang="html">
  <button class="badge"
    @click="setActive"
    :class="[
      priorityType.active ? 'badge--active' : '',
      `badge--${priorityType.name}`
    ]">
    {{ priorityType.name }}
  </button>
</template>

<script>
  export default {
    name: 'TodoPriorityItem',
    props: ['priorityType'],
    methods: {
      setActive() {
        this.$set(this.priorityType, 'active', !this.priorityType.active)
      }
    }
  }
</script>

<style scoped lang="scss">
  $height: 20px;

  .badge {
    @extend %clear-button;
    @include transition(all);
    @include content-enter(3, 500);
    width: auto;
    min-width: calc(25% - 10px);
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 50px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    opacity: 0.25;

    &--high {
      $color: $priority-high;
      background: $color;
      @include active-darken($color);
      // @include hover-darken($color);
    }

    &--medium {
      $color: $priority-medium;
      background: $color;
      @include active-darken($color);
      // @include hover-darken($color);
    }

    &--low {
      $color: $priority-low;
      background: $color;
      @include active-darken($color);
      // @include hover-darken($color);
    }

    &--active {
      opacity: 1;
    }

    &:active {
      transform: translateY(2px);
      box-shadow: 0 2px 2px 0px darken($shadow-color, 10%);
    }
  }
</style>