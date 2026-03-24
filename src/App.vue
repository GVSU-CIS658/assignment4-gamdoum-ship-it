<template>
  <div id="app">
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <h3>Select Temperature:</h3>
    <ul>
      <li v-for="temp in beverageStore.temps" :key="temp">
        <label>
          <input
            type="radio"
            name="temperature"
            :value="temp"
            v-model="beverageStore.currentTemp"
          />
          {{ temp }}
        </label>
      </li>
    </ul>

    <h3>Enter Beverage Name:</h3>
    <input type="text" v-model="newBeverageName" placeholder="Beverage Name" />
    <button @click="addBeverage">🍺 Make Beverage</button>

    <h3>Saved Beverages:</h3>
    <div id="beverage-container">
      <ul>
        <li v-for="bev in beverageStore.beverages" :key="bev.name">
          <button @click="beverageStore.showBeverage(bev.name)">
            {{ bev.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBeverageStore } from "./stores/beverageStore";
import Beverage from "./components/Beverage.vue";

const beverageStore = useBeverageStore();
const newBeverageName = ref("");

function addBeverage() {
  if (newBeverageName.value.trim() !== "") {
    beverageStore.makeBeverage(newBeverageName.value);
    newBeverageName.value = "";
  }
}
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: auto;
  font-family: sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  margin: 5px;
  cursor: pointer;
}
</style>
