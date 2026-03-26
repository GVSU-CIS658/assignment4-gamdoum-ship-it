<template>
  <div class="drink-scene hot-scene">
    <div class="steam steam-1"></div>
    <div class="steam steam-2"></div>
    <div class="steam steam-3"></div>
    <Mug />
  </div>
</template>

<script setup lang="ts">
import Mug from "./Mug.vue";
</script>

<style scoped>
.drink-scene {
  width: 320px;
  margin: 0 auto;
  position: relative;
  padding-top: 55px;
}

.steam {
  position: absolute;
  width: 36px;
  height: 36px;
  opacity: 0.7;
  animation: steamFloat 2.4s infinite ease-in-out;
}

.steam::before,
.steam::after {
  content: "";
  position: absolute;
  background: #ccb5a6;
  border-radius: 10px;
}

.steam::before {
  width: 12px;
  height: 36px;
  left: 12px;
  top: 0;
}

.steam::after {
  width: 36px;
  height: 12px;
  left: 0;
  top: 12px;
}

.steam-1 {
  left: 95px;
  top: 8px;
  animation-delay: 0s;
}

.steam-2 {
  left: 135px;
  top: 8px;
  animation-delay: 0.4s;
}

.steam-3 {
  left: 175px;
  top: -10px;
  animation-delay: 0.8s;
}

@keyframes steamFloat {
  0% {
    transform: translateY(0px) scale(0.95) rotate(0deg);
    opacity: 0.45;
  }
  50% {
    transform: translateY(-8px) scale(1.05) rotate(6deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0px) scale(0.95) rotate(0deg);
    opacity: 0.45;
  }
}
</style>