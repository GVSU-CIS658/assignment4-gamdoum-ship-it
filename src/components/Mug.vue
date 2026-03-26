<template>
  <div class="mug-wrap">
    <div class="mug">
      <Contents />
    </div>
    <div class="handle"></div>
  </div>
</template>

<script setup lang="ts">
import Contents from "./Contents.vue";
</script>

<style scoped>
.mug-wrap {
  position: relative;
  width: 320px;
  height: 240px;
  margin: 0 auto;
}

.mug {
  position: absolute;
  left: 40px;
  top: 30px;
  width: 180px;
  height: 150px;
  border: 18px solid #d7d7d7;
  border-top: 16px solid #d7d7d7;
  border-radius: 0 0 70px 70px;
  background: rgba(255, 255, 255, 0.35);
  overflow: hidden;
  z-index: 2;
}

.handle {
  position: absolute;
  left: 235px;
  top: 80px;
  width: 42px;
  height: 64px;
  border: 12px solid #d7d7d7;
  border-left: none;
  border-radius: 0 40px 40px 0;
  z-index: 1;
}
</style>