<template>
  <div
    class="creamer-layer"
    :style="{ backgroundColor: beverageStore.currentCreamer.color }"
  >
    <div
      v-if="beverageStore.currentCreamer.name !== 'No Cream'"
      class="foam-row"
    >
      <span v-for="n in 5" :key="n" class="foam"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style scoped>
.creamer-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 20%;
  animation: pourCream 1.1s ease;
  z-index: 3;
}

.foam-row {
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  height: 30px;
}

.foam {
  position: absolute;
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #e6e1d5;
}

.foam:nth-child(1) {
  left: 0px;
}
.foam:nth-child(2) {
  left: 36px;
}
.foam:nth-child(3) {
  left: 72px;
}
.foam:nth-child(4) {
  left: 108px;
}
.foam:nth-child(5) {
  left: 138px;
}

@keyframes pourCream {
  from {
    height: 0;
  }
  to {
    height: 20%;
  }
}
</style>