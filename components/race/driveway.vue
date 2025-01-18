<template>
  <div class="driveway">
    <b-row>
      <b-col cols="1">
        <div class="number">
          {{ index + 1 }}
        </div>
      </b-col>
      <b-col class="way-dashed" ref="carContainer">
        <i
          class="fa-solid fa-car-side fa-xl"
          :style="carStyle"
          ref="carIcon"
        ></i>
        <i class="fa-solid fa-flag flag"></i>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    car: Object,
    index: Number,
    turLength: Number,
  },
  data() {
    return {
      containerWidth: 0,
    };
  },
  computed: {
    carStyle() {
      const animationDuration = `${this.turLength / this.car.speed}s`;
      setTimeout(() => {
        this.$store.dispatch("cars/startRace", false);
      }, animationDuration * 1000);
      return {
        color: this.car.color,
        animation: this.isAnimationRunning
          ? `moveCar ${animationDuration} linear forwards`
          : "none",
        width: "100%",
      };
    },
  },
  data() {
    return {
      isAnimationRunning: false,
    };
  },
  watch: {
    "$store.state.cars.start"(newVal) {
      if (newVal) {
        this.startCarAnimation();
      }
    },
  },
  methods: {
    setContainerWidth() {
      const container = this.$refs.carContainer;
      if (container) {
        this.containerWidth = container.offsetWidth;
      }
    },
    startCarAnimation() {
      this.isAnimationRunning = true;
    },
  },
};
</script>

<style lang="scss">
.driveway {
  padding: 5px;
  border-radius: 5px;

  .number {
    transform: rotate(270deg);
    text-align: center;
    border-radius: 5px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: #0f1428;
    width: 30px;
  }

  .flag {
    position: absolute;
    right: 0;
    bottom: 0;
    color: red;
  }
}

.way-dashed {
  border-bottom: 1px dashed #0f1428;
  position: relative;
  height: 50px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes moveCar {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
