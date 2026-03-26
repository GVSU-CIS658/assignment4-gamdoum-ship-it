<template>
  <div class="syrup-layer" :style="{ background: syrupBackground }"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBeverageStore } from "../stores/beverageStore";

const beverageStore = useBeverageStore();

const syrupBackground = computed(() => {
  if (beverageStore.currentSyrup.name === "No Syrup") {
    return "transparent";
  }

  return `repeating-linear-gradient(
    45deg,
    ${beverageStore.currentSyrup.color},
    ${beverageStore.currentSyrup.color} 10px,
    rgba(255, 245, 220, 0.85) 10px,
    rgba(255, 245, 220, 0.85) 20px
  )`;
});
</script>

<style scoped>
.syrup-layer {
  position: absolute;
  left: 0;
  bottom: 62%;
  width: 100%;
  height: 18%;
  animation: pourSyrup 1s ease;
  z-index: 2;
}

@keyframes pourSyrup {
  from {
    height: 0;
  }
  to {
    height: 18%;
  }
}
</style>