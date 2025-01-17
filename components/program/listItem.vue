<template>
  <div>
    <div class="program-item" v-for="item in listItems" :key="item.id">
      <div class="program-title text-center">
        {{ item.tourNumber }}.Tour - {{ item.tourLength }}
      </div>
      <b-row class="my-1 program-detail-title">
        <b-col cols="3">Position</b-col>
        <b-col>Car</b-col>
      </b-row>
      <div v-for="(car, index) in item.selectedCars" :key="car.id">
        <b-row>
          <b-col cols="3">{{ index + 1 }}</b-col>
          <b-col>{{ car.name }}</b-col>
        </b-row>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    listItems: Array,
  },
};
</script>
