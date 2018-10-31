<template lang="html">
  <div class="item"
    :class="{ 'item--toggled': isToggled }"
    @click="isToggled = !isToggled">
    <p class="item__text">{{ taskName }}</p>
    <button class="item__btn" @click="markAsDone($event)">
      ok
    </button>
  </div>
</template>

<script>
	export default {
    name: 'TodoItem',
    props: ['taskName'],
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
    box-shadow: 0 5px 10px $shadow-color;
    border-radius: calc(5px);
    padding: 20px;
    margin-bottom: 15px;
    transition: all 1s ease; 

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
  }
</style>