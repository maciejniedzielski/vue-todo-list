<template lang="html">
  <div class="item"
    :class="{ 
      'item--toggled': isToggled,
      'item--done': task.status == 0 
    }"
    @click="isToggled = !isToggled">
    <div class="item__badge" :class="`item__badge--${task.priority}`"></div>
    <p class="item__text">{{ task.name }}</p>
    <button class="item__btn" @click="markAsDone($event)">
      ok
    </button>
  </div>
</template>

<script>
	export default {
    name: 'TodoItem',
    props: ['task'],
		data() {
			return {
        isToggled: false
			}
    },
    methods: {
      markAsDone: function(e) {
        e.stopPropagation();
      }
    }
	};
</script>

<style scoped lang="scss">
  $height: 70px;

  .item {
    @include flex-align-justify(center, space-between);
    @include content-enter(7, 0);
    width: 100%;
    max-height: $height;
    background: #ffffff;
    box-shadow: 0 2px 10px $shadow-color;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
    position: relative;

    .item__badge {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      position: absolute;
      top: 5px;
      left: 5px;
      
      &--high {
        background: $priority-high;
        animation: pulse 1s infinite;
        animation-duration: 2s;
      }

      &--medium {
        background: $priority-medium;
      }

      &--low {
        background: $priority-low;
      }
    }

    .item__text {
      width: calc(100% - 30px);
      font-size: 1.2rem;
      color: $font-color;
      white-space: nowrap;
      overflow-x: hidden;
      padding: 2px 0;
      padding-right: 15px;
      text-overflow: ellipsis;
    }

    .item__btn {
      @extend %clear-button;
      @include transition(all);
      width: 30px;
      height: 30px;
      border-radius: 30px;
      border: 2px solid $main-color;

      &:active {
        transform: translateY(2px);
      }
    }

    &--toggled {
      max-height: 500px;

      .item__text {
        white-space: unset;
        overflow-x: auto;
        padding-right: 0;
      }
    }

    &--done {
      opacity: 0.5;

      .item__text {
        text-decoration: line-through;
      }

      .item__btn {
        border-color: #63CBAC;
      }
    }
  }
</style>