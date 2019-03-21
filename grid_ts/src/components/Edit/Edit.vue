<template>
  <div class="container">
      <h1>Edit page</h1>
      <EditForm/>
     <!-- <form action="" @submit="handleSubmit($event)" id="form-create" >
        <div class="row">
          <div class="form-group col">
            <label for="first">First Name</label>
            <input type="text" class="form-control" placeholder="First Name" v-model="this.first" required>
          </div>
          <div class="form-group col">
            <label for="last">Last Name</label>
            <input type="text" class="form-control" placeholder="Last Name" v-model="this.last" required>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-sm-4">
            <label for="birthday">Birthday</label>
            <input class="form-control" type="date" v-model="this.birthday" required>
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
              v-model="this.email" 
              
              required>
          </div>
          <div class="form-group col">  
              <label for="phone">Phone Number</label>
              <input type="tel" class="form-control" 
              placeholder="(xxx)-xxx-xxxx" 
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              required v-model="this.phone">
          </div>
        </div>
       
        <input class="btn btn-primary" type="submit">
      </form> -->

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { Action, Getter } from "vuex-class";
import { Watch } from "vue-property-decorator";

import EditForm from "./EditForm.vue";
@Component({
  components: {
    EditForm
  }
})
export default class Edit extends Vue {
  @Action("rowSelected") rowSelected;
  @Getter("editing") editing;

  data: null;

  mounted() {
    // Fix this to be reactivie to changes in store.editing
    console.log(this.data);
    console.log("Edit container", this.$route.params);
    this.rowSelected(this.$route.params.id);
    console.log(this.editing);
  }

  @Watch("editing")
  onRecieveEditing() {
    console.log("recieved", this.editing);
    this.data = this.editing;
    console.log(this.data);
  }

  get first() {
    return this.first;
  }
  get last() {
    return this.last;
  }
  get email() {
    return this.email;
  }
  get phone() {
    return this.phone;
  }
  get birthday() {
    return this.birthday;
  }
  get id() {
    return this.id;
  }
}
</script>

<style>
</style>
