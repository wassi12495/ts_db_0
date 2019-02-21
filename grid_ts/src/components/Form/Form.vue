<template>
  <div class="container">
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
        <BirthdaySelector @monthChange="changeMonth" @dayChange="changeDay" @yearChange="changeYear" min="0"></BirthdaySelector>
        <div class="row">
          <div class="form-group col">
              <label for="email">Email Address</label>
              <input type="email" class="form-control"  id="email" placeholder="Email Address" v-model="email" required>
          </div>
          <div class="form-group col">  
              <label for="phone">Phone Numnber</label>
              <input type="tel" class="form-control" 
              placeholder="(xxx)-xxx-xxxx" 
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required v-model="phone">
          </div>


        </div>
        <input class="btn btn-primary" type="submit"></input>

      </form>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

import { Watch } from "vue-property-decorator";
import BirthdaySelector from "./birthdaySelector.vue";
@Component({
  components: {
    BirthdaySelector
  }
})
export default class Form extends Vue {
  firstName: string = null;
  lastName: string = null;
  day: number = null;
  month: number = null;
  year: number = null;
  email: string = null;
  phone: string = null;
  // onChange(name: string): void {}

  @Watch("firstName")
  @Watch("lastName")
  onChange(value: string) {
    // axios
    //   .get("http://localhost:9000/")
    //   .then(res => {
    //     console.log(res);
    //     this.data = res.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // console.log(this.firstName);
    // console.log(this.lastName);
    // this.firstName = value
  }

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

  handleSubmit(e) {
    // axios.get("localhost:9000").then(resp => {
    //   console.log(resp);
    // });
    e.preventDefault();
    console.log(e);
    console.log("Submit");
    console.log("First", this.firstName);
    console.log("Last", this.lastName);
    console.log("Birthday", this.month, "-", this.day, "-", this.year);
    console.log("Email", this.email);
    console.log("Phone", this.phone);
    const person = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: {
        month: this.month,
        day: this.day,
        year: this.year
      },
      email: this.email,
      phone: this.phone
    };
    console.log(person);
    axios
      .post("http://localhost:9000/createPerson", person)
      .then(resp => {
        console.log(resp);
        this.$router.push("/grid");
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style>
</style>
