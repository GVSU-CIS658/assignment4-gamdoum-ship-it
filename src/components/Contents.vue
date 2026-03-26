<template>
  <div class="contents">
    <Base />
    <Syrup />
    <Creamer />
  </div>
</template>

<script setup lang="ts">
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Syrup from "./Syrup.vue";
</script>

<style scoped>
.contents {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>