<template>
  <div class="row">
    <div class="form-group col-sm">
      <label for="Month">Month</label>
      <select v-model="month" class="form-control" required min="0">
        <option value="" selected>Select A Month</option>
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
    <div class="form-group col-sm">
      <label for="Day">Day</label>
      <input type="text" class="form-control" v-model="day" placeholder="Day" required>
    </div>
    <div class="form-group col-sm">
      <label for="Year">Year</label>
      <input type="text" class="form-control" v-model="year" placeholder="Year" required>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Emit } from "vue-property-decorator";
@Component
export default class BirthdaySelector extends Vue {
  month: string = "";
  day: string = "";
  year: string = "";

  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  @Watch("month")
  @Emit("monthChange")
  monthChange(value: number) {
    return this.month;
  }
  @Watch("day")
  @Emit("dayChange")
  dayChange(value: number) {
    return this.day;
  }
  @Watch("year")
  @Emit("yearChange")
  yearChange(value: number) {
    return this.year;
  }
}
</script>

<style>
</style>
