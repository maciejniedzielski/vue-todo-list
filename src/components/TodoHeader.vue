<template lang="html">
  <header class="header">
    <div class="header-date">
      <div class="header-date__day">
        <span><span class="bold">{{ dayName }}</span>, {{ day }}</span>
        <datetime type="date" input-id="startDate" class="datepicker">
          <!-- v-model="date"  -->
          <label for="startDate" slot="before">
            <div class="icon-container">
              <img src="../assets/calendar.svg" alt="Datepicker icon" class="icon">
            </div>
          </label>
        </datetime>
        <p class="counter"><span class="bold">12</span> Tasks</p>
      </div>
      <p class="header-date__month">{{ month }}</p>
    </div>
    <button class="add-btn">
      <i class="material-icons">+</i>
    </button>
  </header>
</template>
<script lang="js">
  const date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  export default  {
    name: 'TodoHeader',
    data() {
      return {
        month: monthNames[date.getMonth()],
        day: date.getDate(),
        dayName: days[date.getDay()]
      }
    }
}
</script>
<style scoped lang="scss">
  .header {
    width: 100%;
    height: 100px;
    @include flex-align-justify(center, space-between);
    background: $background-color;
    border-bottom: 1px solid $border-color;
    padding: 20px 25px; 
    position: sticky;
    z-index: 1;
    top: 0;
  }

  .header-date {
    width: 100%;
    flex-direction: column;
  }

  .header-date__day {
    width: 100%;
    color: $main-color;
    font-size: 1.5rem;
    margin: 5px 0;
    @include flex-align-justify(flex-end, space-between);
  }

  .header-date__month {
    font-size: 1.2rem;
    color: $font-color;
    font-weight: 300;
    margin: 5px 0;
  }

  .counter {
    font-size: 1.2rem;
    color: $font-color;
    font-weight: 300;
  }

  .add-btn {
    @include transition(all);
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background: $main-color;
    border: none;
    outline-color: $main-color;
    font-size: 2rem;
    color: #FFFFFF;
    position: absolute;
    bottom: -30px;
    right: 25px;
    cursor: pointer;
    box-shadow: 0 2px 5px $shadow-color;
    outline: none;

    &:active {
      box-shadow: 0 2px 5px darken($shadow-color, 10%);
      transform: translateY(-2px);
    }

    &:focus {
      background: darken($main-color, 5%);
    }
  }

  .icon-container {
    width: 20px;
    height: 20px;
    position: relative;
    top: 0;
    left: -45px;
    @include transition(all);

    .icon {
      width: 100%;
      height: 100%;
      filter: contrast(5%);
      cursor: pointer;
    
      &:active {
        transform: translateY(2px);
      }
    }
  }
</style>
