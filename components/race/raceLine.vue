<template>
  <div class="race-line">
    <h3 class="text-center">Racing Area</h3>
    <div v-if="selectedCars" v-for="(car, index) in selectedCars" :key="index">
      <Driveway
        v-if="status && currentTour <= 5"
        :car="car"
        :index="index"
        :turLength="tours[currentTour - 1].m"
      />
    </div>
    <div v-if="currentTour > 5">
      <b-card bg-variant="light" class="text-center mt-5">
        <b-card-text>Race Completed.</b-card-text>
      </b-card>
    </div>
    <b-row class="mt-3">
      <b-col>
        <div
          class="d-flex aling-center justify-content-center"
          v-if="raceStatus === 'tourfinished'"
        >
          <b-btn
            v-if="currentTour < 5"
            :disabled="nextButtonStatus"
            @click="nextTour"
            variant="danger"
            >Go To Next Round</b-btn
          >
        </div>
      </b-col>
      <b-col v-if="selectedCars">
        <div class="d-flex aling-center justify-content-center">
          <b v-if="currentTour <= 5">
            {{ tours[currentTour - 1].index }}. Tour -
            {{ tours[currentTour - 1].m }}m</b
          >
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Driveway from "./driveway.vue";
export default {
  components: {
    Driveway,
  },
  watch: {
    "$store.state.cars.selectedCars"(newVal) {
      this.selectedCars = newVal;
    },
  },
  data() {
    return {
      selectedCars: null,
      status: true,
    };
  },
  computed: {
    tours() {
      return this.$store.getters["race/getTours"];
    },
    currentTour() {
      return this.$store.getters["race/currentTour"];
    },
    raceStatus() {
      return this.$store.getters["race/raceStatus"];
    },
    nextButtonStatus() {
      return this.$store.getters["race/getNextButton"];
    },
  },
  methods: {
    changenextButton() {
      const cars = this.$store.state.cars.selectedCars;
      const slowestCar = cars.reduce((slowest, car) => {
        return car.speed < slowest.speed ? car : slowest;
      }, cars[0]);

      const raceDuration =
        this.tours[this.currentTour - 1].m / slowestCar.speed;
      setTimeout(() => {
        this.$store.dispatch("race/changeNextButton", false);
      }, raceDuration * 1000);
    },
    nextTour() {
      this.$store.dispatch("race/changeNextButton", true);
      this.$store.dispatch("race/nextTour");
      this.$store.dispatch("cars/selectRandomCars");
      this.$store.dispatch("cars/setProgram");
      this.status = false;
      setTimeout(() => {
        this.status = true;
      }, 1000);
      setTimeout(() => {
        this.$store.dispatch("cars/startRace", true);
      }, 1000);
      this.changenextButton();

      if (this.currentTour === 5) {
        const cars = this.$store.state.cars.selectedCars;
        const slowestCar = cars.reduce((slowest, car) => {
          return car.speed < slowest.speed ? car : slowest;
        }, cars[0]);

        const raceDuration =
          this.tours[this.currentTour - 2].m / slowestCar.speed;
        setTimeout(() => {
          this.$store.dispatch("race/nextTour");
        }, raceDuration * 1230);
      }
    },
  },
};
</script>

<style lang="scss">
.race-line {
  min-height: 80vh;
  padding: 15px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
