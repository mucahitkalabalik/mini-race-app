<template>
  <div class="program-list">
    <div class="schedule text-center">Result</div>
    <ProgramList v-if="results" :listItems="results" />
  </div>
</template>

<script>
import ProgramList from "./listItem.vue";
export default {
  name: "ResultList",
  components: {
    ProgramList,
  },
  computed: {
    currentTour() {
      return this.$store.getters["race/currentTour"];
    },
    results() {
      return this.$store.getters["cars/getResult"];
    },
    tours() {
      return this.$store.getters["race/getTours"];
    },
  },
  watch: {
    "$store.state.race.currentTour"() {
      this.$store.dispatch("cars/setResults");
    },
  },
};
</script>

<style lang="scss">
.program-list {
  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0 5px 10px 5px;
}
</style>
