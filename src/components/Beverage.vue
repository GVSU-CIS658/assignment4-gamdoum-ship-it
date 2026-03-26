<template>
  <div>
    <Cold v-if="isIced" />
    <Hot v-else />
  </div>
</template>

<script setup lang="ts">
import Cold from "./Cold.vue";
import Hot from "./Hot.vue";

defineProps<{
  isIced: boolean;
}>();
</script>