<template>
  <div v-if="store.currentSyrup !== 'None'" class="syrup" :style="{ '--texture-color': getSyrupColor() }"></div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const store = useBeverageStore();

function getSyrupColor() {
  switch (store.currentSyrup) {
    case "Caramel": return "#b87333";
    case "Vanilla": return "#f3e5ab";
    case "Chocolate": return "#5a3825";
    default: return "#d6b48a";
  }
}
</script>

<style scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
  background: repeating-linear-gradient(
    45deg,
    var(--texture-color),
    var(--texture-color) 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
}
</style>
