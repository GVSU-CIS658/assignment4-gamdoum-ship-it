// src/stores/beverageStore.ts
import { defineStore } from "pinia";

import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import temperatures from "../data/tempretures.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    bases,
    creamers,
    syrups,
    temperatures,

    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],
    currentTemp: temperatures[0],

    beverages: [], // saved beverages
    currentBeverage: null,
  }),

  actions: {
    makeBeverage(name: string) {
      if (!name) return;
      const newDrink = {
        name,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temperature: this.currentTemp,
      };
      this.beverages.push(newDrink);
    },

    showBeverage(bev: any) {
      this.currentBeverage = bev;
      this.currentBase = bev.base;
      this.currentCreamer = bev.creamer;
      this.currentSyrup = bev.syrup;
      this.currentTemp = bev.temperature;
    },
  },

  persist: true,
});