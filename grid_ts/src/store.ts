const URL = 'http://localhost:9000';

import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const state: any = {
  people: [],
  rowSelected: null,
};

export const getters = {
  people: (state: any) => state.people,
  rowSelected: (state: any) => state.rowSelected,
};
export const mutations = {
  setPeople(state: any, data: any[]) {
    console.log('Initialize people', data);
    state.people = data;
  },
  personCreated(state: any, data: any) {
    console.log('Add newly created person', data);
    state.people.push(data);
  },
  rowSelected(state: any, data: any) {
    console.log('Row Selected');
    state.rowSelected = data;
  },
};

export const actions = {
  getPeople({ commit }: any) {
    Axios.get('http://localhost:9000/').then(resp => {
      console.log(resp);
      commit('setPeople', resp.data);
    });
  },
  newPerson({ commit }: any, person: any) {
    Axios.post('http://localhost:9000/createPerson', person).then(resp => {
      console.log(resp);
      commit('personCreated', resp.data);
    });
  },
  testValidation({ commit }: any) {
    Axios.post(`${URL}/test`).then(resp => {
      console.log(resp);
    });
  },
  rowSelected({ commit }: any, selection: any) {
    console.log(selection);
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
