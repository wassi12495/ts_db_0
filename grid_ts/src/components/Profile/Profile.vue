<template>
  <div>
    <h1>
      Profile
    </h1>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
@Component({})
export default class Profile extends Vue {
  @Getter("userSelected") userSelected;
  mounted() {
    console.log("Mounted  Profile Page");
  }
}
</script>

<style>
</style>
