<template>
  <div>
    <h1>Profile</h1>
    <button>Edit</button>
    <br>
    <h2>Name: {{this.fullName}}</h2>
    <h2>Phone: {{this.phone}}</h2>
    <h2>Email: {{this.email}}</h2>
    <h2>Birthday: {{this.birthday}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter } from "vuex-class";
@Component({})
export default class Profile extends Vue {
  data() {
    return {
      fullName: null,
      birthday: null,
      phone: null,
      email: null,
      id: null
    };
  }

  @Getter("userSelected") userSelected;
  mounted() {
    console.log("Mounted  Profile Page", this.userSelected);

    this.fullName = `${this.userSelected.first}` + ` ${this.userSelected.last}`;
    this.birthday = this.userSelected.birthday;
    this.phone = this.userSelected.phone;
    this.email = this.userSelected.email;
    this.id = this.userSelected.id;
    console.log("data", this._data);
  }
}
</script>

<style>
</style>
