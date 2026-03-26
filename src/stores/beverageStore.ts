import { defineStore } from "pinia";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import tempretures from "../data/tempretures.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    bases: bases,
    creamers: creamers,
    syrups: syrups,
    temps: tempretures,

    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],
    currentTemp: tempretures[0],

    beverageName: "",

    beverages: [] as {
      name: string;
      base: any;
      creamer: any;
      syrup: any;
      temp: any;
    }[],
  }),

  actions: {
    makeBeverage() {
      const trimmedName = this.beverageName.trim();

      if (!trimmedName) return;

      this.beverages.push({
        name: trimmedName,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
      });

      this.beverageName = "";
    },

    showBeverage(beverage: {
      name: string;
      base: any;
      creamer: any;
      syrup: any;
      temp: any;
    }) {
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
      this.currentTemp = beverage.temp;
    },
  },

  persist: true,
});