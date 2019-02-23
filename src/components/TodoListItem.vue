<template lang="html">
  <div class="item"
    :class="{ 'item--toggled': isToggled, 'item--done': task.status == 0 }"
    @click.stop="isToggled = !isToggled">
    <div class="item__badge" :class="`item__badge--${task.priority.name}`"></div>
    <p class="item__text">{{ task.name }}</p>
    <button class="item__btn" @click.stop="markAsDone">✓</button>
  </div>
</template>

<script>
  import { STATUS_ENUM } from '../consts.js';

	export default {
    name: 'TodoListItem',
    props: ['task'],
		data() {
			return {
        isToggled: false
			}
    },
    methods: {
      markAsDone() {
        this.$set(this.task, 'status', this.task.status === STATUS_ENUM.ACTIVE ? STATUS_ENUM.DONE : STATUS_ENUM.ACTIVE);
      },
    }
	};
</script>

<style scoped lang="scss">
  $height: 70px;

  .item {
    @include flex-align-justify(center, space-between);
    @include content-enter(7, 0);
    @include transition(all);
    width: 100%;
    background: $white;
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
      border: 2px solid $priority-low;
      cursor: pointer;
      font-size: 1.3rem;
      color: $white;
      position: relative;

      &:active {
        transform: translateY(2px);
      }
    }

    &--toggled {
      // max-height: 300px;

      .item__text {
        white-space: unset;
        overflow-x: auto;
        padding-right: 0;
      }
    }

    &--done {
      background: $list-background;
      box-shadow: 0 2px 10px lighten($shadow-color, 5%);

      .item__text {
        text-decoration: line-through;
        color: $shadow-color;
      }

      .item__btn {
        background: $priority-low;
      }
    }
  }
</style>