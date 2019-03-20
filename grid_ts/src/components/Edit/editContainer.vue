<template>
  <div class="container">
    <h1>Edit page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { Action, Getter } from "vuex-class";
@Component({})
export default class EditContainer extends Vue {
  @Action("rowSelected") rowSelected;
  @Getter("editing") editing;

  mounted() {
    console.log("Edit container", this.$route.params);
    this.rowSelected(this.$route.params.id);
  }
}
</script>

<style>
</style>
