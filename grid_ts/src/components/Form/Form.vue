<template>
  <div class="container">
    <div>
      
    <button @click="test">Test Validation</button>
    </div>

    <h1>New Person</h1>
    <br>  
      <form action="" @submit="handleSubmit($event)" id="form-create" >
        <div class="row">
          <div class="form-group col">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" placeholder="First Name" v-model="firstName" required>
          </div>
          <div class="form-group col">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" placeholder="Last Name" v-model="lastName" required>
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
              required>
          </div>
          <div class="form-group col">  
              <label for="phone">Phone Number</label>
              <input type="tel" class="form-control" 
              placeholder="(xxx)-xxx-xxxx" 
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required v-model="phone">
          </div>
        </div>
        <!-- <div class="row">

          <div class="form-group">
            Test Phone Number: (<input  type="tel" :pattern="areaCodePattern" maxlength="3" size="3">) 
            - <input type="tel" size="3">  
            - <input type="tel" size="4">
          </div>
        </div> -->
        <input class="btn btn-primary" type="submit">
      </form>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { Action } from "vuex-class";
import { Watch } from "vue-property-decorator";
export default class Form extends Vue {
  @Action("newPerson") newPerson;
  @Action("getPeople") getPeople;
  @Action("testValidation") test;
  private firstName: string = null;
  private lastName: string = null;
  private birthday: string = null;
  private day: number;
  private month: number;
  private year: number;
  private email: string = null;
  private phone: string = null;
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

  handleSubmit(e: any) {
    // axios.get("localhost:9000").then(resp => {
    //   console.log(resp);
    // });
    e.preventDefault();
    console.log(e);
    console.log("Submit");
    console.log("First", this.firstName);
    console.log("Last", this.lastName);
    console.log("Birthday", this.birthday);

    // console.log("Birthday", this.month, "-", this.day, "-", this.year);
    console.log("Email", this.email);
    console.log("Phone", this.phone);
    const person = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,

      email: this.email,
      phone: this.phone
    };
    console.log(person);
    this.newPerson(person)
      .then(resp => {
        this.$router.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style>
</style>
