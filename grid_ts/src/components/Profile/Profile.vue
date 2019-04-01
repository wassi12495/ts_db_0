<template>
  <div :v-if="this.userSelected !== null">
    <h1>Profile</h1>
    <button>Edit</button>
    <br>

    <h2>Name: {{fullName}}</h2>
    <h2>Phone: {{phone}}</h2>
    <h2>Email: {{email}}</h2>
    <h2>Birthday: {{phone}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
@Component({})
export default class Profile extends Vue {
  @Getter("userSelected") userSelected;

  created() {
    console.log("created", this.userSelected);
    if (this.userSelected === null) {
      console.log("created inside", this.userSelected);

      this.$router.push("/");
    }
  }

  get fullName(): string {
    console.log("full name", this.userSelected);
    return `${this.userSelected.first}` + ` ${this.userSelected.last}`;
  }
  get birthday(): string {
    return this.userSelected.birthday;
  }
  get phone(): string {
    return this.userSelected.phone;
  }
  get email(): string {
    return this.userSelected.email;
  }
  get id(): string {
    return this.userSelected.id;
  }
}
</script>

<style>
</style>
