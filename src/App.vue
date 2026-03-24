<template>
  <div>
    <Beverage />

    <h3>Base</h3>
    <div>
      <label v-for="base in beverageStore.bases" :key="base">
        <input type="radio" :value="base" v-model="beverageStore.currentBase" /> {{ base }}
      </label>
    </div>

    <h3>Creamer</h3>
    <div>
      <label v-for="creamer in beverageStore.creamers" :key="creamer">
        <input type="radio" :value="creamer" v-model="beverageStore.currentCreamer" /> {{ creamer }}
      </label>
    </div>

    <h3>Syrup</h3>
    <div>
      <label v-for="syrup in beverageStore.syrups" :key="syrup">
        <input type="radio" :value="syrup" v-model="beverageStore.currentSyrup" /> {{ syrup }}
      </label>
    </div>

    <h3>Temperature</h3>
    <div>
      <label v-for="temp in beverageStore.temperatures" :key="temp">
        <input type="radio" :value="temp" v-model="beverageStore.currentTemp" /> {{ temp }}
      </label>
    </div>

    <input type="text" placeholder="Beverage Name" v-model="drinkName" />
    <button @click="createDrink">🍺 Make Beverage</button>

    <div id="beverage-container" style="margin-top: 20px">
      <div v-for="(bev, index) in beverageStore.beverages" :key="index">
        <button @click="beverageStore.showBeverage(bev)">{{ bev.name }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBeverageStore } from "./stores/beverageStore";
import Beverage from "./components/Beverage.vue";

const beverageStore = useBeverageStore();
const drinkName = ref("");

function createDrink() {
  beverageStore.makeBeverage(drinkName.value);
  drinkName.value = "";
}
</script>

<style lang="scss">
body, html {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
</style>