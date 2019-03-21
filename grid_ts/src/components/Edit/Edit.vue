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
import { Watch } from "vue-property-decorator";

@Component({})
export default class Edit extends Vue {
  @Action("rowSelected") rowSelected;
  @Getter("editing") editing;

  data: {
    person: null;
  };

  mounted() {
    // Fix this to be reactivie to changes in store.editing
    console.log("Edit container", this.$route.params);
    this.rowSelected(this.$route.params.id);
    console.log(this.editing);
  }

  @Watch("editing")
  onRecieveEditing() {
    console.log("recieved", this.editing);
    this.person = this.editing;
    console.log(this.person);
  }
}
</script>

<style>
</style>
