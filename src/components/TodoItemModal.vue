<template lang="html">
  <div class="modal-overlay"  @click.self="toggleModal()">
    <div class="modal">
      <form>
        <p class="form-heading">Add new task</p>
        <input type="text" placeholder="Task name..." class="input">

        <div class="input-container">
          <datetime type="date" input-id="filterDate" input-class="filter-date" class="datepicker">
            <label for="filterDate" slot="before">
              <div class="icon-container">
                <img src="../assets/calendar.svg" alt="Datepicker icon" class="icon">
              </div>
            </label>
          </datetime>
          <div class="priority">

            <input type="radio" name="priority" id="high" class="priority__input">
            <label for="high" class="priority__label priority__label--high">High</label>

            <input type="radio" name="priority" id="medium" class="priority__input">
            <label for="medium" class="priority__label priority__label--medium">Medium</label>

            <input type="radio" name="priority" id="low" class="priority__input">
            <label for="low" class="priority__label priority__label--low">Low</label>
            
          </div>
        </div>

        <div class="action">
          <button class="action__button action__button--add">Add</button>
          <button 
            @click.prevent="toggleModal($event)"
            class="action__button action__button--cancel">Cancel</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoItemModal',
    data() {
      return {
        date: new Date().toISOString()
      }
    },
    methods: {
      toggleModal(e) {
        this.$emit('toggleModal');
      }
    }
  }
</script>

<style scoped lang="scss">
  .modal-overlay {
    @include flex-align-justify(center, center);
    animation: fade 500ms;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: rgba(0, 0, 0, .5);
    padding: 10px;
  }

  .modal {
    animation: slide-down 300ms;
    width: 100%;
    height: auto;
    background: #F7F7F7;
    border-radius: 5px;
    padding: 20px 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3);
  }

  .form-heading {
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
    color: $font-color;
    margin-bottom: 20px;
  }

  .input-container {
    @include flex-align-justify(center, center);
    flex-direction: row-reverse;
    margin: 20px auto 40px;
  }

  .input {
    @include input;
    width: 100%;
  }

  .priority {
    @include flex-align-justify(center, center);
    width: fit-content;
    border-radius: 30px;
    box-shadow: 0 0 10px $shadow-color;
    margin-right: 40px;

    &__input {
      width: 0;
      height: 0;
      position: absolute;
      overflow: hidden;

      &:checked + .priority__label { 
        color: #ffffff;

        &--high {
          background: $priority-high;
        }

        &--medium {
          background: $priority-medium;
        }

        &--low {
          background: $priority-low;
        }
      }
    }

    &__label {
      cursor: pointer;
      background: #ffffff;
      color: $font-color;
      padding: 12px 15px;
      text-transform: uppercase;
      font-size: 0.8rem;
      @include transition(all);
      
      &:first-of-type {
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        border-right: 1px solid $border-color;
      }

      &:last-of-type {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        border-left: 1px solid $border-color;
      }
    }
  }

  .action {
    margin: 20px auto 0;
    width: fit-content;

    &__button {
      @extend %clear-button;
      @include transition(all);
      min-width: 100px;
      padding: 10px 30px;
      border-radius: 3px;
      font-size: 1rem;
      margin: 0 5px;
      color: $font-color;

      &--add {
        background: $main-color;
        color: #ffffff;

        &:hover {
          background: darken($main-color, 5%);
        }
      }

      &--cancel {
        background: transparent;
        border: 1px solid $shadow-color;

        &:hover {
          border-color: $main-color;
          color: $main-color;
        }
      }
    }
  }
</style>