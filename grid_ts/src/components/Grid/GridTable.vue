<template>
    <ag-grid-vue
      class="grid ag-theme-material"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :enableFilter='true'
      :enableSorting='true'
    ></ag-grid-vue>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Prop from "vue-property-decorator";
import { State, Getter } from "vuex-class";
import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    AgGridVue
  }
})
export default class GridTable extends Vue {
  @Getter("people") people;

  data() {
    return {
      columnDefs: [
        { headerName: "Last Name", field: "last" },
        { headerName: "First Name", field: "first" },
        { headerName: "Birthday", field: "birthday" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" }
      ]
    };
  }
  get rowData() {
    //test
    // User data formatted for ag_grid
    console.log(this.people);
    const formattedData: any = this.people.map(p => {
      console.log(p);
      let b: object = p.birthday;
      console.log(b);

      return {
        first: p.firstName,
        last: p.lastName,
        birthday: b.month + "-" + b.day + "-" + b.year,
        email: p.email,
        phone: p.phone
      };
    });
    return formattedData;
  }
}
</script>

<style>
</style>
