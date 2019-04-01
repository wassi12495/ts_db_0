<template>
  <div class="container">
    <!-- <div>
        <h1>People</h1>
          <ul v-if="this.people!==undefined">
            <li :v-for="item in this.people"> {{item}}</li>
          </ul>
    </div>-->

    <GridTable :people="gridData"></GridTable>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
import Component from "vue-class-component";
import { State, Getter, Action, Mutation } from "vuex-class";
import axios from "axios";
import { Watch } from "vue-property-decorator";

import GridTable from "./GridTable.vue";

@Component({
  components: {
    GridTable
  }
})
export default class Grid extends Vue {
  @State("people") people;
  @Action("getPeople") getPeople;

  created() {
    if (this.people === null) {
      this.getPeople();
    }
  }
  mounted() {
    console.log("People mount", this.people);
  }

  get gridData() {
    return this.people;
  }
}
</script>

<style>
</style>
