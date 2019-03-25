<template>
  <div>
    <h1>Edit Form {{greeting}}</h1>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";
import { Watch } from "vue-property-decorator";

@Component({})
export default class EditForm extends Vue {
  greeting: string = "hello";
}
</script>

<style>
</style>
