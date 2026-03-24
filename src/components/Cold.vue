<template>
  <div id="condensation">
    <div class="flake" v-for="i in 3" :key="i"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#condensation {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.flake {
  width: 10px;
  height: 10px;
  background: rgba(173, 216, 230, 0.5);
  position: absolute;
  left: calc(50% - 5px);
  animation: ice 2s infinite;
}
@keyframes ice {
  0% { opacity: 0.3; transform: translateY(0px); }
  50% { opacity: 0.5; transform: translateY(-10px); }
  100% { opacity: 0.3; transform: translateY(0px); }
}
</style>