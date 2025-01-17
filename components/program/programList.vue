<template>
  <div class="program">
    <div class="schedule text-center">Schedule</div>
    <ProgramList v-if="program" :listItems="program" />
  </div>
</template>

<script>
import ProgramList from "./listItem.vue";
export default {
  name: "Program",
  components: {
    ProgramList,
  },
  computed: {
    program() {
      return this.$store.getters["cars/program"];
    },
  },
};
</script>

<style lang="scss">
.program {
  height: 80vh;
  overflow: scroll;
  overflow-x: hidden;
  padding: 0 5px 10px 5px;

  &-item {
    margin-bottom: 5px;
    font-size: 12px;
    background-color: #efefef;
    border-radius: 10px;
    overflow-x: hidden;
    padding: 5px;
  }
  &-title {
    background-color: #ccc;
    border-radius: 5px;
    margin-top: 10px;
  }
  &-detail-title {
    border-bottom: 1px solid #ccc;
  }
}
.schedule {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ffffff;
  font-size: 24px;
  z-index: 9;
}
</style>
