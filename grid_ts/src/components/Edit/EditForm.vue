<template>
  <div v-if="this.schema !== null">
    <h1>Edit Form</h1>
    <form action @submit="handleSubmit($event)" id="form-edit">
      <div class="row">
        <div class="form-group col">
          <label for="first">First Name</label>
          <input type="text" class="form-control" :id="this.calltag('first')" placeholder="First Name" v-model="first">
        </div>
        <div class="form-group col">
          <label for="last">Last Name</label>
          <input type="text" class="form-control" :id="this.calltag('last')" placeholder="Last Name" v-model="last">
        </div>
      </div>
      <div class="row">
        <div v-if="this.schema.birthday.editable" class="form-group col-sm-4">
          <label for="birthday">Birthday</label>
          <input class="form-control" :id="this.calltag('birthday')" type="date" v-model="birthday">
        </div>
        <div v-else class="form-group col-sm-4">
          <label for="birthday">Birthday</label>
          <p>{{this.birthday}}</p>
        </div>
      </div>
      <div class="row">
        <div class="form-group col">
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            :id="this.calltag('email')"
            placeholder="Email Address"
            v-model="email"
          >
        </div>
        <div class="form-group col">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            :id="this.calltag('phone')"
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
import { Action, State, Getter } from "vuex-class";
import { Watch, Prop } from "vue-property-decorator";

@Component({})
export default class EditForm extends Vue {
  @State("userSelected") user: any;
  @Action("updateUser") updateUser: any;
  @Getter("updateUserAsync") updateUserAsync: any;
  @Getter("validationSchema") validationSchema: any;
  @Prop() editable: any;
  private data: any = {};
  private schema: any = null;
  // beforeCreate() {
  //   console.log("Edit Form", this.validationSchema);
  //   debugger;
  //   this.schema = this.validationSchema;
  // }
  created() {
    console.log(this.editable);
    this.schema = this.validationSchema.properties;
    console.log("Edit form created", this.user);
    const { first, last, email, phone, birthday, id } = this.user;
    this.data["first"] = first;
    this.data["last"] = last;
    this.data["email"] = email;
    this.data["phone"] = phone;
    this.data["birthday"] = birthday;
    this.data["id"] = id;

    console.log(this.schema);
  }

  calltag(attribute: string) {
    let tag = this.schema[`${attribute}`].calltag;
    console.log("calltag", tag);
    return tag;
  }
  get first() {
    return this.user.first;
  }

  set first(e: string) {
    this.data["first"] = e;
  }
  get last() {
    return this.user.last;
  }
  set last(e: string) {
    this.data["last"] = e;
  }
  get email() {
    return this.user.email;
  }
  set email(e: string) {
    this.data["email"] = e;
  }
  get phone() {
    return this.user.phone;
  }
  set phone(e: string) {
    this.data["phone"] = e;
  }
  get birthday() {
    return this.user.birthday;
  }
  set birthday(e: string) {
    this.data["birthday"] = e;
  }
  get id() {
    return this.user.id;
  }
  set id(e: string) {
    this.data["id"] = e;
  }
  handleSubmit(e: any) {
    e.preventDefault();
    console.log("Submit Edit Form", e);
    console.log(this.data);
    this.updateUser(this.data);
  }

  @Watch("updateUserAsync")
  onUpdateUserAsyncChanged() {
    if (this.updateUserAsync === false) {
      this.$router.push("/");
    }
  }
  @Watch("validationSchema")
  onValidationSchemaChanged() {
    this.schema = this.validationSchema.properties;
    console.log(this.schema);
  }
}
</script>

<style>
</style>
