<template>
  <div class="mug">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.mug {
  position: relative;
  width: 200px;
  height: 300px;
  border: 4px solid #3e2723;
  border-radius: 0 0 25px 25px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
</style>