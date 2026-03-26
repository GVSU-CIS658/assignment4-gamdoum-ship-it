<template>
  <div
    class="base-beverage"
    :style="{ backgroundColor: beverageStore.currentBase.color }"
  ></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style scoped>
.base-beverage {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 62%;
  animation: pourBase 0.9s ease;
  z-index: 1;
}

@keyframes pourBase {
  from {
    height: 0;
  }
  to {
    height: 62%;
  }
}
</style>