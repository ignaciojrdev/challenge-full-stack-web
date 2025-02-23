<script>
import { Spinner } from "spin.js";
import { eventBus } from "../../events/eventBus";
export default {
  data() {
    return {
      spinner: null,
      isLoading: false,
    };
  },
  methods: {
    showSpinner(target) {
      this.isLoading = true;
      //const target = this.$refs.spinnerContainer;
      this.spinner = new Spinner({
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        scale: 1,
        corners: 1,
        color: "#fff",
        fadeColor: "transparent",
        speed: 1,
        rotate: 0,
        animation: "spinner-line-fade-quick",
        zIndex: 2e9,
        className: "spinner",
      }).spin(target);
    },
    hideSpinner() {
      this.isLoading = false;
      if (this.spinner) {
        this.spinner.stop();
      }
    },
  },
  mounted() {
    eventBus.on("show-spinner", (target) => this.showSpinner(target));
    eventBus.on("hide-spinner", () => this.hideSpinner());
  }
};
</script>

<template>
  <div v-if="isLoading" class="overlay">
    <div ref="spinnerContainer"></div>
  </div>
</template>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }
</style>
