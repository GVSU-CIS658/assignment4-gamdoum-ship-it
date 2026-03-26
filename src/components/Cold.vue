<template>
  <div class="drink-scene cold-scene">
    <div class="snowflake snowflake-1">✻</div>
    <div class="snowflake snowflake-2">✻</div>
    <div class="snowflake snowflake-3">✻</div>
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

.snowflake {
  position: absolute;
  color: rgba(225, 235, 255, 0.75);
  font-size: 34px;
  line-height: 1;
  animation: floatCold 2.8s infinite ease-in-out;
}

.snowflake-1 {
  left: 105px;
  top: 0;
  animation-delay: 0s;
}

.snowflake-2 {
  left: 175px;
  top: -8px;
  animation-delay: 0.5s;
}

.snowflake-3 {
  left: 140px;
  top: 20px;
  animation-delay: 1s;
}

@keyframes floatCold {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.35;
  }
  50% {
    transform: translateY(-8px) rotate(20deg);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.35;
  }
}
</style>