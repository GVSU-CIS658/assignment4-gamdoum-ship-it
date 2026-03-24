<template>
  <div id="steam">
    <div class="stream" v-for="i in 3" :key="i"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#steam {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.stream {
  width: 10px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: calc(50% - 5px);
  animation: steam 2s infinite;
}
@keyframes steam {
  0% { opacity: 0.2; transform: translateY(0px); }
  50% { opacity: 0.5; transform: translateY(-20px); }
  100% { opacity: 0.2; transform: translateY(-40px); }
}
</style>