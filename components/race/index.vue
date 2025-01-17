<template>
  <div class="race">
    <RaceLine />
    <!-- {{ tours }} -->
  </div>
</template>

<script>
import RaceLine from "./raceLine.vue";
export default {
  components: {
    RaceLine,
  },
  data() {
    return {
      fields: ["name", "speed", "color"],
    };
  },
};
</script>

<style lang="scss">
</style>
