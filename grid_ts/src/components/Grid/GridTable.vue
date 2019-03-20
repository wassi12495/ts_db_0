<template>
  <ag-grid-vue
    class="grid ag-theme-material"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :enableFilter="true"
    :enableSorting="true"
    rowSelection="single"
    @row-selected="onRowSelected"
  ></ag-grid-vue>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Prop from "vue-property-decorator";
import { State, Getter, Action } from "vuex-class";
import { AgGridVue } from "ag-grid-vue";

@Component({
  components: {
    AgGridVue
  }
})
export default class GridTable extends Vue {
  @Getter("people") people;
  @Action("rowSelected") rowSelected;

  data() {
    return {
      columnDefs: [
        { headerName: "ID", field: "id" },
        { headerName: "Last Name", field: "last" },
        { headerName: "First Name", field: "first" },
        { headerName: "Birthday", field: "birthday" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" }
      ]
    };
  }
  get rowData() {
    // User data formatted for ag_grid
    console.log(this.people);
    let formattedData = [];
    for (let i in this.people) {
      console.log("id ", i);
      let p = this.people[i];
      console.log(p);
      formattedData.push(p);
    }
    // const formattedData: any = this.people.forEach((p: any) => {
    //   console.log(p);
    //   // return {
    //   //   first: k.firstName,
    //   //   last: k.lastName,
    //   //   birthday: k.birthday,
    //   //   email: k.email,
    //   //   khone: k.khone,
    //   //   id: k.id
    //   // };
    // });
    console.log(formattedData);
    return formattedData;
  }
  onRowSelected(e: any) {
    // console.log(e);
    // this.rowSelected(e.data.id, this.$router);
    // console.log(this.$router);

    this.$router.push(`/edit/${e.data.id}`);
  }
}
</script>

<style>
</style>
