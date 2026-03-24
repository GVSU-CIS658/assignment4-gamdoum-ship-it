<template>
  <div v-if="store.currentCreamer !== 'None'" class="froth">
    <div v-for="i in 5" :key="i" class="foam"></div>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const store = useBeverageStore();
</script>

<style scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  animation: pour-tea 2s 2s forwards;
  z-index: 3;
}
.foam {
  display: block;
  background: #e4e0d2;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}
/* foam positions optional */
</style>