<template>
  <div class="program-container">
    <b-row>
      <b-col><ProgramList /></b-col>
      <b-col><ResultList /></b-col>
    </b-row>
  </div>
</template>
<script>
import ProgramList from "./programList.vue";
import ResultList from "./resultList.vue";
export default {
  name: "Program",
  components: {
    ProgramList,
    ResultList,
  },
};
</script>
<style lang="scss">
.program-container {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px;
  height: 80vh;
  overflow: hidden;
}
</style>
