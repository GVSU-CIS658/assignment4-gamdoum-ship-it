import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    beverages: [] as Array<{
      name: string;
      base: string;
      creamer: string;
      syrup: string;
      temp: string;
    }>,
    selectedBeverage: null as null | string,
  }),
  actions: {
    makeBeverage(name: string) {
      this.beverages.push({
        name,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        temp: this.currentTemp,
      });
    },
    showBeverage(name: string) {
      const bev = this.beverages.find((b) => b.name === name);
      if (bev) {
        this.currentBase = bev.base;
        this.currentCreamer = bev.creamer;
        this.currentSyrup = bev.syrup;
        this.currentTemp = bev.temp;
      }
    },
  },
  persist: true,
});