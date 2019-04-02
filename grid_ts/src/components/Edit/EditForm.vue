<template>
  <div>
    <h1>Edit Form</h1>
    <form action @submit="handleSubmit($event)" id="form-create">
      <div class="row">
        <div class="form-group col">
          <label for="first">First Name</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="first" >
        </div>
        <div class="form-group col">
          <label for="last">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="last" >
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-4">
          <label for="birthday">Birthday</label>
          <input class="form-control" type="date" v-model="birthday" >
        </div>
      </div>
      <div class="row">
        <div class="form-group col">
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email Address"
            v-model="email"
          >
        </div>
        <div class="form-group col">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            placeholder="(xxx)-xxx-xxxx"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            v-model="phone"
          >
        </div>
      </div>
    
      <input class="btn btn-primary" type="submit">
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, State } from "vuex-class";
import { Watch } from "vue-property-decorator";

@Component({})
export default class EditForm extends Vue {
  @State("userSelected") user;

  get first() {
    return this.user.first;
  }
  get last() {
    return this.user.last;
  }
  get email() {
    return this.user.email;
  }
  get phone() {
    return this.user.phone;
  }
  get birthday() {
    return this.user.birthday;
  }
  get id() {
    return this.user.id;
  }
}
</script>

<style>
</style>
