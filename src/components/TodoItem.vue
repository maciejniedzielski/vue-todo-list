<template lang="html">
  <div class="item">
    <p class="item__text" v-bind:class="{ 'item__text--toggled': isToggled }">{{ taskName }}</p>
    <button class="item__btn">
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
        isToggled: true
			}
    },
    // data: {
    //   isToggled: true
    // } 
	};
</script>

<style scoped lang="scss">
  $height: 70px;
  $easing: cubic-bezier(.5, 0, .2, 1);
  
  $duration: 400ms;
  $delay: 80ms;

  .item {
    width: 100%;
    height: $height;
    background: #ffffff;
    box-shadow: 0 5px 10px $shadow-color;
    border-radius: calc(#{$height} / 2);
    @include flex-align-justify(center, space-between);
    padding: 10px 20px;
    margin-bottom: 15px;
    animation: enter $duration $easing backwards;    

    @for $i from 1 through 7 {
      &:nth-child(#{$i}) {
        animation-delay: calc(#{$i} * #{$delay});
      }
    }

    &__text {
      font-size: 1.2rem;
      color: $font-color;
      white-space: nowrap;
      overflow-x: hidden;
      padding: 2px 0;
      text-overflow: ellipsis;

      &--toggled {
        white-space: unset;
        overflow-x: auto;
        background: red;
      }
    }
  }

  @keyframes enter {
    from {
      opacity: 0;
      transform: translateY(1rem) scale(0.6);
    }
  }
</style>