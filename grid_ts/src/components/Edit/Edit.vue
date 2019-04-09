<template>
  <div class="container">
    <div v-if="this.validationSchema !== undefined">
    <h1>Edit page</h1>
    <p>{{this.editable}}</p>
    <EditForm v-if="this.user !== null"/>

    </div>
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
  // @Action("getSchema") getSchema: any;
  @State("userSelected") user: any;
  @Getter("validationSchema") validationSchema: any;

  created() {
    if (this.user === null) {
      this.$router.push("/");
    } else {
      console.log("Editing", this.user);
      console.log("Edit container", this.$route.params);
      console.log("Edit -- validationSchema", this.validationSchema.properties);
    }
  }

  get editable() {
    console.log(this.validationSchema.properties);
    let editableAttr = [];
    const vProps = this.validationSchema.properties;
    for (let i in vProps) {
      console.log(i);
      if (vProps[i].editable === true) {
        console.log("Editable is true", vProps[i].editable);
      }
    }

    return editableAttr;
  }
}
</script>

<style>
</style>
