<template>
  <div class="container">
    <h1>Edit page</h1>
    <EditForm/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { Action, Getter, State } from "vuex-class";
import { Watch } from "vue-property-decorator";

import EditForm from "./EditForm.vue";
@Component({
  components: {
    EditForm
  }
})
export default class Edit extends Vue {
  // @Action("rowSelected") rowSelected;
  // @Getter("editing") editing;
  @State("userSelected") user;

  created() {
    if (this.user === null) {
      this.$router.push("/");
    } else {
      console.log("Editing", this.user);
      console.log("Edit container", this.$route.params);
    }
  }

  // @Watch("editing")
  // onRecieveEditing() {
  //   console.log("recieved", this.editing);
  //   this.data = this.editing;
  //   console.log(this.data);
  // }

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
