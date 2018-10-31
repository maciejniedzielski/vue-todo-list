<template lang="html">
  <div class="item"
    :class="{ 
      'item--toggled': isToggled,
      'item--done': task.status == 0 
    }"
    @click="isToggled = !isToggled">
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
    margin-bottom: 15px;

    .item__text {
      font-size: 1.2rem;
      color: $font-color;
      white-space: nowrap;
      overflow-x: hidden;
      padding: 2px 0;
      text-overflow: ellipsis;
    }

    &--toggled {
      max-height: 500px;

      .item__text {
        white-space: unset;
        overflow-x: auto;
      }
    }

    &--done {
      opacity: 0.5;

      .item__text {
        text-decoration: line-through;
      }
    }
  }
</style>