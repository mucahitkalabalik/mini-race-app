<template>
  <div class="race-line">
    <h3 class="text-center">Racing Area</h3>
    <div v-if="selectedCars" v-for="(car, index) in selectedCars" :key="index">
      <Driveway
        v-if="status"
        :car="car"
        :index="index"
        :turLength="tours[currentTour - 1].m"
      />
    </div>
    <b-row class="mt-3">
      <b-col>
        <div
          class="d-flex aling-center justify-content-center"
          v-if="raceStatus === 'tourfinished'"
        >
          <b-btn v-if="currentTour < 5" @click="nextTour" variant="danger"
            >Go To Next Round</b-btn
          >
        </div>
      </b-col>
      <b-col v-if="selectedCars">
        <div class="d-flex aling-center justify-content-center">
          <b>
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
  },
  methods: {
    nextTour() {
      this.$store.dispatch("race/nextTour");
      this.status = false;
      setTimeout(() => {
        this.status = true;
      }, 1000);
      setTimeout(() => {
        this.$store.dispatch("cars/startRace", true);
      }, 1000);
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
