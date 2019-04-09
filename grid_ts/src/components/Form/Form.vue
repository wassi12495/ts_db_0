<template>
  <div class="container">
    <div>
      <button @click="this.test">Test Validation</button>
    </div>

    <h1>New Person</h1>
    <br>
    <form action @submit="handleSubmit($event)" id="form-create">
      <div class="row">
        <div class="form-group col">
          <label for="first">First Name</label>
          <input type="text" class="form-control" placeholder="First Name" v-model="first" required>
        </div>
        <div class="form-group col">
          <label for="last">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="last" required>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-sm-4">
          <label for="birthday">Birthday</label>
          <input class="form-control" type="date" v-model="birthday" required>
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
            :pattern="emailPattern"
            :title="emailErrorMsg"
            required
          >
        </div>
        <div class="form-group col">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            placeholder="(xxx)-xxx-xxxx"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
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
import axios from "axios";
import { Action, State, Getter } from "vuex-class";
import { Watch } from "vue-property-decorator";
@Component({})
export default class Form extends Vue {
  @Getter("newUserAsync") newUserAsync: any;
  @Action("newPerson") newPerson: any;
  @Action("getPeople") getPeople: any;
  @Action("testValidation") testValidation: any;

  private first: any = null;
  private last: any = null;
  private birthday: any = null;
  private day: any;
  private month: any;
  private year: any;
  private email: any = null;
  private phone: any = null;
  // onChange(name: string): void {}

  checkStatus(value: any) {
    console.log(value);
  }

  changeMonth(value: number) {
    console.log("month", value);
    this.month = value;
  }
  changeDay(value: number) {
    console.log("day", value);
    this.day = value;
  }
  changeYear(value: number) {
    this.year = value;
    console.log("Year", this.year);
  }

  get emailPattern() {
    // Require @ and .
    return "[a-zA-Z0-9._%+-]+@[a-z0-9-]+.[a-z]{3}$";
  }
  get emailErrorMsg() {
    return "Email address must contain '@' and a valid domain name (e.g. .com, .org, .co.uk, etc)";
  }

  get areaCodePattern() {
    return "[0-9]{3}";
  }
  test(e: any) {
    console.log("this", this);
    this.testValidation();
  }
  handleSubmit(e: any) {
    // axios.get("localhost:9000").then(resp => {
    //   console.log(resp);
    // });
    e.preventDefault();
    console.log(e);
    console.log("Submit");
    console.log("First", this.first);
    console.log("Last", this.last);
    console.log("Birthday", this.birthday);

    // console.log("Birthday", this.month, "-", this.day, "-", this.year);
    console.log("Email", this.email);
    console.log("Phone", this.phone);
    const person = {
      first: this.first,
      last: this.last,
      birthday: this.birthday,

      email: this.email,
      phone: this.phone
    };
    console.log(person);
    this.newPerson(person);
  }
  @Watch("newUserAsync")
  onNewUserAsyncChanged() {
    if (this.newUserAsync === false) {
      this.$router.push("/");
    }
  }
}
</script>

<style>
</style>
