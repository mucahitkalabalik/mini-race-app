<template>
  <div>
    <Header></Header>
  <b-container fluid>

    <b-row>
      <b-col cols="3"><CarList /></b-col>
      <b-col cols="5"><Race /></b-col>
      <b-col cols="4"><Program /></b-col>
    </b-row>
    
  </b-container>
  </div>
</template>

<script>
import Header from "../components/header/index.vue";
import CarList from "../components/cars/carList.vue";
import Race from "../components/race/index.vue";
import Program from "../components/program/program.vue";
export default {
  name: "IndexPage",
  components: {
    Header,
    CarList,
    Race,
    Program,
  },
};
</script>

<style lang="scss"></style>
