<template>
  <div class="baseBeverage" :style="{ backgroundColor: getBaseColor() }"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const store = useBeverageStore();

function getBaseColor() {
  switch (store.currentBase) {
    case "Coffee": return "#6f4e37";
    case "Tea": return "#c49a6c";
    case "Matcha": return "#98c379";
    default: return "#d6b48a";
  }
}
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1;
}
</style>
