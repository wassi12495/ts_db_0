<template>
  <div>
    <div v-if="this.userSelected !== null">
      <h1>Profile</h1>
      <button @click="handleEdit">Edit</button>

      <br>

      <h2>Name: {{fullName}}  #{{id}}</h2>
      <h2>Phone: {{phone}}</h2>
      <h2>Email: {{email}}</h2>
      <h2>Birthday: {{phone}}</h2>

      <br>
      <button @click="handleDelete">Delete</button>
    </div>
    <div v-else>
      <p>relocating</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action, Getter, State } from "vuex-class";
import { Watch } from "vue-property-decorator";

@Component({})
export default class Profile extends Vue {
  // @Getter("userSelected") userSelected;
  @State("userSelected") userSelected: any;
  @Getter("miscAsync") miscAsync: any;
  @Getter("deleteAsync") deleteAsync: any;
  @Action("getSchema") getSchema: any;
  @Action("deleteUser") deleteUser: any;

  created() {
    console.log("created", this.userSelected);
    if (this.userSelected === null) {
      console.log("created inside", this.userSelected);

      this.$router.push("/");
    } else {
      // this.getSchema();
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

  handleEdit() {
    console.log("Edit button clicked");
    this.getSchema();
  }

  handleDelete() {
    console.log("Delete user");
    if (confirm("Would you like to delter this user?")) {
      console.log("confirmed");
      this.deleteUser(this.userSelected);
    } else {
      console.log("Cancelled");
    }
  }

  @Watch("miscAsync")
  onMiscAsyncChange() {
    console.log("Misc Async", this.miscAsync);
    if (this.miscAsync === false) {
      this.$router.push(`/edit/${this.id}`);
    }
  }

  @Watch("deleteAsync")
  onDeleteAsync() {
    console.log("delete async", this.deleteAsync);
    if (this.deleteAsync === false) {
      this.$router.push("/");
    }
  }
}
</script>

<style>
</style>
