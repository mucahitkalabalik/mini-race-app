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
  },
  watch: {
    "$store.state.race.currentTour"(newVal) {
      console.log(newVal, "newVal");
      this.$store.dispatch("cars/setReults");
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
