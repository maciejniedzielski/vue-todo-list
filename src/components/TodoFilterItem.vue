<template lang="html">
  <button class="badge" :class="priorityType">
    {{ priorityType }}
  </button>
</template>

<script>
  export default {
    name: 'TodoPriorityItem',
    props: ['priorityType']
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

    &.high {
      $color: #FF6262;
      background: $color;
      @include active-darken($color);
    }

    &.medium {
      $color: #FFBB00;
      background: $color;
      @include active-darken($color);
    }

    &.low {
      $color: #63CBAC;
      background: $color;
      @include active-darken($color);
    }

    &:active {
      transform: translateY(-2px);
      box-shadow: 0 2px 2px 0px darken($shadow-color, 10%);
    }
  }
</style>