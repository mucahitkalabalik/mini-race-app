<template>
  <div class="header">
    <b-button class="header-button mr-3" @click="createRace">Create</b-button>
    <b-button class="header-button mr-5" variant="success" @click="startRace">
      Start
    </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    createRace() {
      this.$store.dispatch("cars/selectRandomCars");
      this.$store.dispatch("cars/setProgram");
    },
    startRace() {
      this.$store.dispatch("cars/startRace",true);
      const cars = this.$store.state.cars.selectedCars;
      const slowestCar = cars.reduce((slowest, car) => {
        return car.speed < slowest.speed ? car : slowest;
      }, cars[0]);

      const raceDuration = this.tours[this.currentTour-1].m / slowestCar.speed; 
      setTimeout(() => {
        this.$store.dispatch("race/changeRaceStatus", "tourfinished");
        this.$store.dispatch("cars/startRace",false);
      }, raceDuration * 1000); 
    },
  },
  computed: {
    tours() {
      return this.$store.getters["race/getTours"]; 
    },
    currentTour() {
      return this.$store.getters["race/currentTour"]; 
    },
    selectedCars() {
      return this.$store.getters["cars/getSelectedCars"];
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #0f1428;
  padding: 15px;
  margin-bottom: 20px;
  &-button {
    padding: 5px 35px;
  }
}
</style>
