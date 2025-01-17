<template>
  <div class="car-list">
    <h3 class="text-center">Car List</h3>
    <b-table striped hover :items="cars" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["name", "speed", "color"],
    };
  },
  computed: {
    cars() {
      return this.$store.getters["cars/getCars"];
    },
  },
};
</script>

<style lang="scss">
.car-list {
  min-height: 80vh;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 5px;
  font-size: 12px;
  overflow-x: scroll;
}
</style>
