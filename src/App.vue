<template>
  <div class="app-wrapper">
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <div class="controls">
      <div class="group">
        <h3>Temperature</h3>
        <label v-for="temp in beverageStore.temps" :key="temp" class="option">
          <input
            type="radio"
            name="temperature"
            :value="temp"
            v-model="beverageStore.currentTemp"
          />
          {{ temp }}
        </label>
      </div>

      <div class="group">
        <h3>Base</h3>
        <label
          v-for="base in beverageStore.bases"
          :key="base.id"
          class="option"
        >
          <input
            type="radio"
            name="base"
            :value="base"
            v-model="beverageStore.currentBase"
          />
          {{ base.name }}
        </label>
      </div>

      <div class="group">
        <h3>Creamer</h3>
        <label
          v-for="creamer in beverageStore.creamers"
          :key="creamer.id"
          class="option"
        >
          <input
            type="radio"
            name="creamer"
            :value="creamer"
            v-model="beverageStore.currentCreamer"
          />
          {{ creamer.name }}
        </label>
      </div>

      <div class="group">
        <h3>Syrup</h3>
        <label
          v-for="syrup in beverageStore.syrups"
          :key="syrup.id"
          class="option"
        >
          <input
            type="radio"
            name="syrup"
            :value="syrup"
            v-model="beverageStore.currentSyrup"
          />
          {{ syrup.name }}
        </label>
      </div>

      <div class="make-row">
        <label for="bev-name" class="name-label">Name</label>
        <input
          id="bev-name"
          v-model="beverageStore.beverageName"
          type="text"
          placeholder="Beverage Name"
          class="name-input"
        />
        <button @click="beverageStore.makeBeverage()" class="make-btn">
          Make Beverage
        </button>
      </div>

      <div id="beverage-container" class="saved-section">
        <h3>Saved Recipes</h3>

        <p v-if="beverageStore.beverages.length === 0" class="empty-text">
          No beverages saved yet.
        </p>

        <label
          v-for="(bev, index) in beverageStore.beverages"
          :key="index"
          class="saved-item"
        >
          <input
            type="radio"
            name="savedBeverage"
            @change="beverageStore.showBeverage(bev)"
          />
          {{ bev.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style scoped>
.app-wrapper {
  min-width: 760px;
  padding: 20px;
}

.controls {
  margin-top: 30px;
  color: black;
}

.group {
  margin-bottom: 18px;
}

.group h3 {
  margin: 0 0 8px 0;
}

.option {
  margin-right: 14px;
  display: inline-block;
}

.make-row {
  margin-top: 20px;
  margin-bottom: 24px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.name-label {
  font-weight: bold;
}

.name-input {
  width: 280px;
  height: 36px;
  font-size: 18px;
  padding: 4px 8px;
}

.make-btn {
  height: 36px;
  font-size: 18px;
  padding: 0 14px;
  cursor: pointer;
}

.saved-section {
  margin-top: 10px;
}

.saved-item {
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
}

.empty-text {
  font-style: italic;
}
</style>